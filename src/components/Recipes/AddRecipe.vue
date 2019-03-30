<template>
  <div class="form">
    <div class="modal-header">
      <h3>New Recipe</h3>
    </div>
    <form @submit.prevent="saveRecipe" class="recipe-form">
      <div class="modal-body">
        <label class="form-label">
          Title
          <input
            type="text"
            class="form-control"
            v-model="form.title"
            v-validate="{ required: true, max:50 }"
            name="title"
            placeholder="Title"
          >
          <Error v-bind:errorsType="errors.collect('title')"/>
        </label>
        <br>
        <label class="form-label">
          Description
          <textarea
            rows="5"
            class="form-control"
            type="text"
            v-model="form.description"
            v-validate="'required'"
            name="description"
            placeholder="Description"
          ></textarea>
          <Error v-bind:errorsType="errors.collect('description')"/>
        </label>
        <br>
        <label class="form-label">
          Image
          <input
            type="text"
            class="form-control"
            v-model="form.image"
            v-validate="{ required: true, max:200 }"
            name="image"
            placeholder="Image URL"
          >
          <Error v-bind:errorsType="errors.collect('image')"/>
        </label>
      </div>
      <div class="modal-footer text-right">
        <button type="submit" class="modal-default-button">Save</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Error from "../Error/Error.vue";

export default {
  name: "AddRecipe",

  components: {
    Error
  },

  data() {
    return {
      form: {
        title: null,
        description: null,
        image: null
      }
    };
  },

  methods: {
    ...mapActions("Recipes", ["addRecipe", "getRecipes"]),

    resetForm() {
      this.form.title = null;
      this.form.description = null;
      this.form.image = null;
      this.$validator.reset();
    },

    saveRecipe() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.addRecipe(this.form).then(() => {
            this.getRecipes();
            this.$emit("close");
          });
        }
      });
    }
  },

  computed: {
    ...mapState("Recipes", ["isLoading"])
  }
};
</script>

<style scope>
.form {
  text-align: left;
}
.recipe-form {
  text-align: left;
  padding: 0px;
  align-items: inherit;
}
.modal-header h3 {
  margin-top: 0;
  color: #ff4b2b;
}

.modal-body {
  margin: 20px 0;
}

.text-right {
  text-align: right;
}

.form-label {
  display: block;
  margin-bottom: 1em;
}

.form-label > .form-control {
  margin-top: 0.5em;
}

.form-control {
  display: block;
  width: 100%;
  padding: 0.5em 1em;
  line-height: 1.5;
  border: 1px solid #ddd;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
