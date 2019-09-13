<template>
  <div class="container" id="register-page">
    <Header :subtitle="false" />
    <form action id="register-form">
      <div class="field-container">
        <p>Email address</p>
        <input
          type="email"
          name="email"
          id="register-email-field"
          class="register-field"
          placeholder="example@email.com"
        />
      </div>
      <div class="field-container">
        <p>Username</p>
        <input
          type="text"
          name="username"
          id="register-username-field"
          class="register-field"
          placeholder="username"
        />
      </div>
      <div class="field-container">
        <p>Password</p>
        <input
          type="password"
          name="password1"
          id="register-password1-field"
          class="register-field"
          placeholder="password"
        />
      </div>
      <div class="field-container">
        <p>Confirm password</p>
        <input
          type="password"
          name="password2"
          id="register-password2-field"
          class="register-field"
          placeholder="please confirm your password"
        />
      </div>
      <button class="submit-button button is-size-4">Create account</button>
    </form>
    <p class="login-message">
      You can also
      <router-link to="login">login</router-link>
    </p>
  </div>
</template>

<script>
import Header from "./Header";

export default {
  name: "register-page",
  components: {
    Header
  }
};
</script>


<style>
#register-form {
  width: 100%;
  margin: 1em 0;
  padding: 1em;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
}

#register-form input:focus,
textarea:focus,
select:focus {
  outline: none;
}

.field-container {
  padding: 0.5em;
  box-sizing: border-box;
  margin-bottom: 2em;
}

.register-field {
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
  color: var(--primary-light);
}

.login-message {
  width: 100%;
  text-align: center;
}
</style>
