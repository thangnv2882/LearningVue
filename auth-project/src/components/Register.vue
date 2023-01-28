<template>
  <!-- <div
    class="tab-pane fade show active"
    id="pills-register"
    role="tabpanel"
    aria-labelledby="tab-register"
  >
    <form @submit.prevent="handleRegister">
      <div class="form-outline mb-4">
        <label class="form-label" for="name">Name</label>
        <input type="text" id="name" class="form-control" v-model="name" />
      </div>

      <div class="form-outline mb-4">
        <label class="form-label" for="registerEmail">Email</label>
        <input
          type="email"
          id="registerEmail"
          class="form-control"
          v-model="email"
        />
      </div>

      <div class="form-outline mb-4">
        <label class="form-label" for="registerPassword">Password</label>
        <input
          type="password"
          id="registerPassword"
          class="form-control"
          v-model="password"
        />
      </div>

      <div class="form-outline mb-4">
        <label class="form-label" for="registerRepeatPassword"
          >Repeat password</label
        >
        <input
          type="password"
          id="registerRepeatPassword"
          class="form-control"
          v-model="password_confirm"
        />
      </div>

      <div class="form-outline mb-4">
        <label class="form-label" for="Account Type">Account Type</label>
        <select class="selectpicker form-control" data-style="btn-primary" v-model="accountType">
          <option>COMPANY</option>
          <option>CANDICATE</option>
        </select>
      </div>

      <button type="submit" class="btn btn-primary btn-block mb-3">
        Sign up
      </button>
    </form>
  </div> -->
  <section class="" style="background-color: #508bfc">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card shadow-2-strong" style="border-radius: 1rem">
            <div class="card-body p-5 text-center">
              <h3 class="mb-5">Sign up</h3>
              <form @submit.prevent="handleRegister">
                <div class="form-outline mb-4">
                  <label class="form-label" for="typeEmailX-2">Name</label>
                  <input
                    type="text"
                    id="typeEmailX-2"
                    class="form-control form-control-lg"
                    v-model="name"
                  />
                </div>

                <div class="form-outline mb-4">
                  <label class="form-label" for="typeEmailX-2">Email</label>
                  <input
                    type="email"
                    id="typeEmailX-2"
                    class="form-control form-control-lg"
                    v-model="email"
                  />
                </div>

                <div class="form-outline mb-4">
                  <label class="form-label" for="typePasswordX-2"
                    >Password</label
                  >
                  <input
                    type="password"
                    id="typePasswordX-2"
                    class="form-control form-control-lg"
                    v-model="password"
                  />
                </div>

                <div class="form-outline mb-4">
                  <label class="form-label" for="typePasswordX-2"
                    >Password</label
                  >
                  <input
                    type="password"
                    id="typePasswordX-2"
                    class="form-control form-control-lg"
                    v-model="password_confirm"
                  />
                </div>

                <div class="form-outline mb-4">
                  <label class="form-label" for="Account Type"
                    >Account Type</label
                  >
                  <select
                    class="selectpicker form-control"
                    data-style="btn-primary"
                    v-model="accountType"
                  >
                    <option>COMPANY</option>
                    <option>CANDICATE</option>
                  </select>
                </div>

                <button class="btn btn-primary btn-lg btn-block" type="submit">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password_confirm: "",
      accountType: "",
    };
  },
  methods: {
    async handleRegister() {
      const res = await axios.post("auth/sign-up", {
        name: this.name,
        email: this.email,
        password: this.password,
        // password_confirm: this.password_confirm,
        accountType: this.accountType,
      });
      this.$router.push("/login");
    },
  },
};
</script>

<style>
</style>