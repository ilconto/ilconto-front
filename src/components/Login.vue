<template>
  <div class="container" id="login-page">
    <Header />
    <form action id="login-form">
      <div class="field-container">
        <p>Email address</p>
        <input
          type="email"
          name="email"
          id="login-email-field"
          class="login-field"
          placeholder="example@email.com"
        />
      </div>
      <div class="field-container">
        <p>Password</p>
        <input
          type="password"
          name="password"
          id="login-password-field"
          class="login-field"
          placeholder="your password.."
        />
      </div>
      <button class="submit-button button is-size-4">Log in</button>
    </form>
    <p class="register-message">
      You can also
      <router-link to="register">register</router-link>
    </p>
  </div>
</template>

<script>
import Header from "./Header";

export default {
  name: "login-page",
  components: {
    Header
  }
};
</script>


<style>
#login-form {
  width: 100%;
  margin: 1em 0;
  padding: 1em;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
}

#login-form input:focus,
textarea:focus,
select:focus {
  outline: none;
}

.field-container {
  padding: 0.5em;
  box-sizing: border-box;
  margin-bottom: 2em;
}

.field-container p {
  font-size: 1.4em;
}

::placeholder {
  color: white;
}

.login-field {
  width: 100%;
  background: transparent;
  padding: 1em;
  padding-left: 0;
  border: 0px solid transparent;
  border-bottom: 2px solid white;
  box-sizing: border-box;
  font-size: 1.2em;
  color: var(--primary-dark);
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

.register-message {
  width: 100%;
  text-align: center;
}
</style>
