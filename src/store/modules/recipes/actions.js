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