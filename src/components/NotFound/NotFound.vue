<template>
  <div class="notfound">
    <div class="notfound-404"></div>
    <h1>404</h1>
    <h2>Oops! Page Not Be Found</h2>
    <p>
      Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily
      unavailable
    </p>
    <router-link to="/">Back to homepage</router-link>
  </div>
</template>

<script>
export default {
  name: "NotFound"
};
</script>

<style>
.notfound {
  text-align: center;
  padding: 10px;
}
</style>
