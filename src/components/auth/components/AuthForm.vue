<template>
<!--  <div>-->
<!--    <form class="form-login" @submit.prevent="submitForm">-->
<!--      <div class="form-login__input">-->
<!--        <base-input-->
<!--            :modelValue="username"-->
<!--            label="Enter your name"-->
<!--            name="username"-->
<!--            @update:modelValue="verifyUsername"-->
<!--        />-->
<!--      </div>-->
<!--      <div class="form-login__input">-->
<!--        <base-input-->
<!--            :modelValue="password"-->
<!--            type="password"-->
<!--            label="Enter your password"-->
<!--            name="password"-->
<!--            @update:modelValue="updatePassword"-->
<!--        />-->
<!--      </div>-->
<!--      <div class="form-login__btn">-->
<!--        <button class="btn">Go!</button>-->
<!--      </div>-->
<!--    </form>-->
<!--    <div class="socials">-->
<!--      <div class="socials__item" @click="socialAuth('facebook')">facebook</div>-->
<!--    </div>-->
<!--  </div>-->

</template>

<script>
import BaseInput from "../../common/BaseInput";
import axios from 'axios';
import {debounce} from "lodash";
import hello from 'hellojs';

export default {
  name: "auth-form",
  components: {BaseInput},
  data() {
    return {
      username: "",
      password: "",
      usernameIssues: []
    }
  },
  created() {
    hello.init({
      facebook: 436992934809305,
    })
  },
  mounted() {
    this.$notify('Hello world!')
  },
  methods: {
    async socialAuth(network) {
      try {
        const redirectUri = `${window.location.protocol}//${window.location.host}`;

        await hello.login(network, {
          force: true,
          redirect_uri: redirectUri
        });
        const result = await hello(network).api('me');
        console.log(result)
      } catch(e) {
        console.error(e);
      }
    },
    submitForm() {
      const username = this.username;
      const password = this.password;

      axios.post('http://localhost:3000/api/users', { username, password })
          .then(res => {
            if (res.data.resultCode === 0) {
              this.$router.push('/');
            }
          })
    },
    verifyUsername: debounce(async function(newValue) {
      this.username = newValue;
      const result = await this.$store.dispatch('auth/verifyUsername', {
        username: this.username
      });
      if (result.issues !== undefined) {
        this.usernameIssues = result.issues;
      } else {
        this.usernameIssues = [];
      }
    }, 500),
    updatePassword(newValue) {
      this.password = newValue;
    },
  }
}
</script>

<style lang="scss">
.form-login {
  &__input {
    margin: 0 0 32px 0;
  }

  &__label {
    display: inline-block;
    margin: 0 0 6px 0;
  }

  &__btn {
    display: flex;
    justify-content: center;

    .btn {
      text-align: center;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 2px 20px;
      width: 100%;
      max-width: 300px;
      min-height: 47px;
      font-size: 16px;
      border-radius: 5px;
      color: #fff;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.025em;
      background-color: #7b32d7;
    }
  }

}
</style>
