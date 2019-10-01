<template>
  <div class="container">
    <form class="activate-form">
      <div class="field-container">
        <p>Username</p>
        <input
          v-model="username"
          type="text"
          name="username"
          placeholder="Enter awesome username here"
        />
      </div>
      <div class="field-container">
        <p>Password</p>
        <input v-model="password1" type="password" name="password1" placeholder="your password..." />
      </div>
      <div class="field-container">
        <p>Confirm your password</p>
        <input
          v-model="password2"
          type="password"
          name="password2"
          placeholder="confirm your password..."
        />
      </div>
      <button @click.prevent="activate" class="submit-button button is-size-4">Activate your account</button>
    </form>
  </div>
</template>