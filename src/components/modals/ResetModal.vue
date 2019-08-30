<template>
  <div class="modal" :class="{'is-active': isActive}">
    <div class="modal-background" @click="toggle"></div>
    <div class="modal-content">
      <article class="message is-warning">
        <div class="message-header">
          <p>Do you really want to reset your score to the current time ?</p>
        </div>
        <div class="message-body">
          <div class="modal-actions">
            <button class="button is-warning">Reset my score !</button>
            <button class="button is-success" @click="toggle">Cancel</button>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>

export default {
  name: 'reset-modal',
  data: function() {
    return {
      isActive: false
    }
  },
  methods: {
    toggle: function() {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style scoped>

.modal-content {
  width: 80%;
}

.modal-actions {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}

</style>