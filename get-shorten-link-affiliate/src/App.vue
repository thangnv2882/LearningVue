<template>
  <div id="app">
    <GetLink/>
  </div>
</template>

<script>
import GetLink from './components/GetLink.vue'

export default {
  name: 'App',
  components: {
    GetLink
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
