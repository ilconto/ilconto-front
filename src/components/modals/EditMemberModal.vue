<template>
  <div class="modal" :class="{'is-active': isActive}">
    <div class="modal-background" @click="toggle"></div>
    <div class="modal-content">
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Member settings</p>
        </header>
        <section class="modal-card-body">
          <EditMemberForm/>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-link">Save changes</button>
          <button class="button" @click="toggle">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import EditMemberForm from '../forms/EditMemberForm'

export default {
  name: 'edit-member-modal',
  data: function() {
    return {
      isActive: false
    }
  },
  components: {
    EditMemberForm
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