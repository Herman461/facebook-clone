<template>
  <div class="notification" v-for="item in list">
    <div class="notification__title">{{ item.title }}</div>
    <div class="notification__message">{{ item.text }}</div>
  </div>
</template>

<script>
import { emitter } from './events';
import { Timer } from './util';
import { v4 as uuid } from 'uuid';

export default {
  name: "el-notification",
  props: {
    duration: {
      type: Number,
      default: 3000,
    }
  },
  data() {
    return {
      list: []
    }
  },
  mounted() {
    emitter.on('add', this.addItem);
  },
  methods: {
    addItem(event) {
      const id = uuid();
      const duration = event.duration ? event.duration : this.duration;
      const timer = new Timer(() => this.destroy(id), duration)
      const { title, text } = event;

      const item = {
        id,
        title,
        text,
        duration,
        timer
      }
      this.list.push(item)
    },
    destroy(id) {
      this.list = this.list.filter(item => item.id !== id);
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
  display: flex;
  align-items: center;
  &__title {
    font-weight: 700;
    font-size: 24px;
    margin: 0px 0px 10px 0px;
  }
  &__message {

  }
}
</style>
