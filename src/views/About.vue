<template>
  <div class="main-container">
    <Recipes></Recipes>
  </div>
</template>

<script>
import Recipes from "@/components/Recipes/Recipes";

export default {
  name: "About",
  components: {
    Recipes
  }
};
</script>



<style scoped>
.main-container {
  text-align: -webkit-center;
  font-family: "Montserrat", sans-serif;
  padding: 30px;
}
</style>
