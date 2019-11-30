<template>
  <div class="container" id="landing-page">
    <Header />
    <p class="switch-message">
      You can also
      <a color="primary" @click="changeAction">{{
        register ? "register" : "login"
      }}</a>
    </p>
    <LoginForm v-if="register"></LoginForm>
    <RegisterForm v-else></RegisterForm>
  </div>
</template>

<script>
import Header from "./Header";
import LoginForm from "./forms/LoginForm";
import RegisterForm from "./forms/RegisterFrom";

export default {
  name: "landing-page",
  data() {
    return {
      register: false
    };
  },
  components: {
    Header,
    LoginForm,
    RegisterForm
  },
  methods: {
    changeAction() {
      this.register = !this.register;
    }
  }
};
</script>

<style>
.switch-message {
  width: 100%;
  text-align: center;
}

.switch-message a {
  color: white;
  font-weight: bold;
}
</style>
