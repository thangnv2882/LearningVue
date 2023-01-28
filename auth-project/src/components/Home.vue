<template>
  <div>
    <h3 v-if="account">Hello {{ account.name }}</h3>
    <h3 v-if="!account">You are not logged in</h3>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      account: null,
    };
  },
  async created() {
    let id = localStorage.getItem("id");
    const res = await axios.get(`accounts/${id}`);
    // console.log(res);
    this.account = res.data.data;
  },
};
</script>

<style>
</style>