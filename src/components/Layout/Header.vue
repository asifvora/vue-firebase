<template>
  <header class="header">
    <h1 class="logo-text">Vue Firebase</h1>
    <div class="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.header {
  height: 60px;
  width: 100%;
  background: #ff416c;
  background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
  background: linear-gradient(to right, #ff4b2b, #ff416c);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  color: #ffffff;
  padding: 10px;
}
.header a {
  color: #fff;
  padding-right: 5px;
  text-decoration: none;
}
.logo-text {
  display: inline-block;
  float: left;
}
.nav {
  display: inline-block;
  float: right;
  padding: 10px;
}
</style>

