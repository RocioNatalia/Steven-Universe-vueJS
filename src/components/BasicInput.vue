<template>
  <div>
    <div class="input-container" v-if="type !== 'textarea'">
      <label>{{ label }}</label>
      <input
        v-bind="$attrs"
        class="field"
        :placeholder="label"
        :value="modelValue"
        :type="type"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>

    <div class="input-container" v-if="type === 'textarea'">
      <label>{{ label }}</label>
      <textarea
        v-bind="$attrs"
        class="field"
        :placeholder="label"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>

  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
};
</script>

<style scoped>
.input-container{
    display: flex;
    flex-direction: column;
    margin: 12px 0;
}

input, textarea {
    font-size: 16px;
    font-family: "Roboto", sans-serif;
    padding: 8px;
    border: none;
    border-radius: 4px;
    margin-top: 4px;
}

textarea{
      resize: none;
      height: 12vh;
}

label {
    color: #ffffff;
}



</style>