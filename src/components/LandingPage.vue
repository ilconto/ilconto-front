<template>
  <div class="container landing-page">
    <div class="page-header">
      <h1 class="title is-3">Welcome to</h1>
      <!-- <h1 class="title is-1" v-bind:class="[justLoaded ?  justLoadedClass : animatedClass]">Ilconto</h1> -->
      <h1 class="title is-1 animated">Ilconto</h1>
    </div>

    <div class="btn-group">
      <p>
        <router-link :to="{name: 'login'}">
          <b-button type="is-primary">Login</b-button>
        </router-link>
      </p>
      <p id="or" class="marker">Or</p>
      <p>
        <router-link :to="{name: 'signin'}">
          <b-button type="is-primary">Sign In</b-button>
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.justLoaded = false;
  },
  data() {
    return {
      animatedClass: "animated",
      justLoadedClass: "just-loaded",
      justLoaded: false
    };
  }
};
</script>


<style lang="scss">
.landing-page {
  height: 100%;
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
