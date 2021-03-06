import LocalStorage from '@/utils/LocalStorage';
import store from '@/store';

const getAccessToken = () => LocalStorage.get('refreshToken');
const getUser = () => LocalStorage.get('user');

export const isAuthenticated = () => {
    const token = getAccessToken();
    const user = getUser();

    if (token && user) {
        store.commit('Auth/setUser', user);
        store.commit('Auth/setIsAuthenticated', true);

        return true;
    } else {
        store.commit('Auth/setUser', null);
        store.commit('Auth/setIsAuthenticated', false);
        LocalStorage.clear();

        return false;
    }
}