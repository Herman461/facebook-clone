<template>
  <div class="login">
    <div class="login__body">
      <div class="login__content">
        <h1 class="login__title">Registration</h1>
        <div class="login__text">{{ $t("login.welcome") }}</div>
        <div class="login__form form-login">
          <auth-form />
        </div>
      </div>
    </div>
    <!--    <div @click="socialAuth('facebook')">facebook</div>-->
  </div>
</template>

<script>
import BaseInput from "../common/BaseInput";
import AuthForm from "./components/AuthForm";


export default {
  name: "auth-page",
  components: {AuthForm, BaseInput},
};
</script>
<style lang="scss">



.login {
  min-height: 100vh;
  background-color: #212121;
  padding: 20px 0;
  &__body {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
    max-width: 600px;
    justify-content: center;
  }

  &__content {
    padding: 50px;
    width: 100%;
    background-color: #3d3c3c;
    border-radius: 10px;
    border: 1px solid #575757;
  }

  &__title {
    font-size: 30px;
    font-weight: 700;

    &:not(:last-child) {
      margin: 0 0 15px 0;
    }
  }

  &__text {
    font-size: 18px;

    &:not(:last-child) {
      margin: 0 0 30px 0;
    }
  }

}
</style>
