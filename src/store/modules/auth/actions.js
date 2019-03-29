import firebase from 'firebase';
import router from '@/router';
import LocalStorage from '@/utils/LocalStorage';

export const userJoin = ({ commit }, { email, password }) => {
    commit('setLoader', true);
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
            LocalStorage.set('user', user);
            LocalStorage.set('idToken', user['idToken']);
            LocalStorage.set('refreshToken', user['refreshToken']);
            commit('setUser', user);
            commit('setIsAuthenticated', true);
            commit('setLoader', false);
            commit('setSingUpError', null);
            router.push('/about');
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
            LocalStorage.set('user', user);
            LocalStorage.set('idToken', user['idToken']);
            LocalStorage.set('refreshToken', user['refreshToken']);
            commit('setUser', user);
            commit('setIsAuthenticated', true);
            commit('setLoader', false);
            commit('setSingInError', null);
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
            router.push('/');
        })
        .catch(() => {
            LocalStorage.clear();
            commit('setUser', null);
            commit('setIsAuthenticated', false);
            commit('setLoader', false);
            router.push('/');
        });
}