<template>
  <v-container>
    <v-layout row class="member">
      <v-flex md6 class="member-username">{{user.username}}</v-flex>
      <v-flex md6 class="member-delay" color="secondary">{{formatTime(user.score)}}</v-flex>
      <v-dialog v-if="isAdmin" v-model="resetConfirmation">
        <template v-slot:activator="{ on }">
          <v-btn id="reset-btn" color="warning" v-on="on">Reset</v-btn>
        </template>
        <template>
          <div class="modal-content">
            <p>Do you really want to reset your score to now?</p>
            <div id="btns">
              <v-btn @click="cancelReset" class="modal-btn" color="primary">Cancel</v-btn>
              <v-btn @click="confirmReset" class="modal-btn" color="secondary">Confirm</v-btn>
            </div>
          </div>
        </template>
      </v-dialog>
    </v-layout>
  </v-container>
</template>
    </v-dialog>
    
    
  </v-layout>
  
</v-container>

</template>

<style scoped>
.member {
  display: flex;
  font-size: 1.5em;
  position: relative;
  width: 100%;
  justify-content: space-between;
  padding: 0.5em;
  box-sizing: border-box;
  border-style: solid;
  border-radius: 10px;
  margin: auto;
}
.member-delay {
  color: var(--v-secondary-base);
}
#reset-btn {
  width: 2em;
}
#btns {
  float: right;
}
.modal-content {
  width: 100%;
  padding: 1em;
  /* padding-top: 2em; */
  /* background-color: rgba(255, 255, 255, 0.2); */
}

.modal-btn {
  margin: 0.5em;
}
</style>



<script>
import {
  utcTimeToRelativeDays,
  utcTimeToRelativeSeconds,
  secondsToDays
} from "../utils";
import AskResetConfirmation from "./modals/AskResetConfirmation";
import axios from "axios";

export default {
  name: "BoardMember",
  components: {
    AskResetConfirmation
  },
  props: {
    user: {
      type: Object,
      required: true
    },
    parentBoardId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isAdmin: false,
      resetConfirmation: false
      // parentBoardId: "blz"
    };
  },

  computed: {
    readableDelay: function() {
      return moment.duration(this.delay).humanize();
    }
  },

  methods: {
    formatTime(seconds) {
      return secondsToDays(utcTimeToRelativeSeconds(seconds));
    },
    askResetConfirmation() {
      this.resetConfirmation = true;
    },
    cancelReset() {
      this.resetConfirmation = false;
    },
    confirmReset() {
      console.log(this.parentBoardId);
      console.log(this.$session.get("userID"));
      var bodyFormData = new FormData();
      bodyFormData.set("score", new Date().getTime());
      axios({
        method: "patch",
        baseURL: process.env.VUE_APP_ROOT_API,
        url: `/boards/${this.parentBoardId}/members/${this.$session.get(
          "userID"
        )}`,
        data: bodyFormData,
        json: true,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${this.$session.get("token")}`
        }
      })
        .then(response => {})
        .catch(error => {
          this.score = computeScore(this.member.last_time); // abort modification if request failed
          console.log(error);
        });
    }
  },
  mounted() {
    console.log(this.$session.get("username"));
    this.isAdmin = this.$session.get("username") == this.user.username;
    console.log(this.parentBoardId);
  }
};
</script>


