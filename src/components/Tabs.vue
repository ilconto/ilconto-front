<template>
    <div>
      <div class="tabs is-centered">
          <ul>
              <li v-for="(tab, index) in tabs" 
                  :class="{'is-active': tab.isActive}"
                  :key="index">
                  <a @click="changeTab(tab)">
                      {{ tab.name }}
                  </a>
              </li>
          </ul>
      </div>
      <div class="tab-details">
          <slot></slot>
      </div>
  </div>
</template>


<script>
export default {
    name: 'vue-bulma-tabs',
    data() {
        return {
            tabs: []
        };
    },
    created() {
        this.tabs = this.$children;
    },
    methods: {
        changeTab(tab) {
            this.tabs.map((t) => t.isActive = t.name == tab.name)
        }
    }
}
</script>