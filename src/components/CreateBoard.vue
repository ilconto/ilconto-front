<template>
  <div class="container" id="create-board">
    <Header :subtitle="false"/>
    <p class="title page-description">Create a new board</p>

    <CreateBoardForm />      

    <div class="action-buttons">
      <button class="button is-primary submit-button">Create Board</button>
      <router-link :to="{name:'root'}">
        <button class="button is-info">Back to profile</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import CreateBoardForm from '@/components/forms/CreateBoardForm'

export default {
  name: "CreateBoard",
  components: {
    Header,
    CreateBoardForm
  },
  data() {
    return {
      boardName: null,
      members: [],
      boardPassword: null,
      emailToAdd: null
    };
  },
  methods: {
    addToMemberList: function() {
      this.members.push(this.emailToAdd);
      this.emailToAdd = "";
    }
  }
};
</script>


<style scoped>

#create-board {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

.page-description {
  color: var(--primary-light);
  text-align: center;
  margin: 1.5em 0;
  width: 100%;
}

.action-buttons {
  display: flex;
  width: 100%;
  flex-flow: row nowrap;
  justify-content: space-around;
  padding: 1em 0;
  box-sizing: border-box;
}

.submit-button {
  background-color: var(--primary-light);
  border-color: var(--primary-light) !important;
  color: var(--primary-dark);
}

.submit-button:hover {
  color: var(--primary-light);
  background-color: var(--primary-dark) !important;
}

</style>