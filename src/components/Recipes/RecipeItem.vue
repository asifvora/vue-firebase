<template>
  <div class="theme-light">
    <div class="card-header">
      <div
        class="card-header-image"
        v-bind:style="{ backgroundImage: 'url(' + recipe.image + ')' }"
      ></div>
    </div>
    <div class="card-details">
      <h3 class="headline">{{recipe.title}}</h3>
      <div class="text">{{recipe.description | readMore(100, '...')}}</div>
      <div class="action">
        <span class="action-btn" @click="deleteItem(recipe)">
          Delete
          <!-- <i class="fab fa-linkedin-in"></i> -->
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "RecipeItem",

  props: {
    recipe: {
      type: Object,
      required: true
    }
  },

  methods: {
    ...mapActions("Recipes", ["getRecipes", "deleteRecipe"]),

    deleteItem(recipe) {
      this.deleteRecipe(recipe).then(() => {
        this.getRecipes();
      });
    }
  }
};
</script>

<style scoped>
.theme-light {
  width: 100%;
  height: 500px;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.87);
}
.card-header {
  height: 350px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -ms-flex: 1 0 auto;
  flex: 1 0 auto;
  overflow: hidden;
  position: relative;
}
.card-details {
  height: 150px;
  padding: 16px;
  width: 100%;
}
.card-header-image {
  /* background-image: url(https://meal-prep-9b30a.firebaseapp.com/images/keto.jpeg); */
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
.headline {
  text-align: left;
  font-size: 24px !important;
  line-height: 32px !important;
  font-family: Roboto, sans-serif !important;
  font-weight: 400;
  letter-spacing: normal !important;
}
.text {
  line-height: 1.5;
  text-align: left;
}
.action {
  justify-content: space-between;
  flex-direction: column;
  display: flex;
}
.action-btn {
  justify-content: flex-end;
  display: flex;
}
</style>
