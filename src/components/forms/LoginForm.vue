<template>
  <div>
    <form class="form" id="login-form">
      <div class="field-container">
        <p>Email address</p>
        <input
          v-model="email"
          @keyup.enter="login"
          type="email"
          name="email"
          id="login-email-field"
          class="form-field"
          placeholder="example@email.com"
        />
      </div>
      <div class="field-container">
        <p>Password</p>
        <input
          v-model="password"
          @keyup.enter="login"
          type="password"
          name="password"
          id="login-password-field"
          class="form-field"
          placeholder="your password.."
        />
      </div>
      <v-btn @click.prevent="login" large v-bind:disabled="!isComplete" color="secondary">Log in</v-btn>
    </form>
    <v-alert :value="login_error" transition="scale-transition" type="error">
      <p>Could not log you in, please try again</p>
    </v-alert>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
      login_error: false
    };
  },
  methods: {
    login() {
      if (this.isComplete) {
        var bodyFormData = new FormData();
        bodyFormData.set("email", this.email);
        bodyFormData.set("password", this.password);
        axios({
          method: "post",
          baseURL: process.env.VUE_APP_ROOT_API,
          url: "/rest-auth/login/",
          data: bodyFormData,
          json: true,
          headers: { "Content-Type": "application/json" }
        })
          .then(response => {
            this.$session.set("token", response.data.key);
            this.$router.push("/profile");
          })
          .catch(e => {
            this.login_error = true;
            setTimeout(() => {
              this.login_error = false;
            }, 5000);
            this.email = "";
            this.password = "";
          });
      }
    }
  },
  computed: {
    isComplete: function() {
      return this.email.length && this.password.length;
    }
  },
  mounted() {
    document.title = "Ilconto | login";
  }
};
</script>

<style lang="scss" scoped>
.welcome-form input:focus,
textarea:focus,
select:focus {
  outline: none;
}

.field-container {
  padding: 0.5em;
  box-sizing: border-box;
}

#login-form .field-container {
  margin-bottom: 2em;
}

#register-form .field-container {
  margin-bottom: 0;
}

.field-container:last-of-type {
  margin-bottom: 1em !important;
}

.field-container p {
  font-size: 1.4em;
}

::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.submit-button {
  margin: auto;
  background-color: var(--primary-dark);
  border-color: var(--primary-dark) !important;
  color: var(--primary-light);
}

.submit-button:hover {
  color: var(--primary-light);
  border-color: var(--primary-light) !important;
}
</style>
