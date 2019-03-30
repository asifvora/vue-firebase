<template>
  <div>
    <div class="heading">
      <h1>Available Meals</h1>
      <button id="show-modal" @click="showModal = true">Add New</button>
    </div>
    <div class="layout">
      <div class="card" v-for="recipe in recipes" v-bind:key="recipe.id">
        <RecipeItem v-bind:recipe="recipe"/>
      </div>
    </div>
    <FullPageLoader v-bind:isShow="isLoading"/>
    <modal :show="showModal" @close="close">
      <AddRecipe @close="close" ref="form"/>
    </modal>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import AddRecipe from "./AddRecipe";
import RecipeItem from "./RecipeItem";
import FullPageLoader from "../FullPageLoader/FullPageLoader.vue";
import Modal from "../Modal/Modal.vue";

export default {
  name: "Recipes",

  components: { RecipeItem, FullPageLoader, Modal, AddRecipe },

  data() {
    return {
      showModal: false
    };
  },

  methods: {
    ...mapActions("Recipes", ["getRecipes"]),

    close() {
      this.showModal = false;
      this.$refs.form.resetForm();
    }
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
  width: 100%;
  display: inline-block;
  padding: 10px;
}

.heading > h1 {
  display: inline-block;
  float: left;
}
.heading > button {
  display: inline-block;
  float: right;
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

