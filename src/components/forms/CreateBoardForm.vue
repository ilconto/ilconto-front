<template>
  <form action="" class="create-board-form">
    <div class="field-container">
      <p>Title</p>
      <input
        v-model="title"
        type="text"
        name="title"
        id="create-board-title-field"
        class="create-board-form-field"
        placeholder="Enter a title.."
      />
    </div>
    <div class="members">
      <p>Members</p>
      <div class="member-container field">
        <input
          v-model="newMemberEmail"
          type="email"
          name="member-email"
          placeholder="Enter an email.."
          required
        />
        <button class="button is-success submit-button" @click.prevent="addMember">
          Add
        </button>
      </div>
      <ul class="members-list">
        <li v-for="member in members" v-bind:key="member" class="member-container entered">
          <p>{{member}}</p><button class="button is-danger" @click.prevent="deleteMember(member)">Delete</button>
        </li>
      </ul>
    </div>
  </form>
</template>

<script>
export default {
  name: 'create-board-form',
  data: function() {
    return {
      newMemberEmail: "",
      title: "",
      members: []
    }
  },
  methods: {
    addMember: function() {
      this.members.push(this.newMemberEmail)
      console.log(this.members)
    },
    deleteMember: function(member) {
      this.members = this.members.filter(x => x !== member)
    }
  }
}
</script>

<style scoped>

.create-board-form {
  width: 100%;
  margin: 1em 0;
  padding: 1em;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
}

.create-board-form input:focus,
.create-board-form textarea:focus,
.create-board-form select:focus {
  outline: none;
}

.field-container {
  padding: 0.5em;
  box-sizing: border-box;
}

.field-container {
  margin-bottom: 0;
}

.field-container:last-of-type {
  margin-bottom: 1em !important;
}

.field-container p {
  font-size: 1.4em;
}

::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.create-board-form-field {
  width: 100%;
  background: transparent;
  padding: .5em 0;
  border: 0px solid transparent;
  border-bottom: 2px solid white;
  box-sizing: border-box;
  font-size: 1.2em;
  color: var(--primary-light);
}

.members {
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  padding: 0.5em;
  box-sizing: border-box;
}

.members p {
  font-size: 1.4em;
}

.member-container {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}

.member-container.field input {
  width: 80%;
  background: transparent;
  padding: .5em 0;
  border: 0px solid transparent;
  border-bottom: 2px solid white;
  box-sizing: border-box;
  font-size: 1.2em;
  color: var(--primary-light);
}

.members-list {
  margin-top: 0.5em;
}

.member-container.entered {
  padding: 0.5em 0 0.5em 0.5em;
  box-sizing: border-box;
}

.member-container.entered p {
  font-size: 0.8em;
  margin: auto auto auto 0;
}

.submit-button {
  width: 15%;
  background-color: var(--primary-light);
  border-color: var(--primary-light) !important;
  color: var(--primary-dark);
}

.submit-button:hover {
  color: var(--primary-light);
  background-color: var(--primary-dark) !important;
}

</style>