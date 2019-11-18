<template>
  <div class="form-container">
    <form class="welcome-form" v-if="action === 'login'" id="login-form">
      <div class="field-container">
        <p>Email address</p>
        <input
          v-model="email"
          type="email"
          name="email"
          id="login-email-field"
          class="welcome-form-field"
          placeholder="example@email.com"
        />
      </div>
      <div class="field-container">
        <p>Password</p>
        <input
          v-model="password"
          type="password"
          name="password"
          id="login-password-field"
          class="welcome-form-field"
          placeholder="your password.."
        />
      </div>
      <v-btn @click.prevent="login" class="submit-button button is-size-4" color="primary">Log in</v-btn>
    </form>
    <form action class="welcome-form" id="register-form" v-if="action === 'register'">
      <div class="field-container">
        <p>Email address</p>
        <input
          v-model="email"
          type="email"
          name="email"
          id="register-email-field"
          class="welcome-form-field"
          placeholder="example@email.com"
        />
      </div>
      <div class="field-container">
        <p>Username</p>
        <input
          v-model="username"
          type="text"
          name="username"
          id="register-username-field"
          class="welcome-form-field"
          placeholder="username"
        />
      </div>
      <div class="field-container">
        <p>Password</p>
        <input
          v-model="password1"
          type="password"
          name="password1"
          id="register-password1-field"
          class="welcome-form-field"
          placeholder="password"
        />
      </div>
      <div class="field-container">
        <p>Confirm password</p>
        <input
          v-model="password2"
          type="password"
          name="password2"
          id="register-password2-field"
          class="welcome-form-field"
          placeholder="please confirm your password"
        />
      </div>
      <v-btn color="primary" @click.prevent="register" class="submit-button button is-size-4">Create account</v-btn>
    </form>

    <v-alert :value="login_error" transition="scale-transition" type="error">
      <p>Could not log you in, please try again</p>
    </v-alert>

    <v-alert :value="register_error" transition="scale-transition" type="error">
      <p>Could not register your account, please try again</p>
    </v-alert>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "landing-form",
  props: {
    action: {
      type: String,
      default: "login"
    }
  },
  data() {
    return {
      email: "",
      password: "",
      username: "",
      password1: "",
      password2: "",
      login_error: false,
      register_error: false
    };
  },
  methods: {
    login() {
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
          setTimeout(()=>{
            this.login_error=false
          },5000)

          this.email = "";
          this.password = "";
        });
    },
    register() {
      var bodyFormData = new FormData();
      bodyFormData.set("email", this.email);
      bodyFormData.set("username", this.username);
      bodyFormData.set("password1", this.password1);
      bodyFormData.set("password2", this.password2);
      axios({
        method: "post",
        baseURL: process.env.VUE_APP_ROOT_API,
        url: "/rest-auth/registration/",
        data: bodyFormData,
        json: true,
        headers: { "Content-Type": "application/json" }
      })
        .then(response => {
          this.$session.set("token", response.data.key);
          this.$router.push("/profile");
        })
        .catch(e => {
          this.register_error = true;
          setTimeout(()=>{
            this.register_error=false
          },5000)
          this.email = "";
          this.username = "";
          this.password1 = "";
          this.password2 = "";
        });
    }
  }
};
</script>

<style scoped>
.welcome-form {
  width: 100%;
  margin: 1em 0;
  padding: 1em;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
}

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

.welcome-form-field {
  width: 100%;
  background: transparent;
  padding: 0.5em 0;
  border: 0px solid transparent;
  border-bottom: 2px solid white;
  box-sizing: border-box;
  font-size: 1.2em;
  color: var(--primary-light);
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