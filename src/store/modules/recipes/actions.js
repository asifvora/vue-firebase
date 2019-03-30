import store from '@/store';
import { mealsCollection } from '@/config/firebase';

export const getRecipes = ({ commit }) => {
    commit('setLoader', true);
    mealsCollection
        .get()
        .then(res => {
            let blogsData = [];
            res.forEach(doc => {
                blogsData.push({
                    id: doc.id,
                    title: doc.data().title,
                    description: doc.data().description,
                    image: doc.data().image,
                    createdAt: doc.data().createdAt,
                });
            });
            commit('setLoader', false);
            commit('setRecipes', blogsData);
        })
        .catch(() => {
            commit('setLoader', false);
        });
}

export const addRecipe = ({ commit }, { title, description, image }) => {
    commit('setLoader', true);
    const userId = store.getters['Auth/currentUser']['user']['uid'];

    return mealsCollection.doc().set({
        userId, title, description, image, createdAt: new Date()
    }).then(() => {
        commit('setLoader', false);
    }).catch(() => {
        commit('setLoader', false);
    });
}

export const deleteRecipe = ({ commit }, { id }) => {
    commit('setLoader', true);

    return mealsCollection.doc(id).delete().then(() => {
        commit('setLoader', false);
    }).catch(() => {
        commit('setLoader', false);
    });
}