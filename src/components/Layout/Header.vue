<template>
  <header class="header">
    <h1 class="logo-text">Vue Firebase</h1>
    <div class="nav">
      <router-link to="/about" v-if="isAuthenticated">About</router-link>
      <button class="logout-btn" v-if="isAuthenticated" @click="logout">Logout</button>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";

export default {
  name: "Header",

  methods: {
    ...mapActions("Auth", ["userSignOut"]),

    logout() {
      this.userSignOut();
    }
  },

  computed: {
    ...mapState("Auth", ["isAuthenticated"])
  }
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
.logout-btn {
  border-radius: 20px;
  border: 1px solid #ffffff;
  background-color: #ff4b2b;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 5px 34px;
  letter-spacing: 1px;
  text-transform: uppercase;
}
</style>

