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
            router.push('/about');
        })
        .catch(() => {
            LocalStorage.remove('user');
            LocalStorage.remove('idToken');
            LocalStorage.remove('refreshToken');
            commit('setUser', null);
            commit('setIsAuthenticated', false);
            commit('setLoader', false);
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
            router.push('/about');
        })
        .catch(() => {
            LocalStorage.remove('user');
            LocalStorage.remove('idToken');
            LocalStorage.remove('refreshToken');
            commit('setUser', null);
            commit('setIsAuthenticated', false);
            commit('setLoader', false);
        });
}