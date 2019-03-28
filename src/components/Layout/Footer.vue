<template>
  <footer class="footer">
    <span>&copy; {{ year.getFullYear() }}</span>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      year: new Date()
    };
  }
};
</script>

<style scoped>
.footer {
  background: #ff416c;
  background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
  background: linear-gradient(to right, #ff4b2b, #ff416c);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  text-align: center;
  padding: 10px;
}

.footer span {
  color: #fff;
  padding-right: 5px;
  text-decoration: none;
}
</style>

