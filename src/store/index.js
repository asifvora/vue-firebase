
import Vuex from 'vuex';
import Vue from 'vue';
import Auth from './modules/auth';
import Recipes from './modules/recipes';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
    modules: {
        Auth,
        Recipes
    }
});