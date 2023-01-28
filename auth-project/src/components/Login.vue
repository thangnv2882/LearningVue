<template>
  <!-- <div
    class="tab-pane fade show active"
    id="pills-login"
    role="tabpanel"
    aria-labelledby="tab-login"
  >
    <form @submit.prevent="handleLogin">
      <div class="form-outline mb-4">
        <label class="form-label" for="loginName">Email</label>
        <input
          type="email"
          id="loginName"
          class="form-control"
          v-model="email"
        />
      </div>

      <div class="form-outline mb-4">
        <label class="form-label" for="loginPassword">Password</label>
        <input
          type="password"
          id="loginPassword"
          class="form-control"
          v-model="password"
        />
      </div>

      <div class="row mb-2">
        <a href="/forgot">Forgot password?</a>
      </div>

      <button type="submit" class="btn btn-primary btn-block mb-4">
        Sign in
      </button>
    </form>
  </div> -->
  <section class="" style="background-color: #508bfc">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card shadow-2-strong" style="border-radius: 1rem">
            <div class="card-body p-5 text-center">
              <h3 class="mb-5">Sign in</h3>
              <form @submit.prevent="handleLogin">
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

                <button class="btn btn-primary btn-lg btn-block" type="submit">
                  Login
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
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async handleLogin() {
      const res = await axios.post("auth/sign-in", {
        email: this.email,
        password: this.password,
      });
      localStorage.setItem("id", res.data.data.account.id);
      localStorage.setItem("token", res.data.data.token);
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>