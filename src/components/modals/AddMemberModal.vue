<template>
  <div class="modal" :class="{'is-active': isActive}">
    <div class="modal-background" @click="toggle"></div>
    <div class="modal-content">
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">New member</p>
        </header>
        <section class="modal-card-body">
          <form action="" class="member-settings-form">
            <div class="field">
              <label class="label">Member's displayed name</label>
              <div class="control">
                <input class="input" type="text" placeholder="Enter a member name">
              </div>
              <p class="help">Enter the member's name</p>
            </div>
            <div class="field">
              <label class="label">Member email</label>
              <div class="control">
                <input class="input" type="email" placeholder="Enter the member's email">
              </div>
              <p class="help">An email is required to create a board member</p>
            </div>
            <div class="field">
              <div class="control">
                <label class="label">Member initial reset</label>
                <input class="input" type="date">
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input class="input" type="time">
              </div>
              <p class="help">Enter the initial reset time of this the new member</p>
            </div>
          </form>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success">Create new member !</button>
          <button class="button" @click="toggle">Cancel</button>
        </footer>
      </div>
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

.modal-card {
  margin: 0;
}


.modal-actions {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}

</style>