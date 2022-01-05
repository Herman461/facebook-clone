<template>
  <div class="base-input">
    <label v-if="label" class="base-input__label" :for="name">{{ label }}</label>
    <input
        class="input"
        :type="type"
        :id="name"
        @input="$emit('update:modelValue', $event.target.value)"
        :value="modelValue"
    />
  </div>

</template>

<script>
export default {
  name: "base-input",
  props: {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: "text"
    },
    label: {
      type: String
    },
    modelValue: {
      type: String,
      required: true
    }
  },
}
</script>

<style lang="scss">
.base-input {
  .input {
    font-size: 16px;
    width: 100%;
    min-height: 41px;
    padding: 0 15px;
    border: 1px solid #575757;
    border-radius: 5px;
  }

  &__label {
    display: inline-block;
    margin: 0 0 6px 0;
  }
}
</style>
