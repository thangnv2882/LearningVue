<template>
  <div id="app">
    <div class="container">
      <Nav/>
      <router-view />
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
export default {
  name: "App",
  components: {
    Nav
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* .container {
  width: 500px;
  margin: 0 auto;
  border: 1px solid #000;
  padding: 30px 20px 10px;
  border-radius: 10px;
} */
</style>
