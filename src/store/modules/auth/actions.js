import firebase from 'firebase';
import router from '@/router';
import LocalStorage from '@/utils/LocalStorage';
import { successToaster } from '@/utils/Toaster';
import { usersCollection } from '@/config/firebase';

export const userJoin = ({ commit }, { name, email, password }) => {
    commit('setLoader', true);
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
            // create user obj
            usersCollection.doc(user.user.uid).set({
                id: user.user.uid,
                name: name,
                email: email
            }).then(() => {
                LocalStorage.set('user', user.user);
                LocalStorage.set('idToken', user.user['idToken']);
                LocalStorage.set('refreshToken', user.user['refreshToken']);
                commit('setUser', user.user);
                commit('setIsAuthenticated', true);
                commit('setLoader', false);
                commit('setSingUpError', null);
                successToaster('SingUp successfully.');
                router.push('/about');
            }).catch(err => {
                console.log(err)
            });
        })
        .catch(error => {
            const errMessage = error.message ? error.message : 'Error in singUp. Please try again.';
            LocalStorage.clear();
            commit('setUser', null);
            commit('setIsAuthenticated', false);
            commit('setLoader', false);
            commit('setSingUpError', errMessage);
        });
}

export const userLogin = ({ commit }, { email, password }) => {
    commit('setLoader', true);
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
            console.log('user',user.user);
            
            LocalStorage.set('user', user.user);
            LocalStorage.set('idToken', user.user['idToken']);
            LocalStorage.set('refreshToken', user.user['refreshToken']);
            commit('setUser', user.user);
            commit('setIsAuthenticated', true);
            commit('setLoader', false);
            commit('setSingInError', null);
            successToaster('SingIn successfully.');
            router.push('/about');
        })
        .catch(error => {
            const errMessage = error.message ? error.message : 'Invalid email or password. Please enter correct information.';
            LocalStorage.clear();
            commit('setUser', null);
            commit('setIsAuthenticated', false);
            commit('setLoader', false);
            commit('setSingInError', errMessage);
        });
}

export const userSignOut = ({ commit }) => {
    commit('setLoader', true);
    firebase
        .auth()
        .signOut()
        .then(() => {
            LocalStorage.remove('user');
            LocalStorage.remove('idToken');
            LocalStorage.remove('refreshToken');
            commit('setUser', null);
            commit('setIsAuthenticated', false);
            commit('setLoader', false);
            successToaster('SignOut successfully.');
            router.push('/');
        })
        .catch(() => {
            LocalStorage.clear();
            commit('setUser', null);
            commit('setIsAuthenticated', false);
            commit('setLoader', false);
            successToaster('SignOut successfully.');
            router.push('/');
        });
}