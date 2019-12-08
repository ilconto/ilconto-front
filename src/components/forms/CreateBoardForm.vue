<template>
  <form action class="form">
    <div class="field-container">
      <p>Title</p>
      <input
        v-model="title"
        type="text"
        name="title"
        class="form-field"
        id="create-board-title-field"
        placeholder="Enter a title.."
      />
    </div>
    <div class="members">
      <p>
        Members
        <span style="opacity: 0.5">(other than yourself)</span>
      </p>
      <div class="member-container form-field">
        <input
          v-model="newMemberEmail"
          type="email"
          name="member-email"
          placeholder="Enter an email.."
          required
        />
        <button class="button is-success submit-button" @click.prevent="addMember">Add</button>
      </div>
      <ul class="members-list">
        <li v-for="member in members" v-bind:key="member" class="member-container entered">
          <p>{{ member }}</p>
          <button class="button is-danger" @click.prevent="deleteMember(member)">Delete</button>
        </li>
      </ul>
    </div>
    <button @click.prevent="createBoard" class="submit-button button is-size-4">Create new board</button>
  </form>
</template>

<script>
import { isEmailValid } from "@/utils";
import axios from "axios";

export default {
  name: "create-board-form",
  data: function() {
    return {
      newMemberEmail: "",
      title: "",
      members: []
    };
  },
  methods: {
    addMember: function() {
      if (
        isEmailValid(this.newMemberEmail) &&
        !this.members.includes(this.newMemberEmail)
      ) {
        this.members.push(this.newMemberEmail);
        this.newMemberEmail = "";
      }
    },
    deleteMember: function(member) {
      this.members = this.members.filter(x => x !== member);
    },
    createBoard() {
      var bodyData = {
        title: this.title,
        members: this.members.map(member => {
          let output = {
            user: {
              email: member
            }
          };
          return output;
        })
      };

      axios({
        method: "post",
        baseURL: process.env.VUE_APP_ROOT_API,
        url: "/boards/",
        data: bodyData,
        json: true,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${this.$session.get("token")}`
        }
      })
        .then(response => {
          this.$router.push("/profile");
        })
        .catch(e => {
          this.$snackbar.open({
            message: "Could not create account. Please try again",
            type: "is-warning",
            position: "is-bottom",
            actionText: "create an account",
            queue: false,
            duration: 5000,
            onAction: () => {
              this.$router.push("/signin");
            }
          });

          this.email = "";
          this.username = "";
          this.password1 = "";
          this.password2 = "";
        });
    }
  }
};
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
  padding: 0.5em 0;
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
  padding: 0.5em 0;
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
  margin: auto;
  background-color: var(--primary-dark);
  border-color: var(--primary-dark);
  color: var(--primary-light);
}

.submit-button:hover {
  color: var(--primary-light) !important;
  border-color: var(--primary-ligth) !important;
}
</style>
