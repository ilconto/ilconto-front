<template>
  <div class="container">

    <ResetModal ref="resetModal"/>
    <EditMemberModal ref="editMemberModal"/>
    <AddMemberModal ref="addMemberModal"/>
    <DeleteMemberModal ref="deleteMemberModal"/>


    <!-- Page content -->
    <div v-if="loading" class="loading-screen">
      <Spinner/>
    </div>

    <div v-else-if="error">Could not load board</div>

    <div v-else-if="settings" id="board-settings-page">
      <Header :subtitle="false"/>

      <div class="board-settings">
        <div class="board-header">
          <h2 class="title is-3">{{board.title}}</h2>
        </div>

        <div class="board-tools">
          <a class="button" @click="toggleSettings">Back to the board</a>
        </div>

        <Tabs class="board-settings-tabs">
          <Tab name="Settings" :selected="true">
            <form action="" class="settings-form">
              <div class="field">
                <label class="label">Board title</label>
                <div class="control">
                  <input class="input" type="text" :placeholder="board.title" :value="board.title">
                </div>
                <p class="help">Enter a new title</p>
              </div>
              <div class="field">
                <div class="control">
                  <button class="button is-link">Submit</button>
                </div>
              </div>
            </form>
          </Tab>
          <Tab name="Manage Members" class="member-manager">
            <button class="button add-button" @click="toggleModal('addMemberModal')">Add board member</button>
            <ul>
              <li v-for="member in board.members" v-bind:key="member.id" class="member-settings-item">
                <p>{{member.username}}</p>
                <button class="button is-warning is-rounded" @click="toggleModal('editMemberModal')">
                  <span class="icon is-small">
                    <i class="fas fa-user-edit"></i>
                  </span>
                </button>
                <button class="button is-danger is-rounded" @click="toggleModal('deleteMemberModal')">
                  <span class="icon is-small">
                    <i class="fas fa-user-minus"></i>
                  </span>
                </button>
              </li>
            </ul>
          </Tab>
        </Tabs>
      </div>
    </div>

    <div v-else id="board-page">
      <Header :subtitle="false"/>

      <div class="board">
        <div class="board-header">
          <h2 class="title is-3">{{this.board.title}}</h2>
        </div>

        <div class="board-tools">
          <button class="button" @click="toggleSettings">Manage board</button>
          <button class="button" @click="toggleModal('resetModal')">Reset me !</button>
        </div>

        <ul>
          <li v-for="member in board.members" v-bind:key="member.id">
            <BoardMember :rank="1" :username="member.username" :delay="member.last_time"/>
          </li>
        </ul>
      </div>

    </div>

  </div>
</template>

<script>
import Header from './Header'
import BoardMember from "./BoardMember"
import Spinner from './Spinner'
import Tabs from './Tabs'
import Tab from './Tab'
import ResetModal from './modals//ResetModal'
import AddMemberModal from './modals/AddMemberModal'
import EditMemberModal from './modals/EditMemberModal'
import DeleteMemberModal from './modals/DeleteMemberModal'

/* Temporary import, will be removed with connection to the api */
import data from "../data.json"
import { setTimeout } from 'timers';

export default {
  data() {
    return {
      boardID: null,
      loading: true,
      settings: false,
      board: data,
      activeSettingsTab: null,
      error: false,
    };
  },
  components: {
    Header,
    BoardMember,
    Spinner,
    Tabs,
    Tab,
    ResetModal,
    AddMemberModal,
    EditMemberModal,
    DeleteMemberModal,
  },
  created() {
    this.fetchBoardData();
  },
  methods: {
    fetchBoardData() {
      /* This function:
      - Retrieves board data from the backend api
      - Changes the component state from loading to loaded or error
      */
      let board = this
      setTimeout(function() {
        board.loading = false
      }, 2)
    },
    toggleSettings() {
      this.settings = !this.settings
      this.activeSettingsTab = this.activeSettingsTab === null ? 'general' : this.activeSettingsTab
    },
    toggleModal(name) {
     this.$refs[name].toggle()
    }
  }
};
</script>


<style scoped>

.loading-screen {
  width: 100%;
  display: flex;
  height: 50vh;
}

#board-page, #board-settings-page {
  display: flex;
  flex-flow: column nowrap;
}

.board , .board-settings {
  background-color: white;
}

.board-header {
  color: var(--primary-dark);
  text-align: center;
  margin: 1.5em 0;
  width: 100%;
}

.board-tools {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
}

.board-tools .button, .member-manager .add-button {
  background-color: var(--primary-light);
  color: var(--primary-dark);
}

.board-settings-tabs {
  margin-top: 1em;
}

.settings-form {
  width: 80%;
  margin: 1em auto;
}

.member-manager {
  display: flex;
  flex-flow: column nowrap;
}

.member-manager .add-button {
  margin: auto;
}

.member-settings-item {
  padding: .5em 1em;
  box-sizing: border-box;
  margin: 1em 10%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  background-color: var(--primary-light);
  color: var(--primary);
  border-radius: 10px;
}

.member-settings-item p {
  margin-top: auto;
  margin-bottom: auto;
  margin-right: auto;
}

.member-settings-item button:first-of-type {
  margin-right: 5px;
}
</style>
