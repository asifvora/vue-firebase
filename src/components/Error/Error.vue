<template>
  <div class="error-div">
    <ul>
      <li v-for="error in errorsType" :key="error">
        <p>{{ error }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Error",
  props: ["errorsType"],
};
</script>

<style scoped>
.error-div {
  width: 100%;
}
ul {
  list-style: none;
}
ul > li > p {
  float: left;
  color: red;
  font-size: 12px;
  letter-spacing: 0;
  margin: 0;
}
</style>