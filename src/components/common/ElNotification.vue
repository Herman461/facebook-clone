<template>
  <div class="notification">
    <div class="notification__title">{{ title }}</div>
    <div class="notification__message">{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "el-notification",
  props: {
    title: {
      type: String,
      default: "Title"
    },
    message: {
      type: String,
      default: "Message"
    }
  }
}
</script>

<style lang="scss">
.notification {
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: #212121;
  border: 1px solid #fff;
  padding: 20px;
  width: 300px;
  &__title {
    font-weight: 700;
    font-size: 24px;
    margin: 0px 0px 10px 0px;
  }
  &__message {

  }
}
</style>


