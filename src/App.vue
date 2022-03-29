<template>
  <base-wrapper></base-wrapper>
</template>
<script>
import AuthPage from "./components/auth/AuthPage";
import ElNotification from "./plugins/notification/ElNotification";
import BaseWrapper from "./components/common/BaseWrapper";

export default {
  name: 'app',
  components: {BaseWrapper, ElNotification, AuthPage}
}
</script>

<style lang="scss">
@import "./assets/scss/reset.scss";

@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap");

body {
  font-weight: 400;
  color: #fff;
  font-family: "Roboto";
}
</style>
