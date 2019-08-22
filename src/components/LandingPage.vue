<template>
  <div class="container" id="landing-page">
    <h1 class="application-title">Ilconto</h1>
    <form action="" id="login-form">
      <div class="field-container">
        <input type="email" name="email" id="login-email-field" class="login-field">
      </div>
      <div class="field-container">
        <input type="email" name="email" id="login-email-field" class="login-field">
      </div>
    </form>
  </div>
</template>

<script>
export default {

};
</script>


<style>
.application-title {
  margin: 1em auto;
  font-size: 3em;
  font-weight: bold;
  font-family: 'Comfortaa', cursive;
  color: var(--primary-dark);
}

#login-form {
  width: 100%;
  padding: 1em;
  box-sizing: border-box;
  background-color: white;
}

#login-form input:focus, textarea:focus, select:focus{
  outline: none;
}

.field-container {
  padding: 0.5em;
  box-sizing: border-box;
  margin-bottom: 2em;
}

.login-field {
  width: 100%;
  background: var(--primary-light);
  padding: 1em;
  border: 0px solid transparent;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 1.2em;
  color: var(--primary-dark);
}

</style>
