<template>
  <div class="form-container">
    <form action class="welcome-form" v-if="action === 'login'" id="login-form">
      <div class="field-container">
        <p>Email address</p>
        <input
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
          type="password"
          name="password"
          id="login-password-field"
          class="welcome-form-field"
          placeholder="your password.."
        />
      </div>
      <button @click="login" class="submit-button button is-size-4">Log in</button>
    </form>
    <form action="" class="welcome-form" id="register-form" v-if="action === 'register'">
      <div class="field-container">
        <p>Email address</p>
        <input type="email" name="email" id="register-email-field" class="welcome-form-field" placeholder="example@email.com">
      </div>
      <div class="field-container">
        <p>Username</p>
        <input type="text" name="username" id="register-username-field" class="welcome-form-field" placeholder="username">
      </div>
      <div class="field-container">
        <p>Password</p>
        <input type="password" name="password1" id="register-password1-field" class="welcome-form-field" placeholder="password">
      </div>
      <div class="field-container">
        <p>Confirm password</p>
        <input type="password" name="password2" id="register-password2-field" class="welcome-form-field" placeholder="please confirm your password">
      </div>
      <button class="submit-button button is-size-4">Create account</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'landing-form',
  props: {
    action: {
      type: String,
      default: "login"
    }
  },
  methods: {
    login() {
      var body = {
        email: this.email,
        password: this.password
      }
      var bodyFormData = new FormData()
      bodyFormData.set("email", this.email)
      bodyFormData.set("password", this.password)
      axios({
        method: "post",
        baseURL: process.env.VUE_APP_ROOT_API,
        url: "/rest-auth/login/",
        data: bodyFormData,
        json: true,
        headers: { "Content-Type": "application/json" }
      })
        .then(response => {
          console.log(response.data);
          this.$session.set("user", response.data.user)
          this.$router.push("/profile")
        })
        .catch(e => {
          // console.log(e);
          this.$snackbar.open({
            message: "Could not log you in. Please try again",
            type: "is-warning",
            position: "is-bottom",
            actionText: "create an account",
            queue: false,
            duration: 5000,
            onAction: () => {
              this.$router.push("/signin")
            }
          })

          this.email = ""
          this.password = ""
        })
    }
  }
}
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
  padding: .5em 0;
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