<template>
  <div id="app">
    <comp-header v-bind:title="title"/>
    <list-user v-bind:listUser="listUser" />
    <comp-footer />
  </div>
</template>

<script>
import CompHeader from "./components/CompHeader.vue";
import ListUser from "./components/ListUser.vue";
import CompFooter from "./components/CompFooter.vue";
export default {
  name: "app",
  data() {
    return {
      title: "Hello Vue",
      listUser: [
        { id: 1, email: "test1@gmail.com", active: true },
        { id: 2, email: "test2@gmail.com", active: false },
        { id: 3, email: "test3@gmail.com", active: true },
        { id: 4, email: "test4@gmail.com", active: false },
        { id: 5, email: "test5@gmail.com", active: true },
      ],
    };
  },
  components: {
    CompHeader,
    CompFooter,
    ListUser,
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
</style>
