<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: "comp-header",
  props: {
    title: {
      type: String,
      default: "Default"
    }
  },
  data() {
    return {
    };
  }
};
</script>

<style>
</style>