<template>
  <div class="container" id="landing-page">
    <Header />
    <p class="switch-message">
      You can also
      <router-link :to="nextAction">{{nextAction}}</router-link>
    </p>
    <LandingForm :action="action" />
  </div>
</template>

<script>
import Header from "./Header";
import LandingForm from "./forms/LandingForm";

export default {
  name: "landing-page",
  components: {
    Header,
    LandingForm
  },
  props: {
    action: {
      type: String,
      default: "login"
    }
  },
  computed: {
    nextAction: function() {
      return this.action == "login" ? "register" : "login";
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
