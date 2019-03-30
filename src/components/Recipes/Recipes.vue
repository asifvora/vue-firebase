<template>
  <div>
    <div class="heading">
      <h1>Available Meal</h1>
    </div>
    <div class="layout">
      <div class="card" v-for="recipe in recipes" v-bind:key="recipe.id">
        <RecipeItem v-bind:recipe="recipe"/>
      </div>
    </div>
    <FullPageLoader v-bind:isShow="isLoading"/>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import RecipeItem from "./RecipeItem";
import FullPageLoader from "../FullPageLoader/FullPageLoader.vue";

export default {
  name: "Recipes",

  components: { RecipeItem, FullPageLoader },

  methods: {
    ...mapActions("Recipes", ["getRecipes"])
  },

  computed: {
    ...mapState("Recipes", ["isLoading", "recipes"])
  },

  created() {
    this.getRecipes();
  }
};
</script>

<style scoped>
.heading {
  padding: 10px;
}
.layout {
  width: 100%;
  margin: 25px;
  display: flex;
  flex-wrap: wrap;
}
.card {
  margin: 15px;
  width: 22%;
  display: inline-flex;
  margin-bottom: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}
.card:hover {
  cursor: pointer;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>
