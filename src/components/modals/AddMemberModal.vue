<template>
  <v-overlay v-bind:value="isActive" :opacity="0.7">
    <form action class="form">
      <p class="display-1">Invite a new member</p>
      <v-container>
        <v-layout row>
          <div class="field-container">
            <p>Email address</p>
            <input
              v-model="newMemberEmail"
              @keyup.enter="register"
              type="email"
              name="email"
              id="register-email-field"
              class="form-field"
              placeholder="example@email.com"
            />
          </div>
        </v-layout>
        <v-btn @click="sendInvitation" color="secondary">Send!</v-btn>
      </v-container>
    </form>
  </v-overlay>
</template>

<script>
import LoginForm from "../forms/LoginForm";
import axios from "axios";

export default {
  name: "reset-modal",
  data: function() {
    return {
      newMemberEmail: "",
      isActive: true
    };
  },
  methods: {
    toggle: function() {
      this.isActive = !this.isActive;
    },
    sendInvitation: function() {
      // add axios logic here
      this.$emit("confirmationSent");
      this.isActive = false;
    }
  },
  components: {
    LoginForm
  }
};
</script>

<style scoped>
button {
  margin-top: 1em;
}
</style>