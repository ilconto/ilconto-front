<template>
  <div class="container" id="landing-page">
    <Header />
    <p class="switch-message">
      You can also
      <router-link :to="nextAction">{{nextAction}}</router-link>
    </p>
    <LandingForm :action="action"/>
  </div>
</template>

<script>
import Header from "./Header"
import LandingForm from "./forms/LandingForm"

export default {
  name: "landing-page",
  components: {
    Header,
    LandingForm
  },
  props: {
    action: {
      type: String,
      default: 'login'
    }
  },
  computed: {
    nextAction: function() {
      return this.action == 'login' ? 'register' : 'login'
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
.animated {
  animation-duration: 3s;
  animation-name: anim;
  animation-iteration-count: 1;
  -webkit-transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000;
  color: red;
}

.just-loaded {
  animation-duration: 3s;
  animation-name: enter-anim;
  animation-iteration-count: 1;
  -webkit-transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000;
}

@keyframes anim {
  from {
    font-size: 5em;
  }
  50% {
    font-size: 5.2em;
  }
  to {
    font-size: 5em;
  }
}

@keyframes enter-anim {
  from {
    font-size: 0em;
  }
  to {
    font-size: 5em;
  }
}
</style>
