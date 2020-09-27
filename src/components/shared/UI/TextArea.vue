<template>
  <div class="textArea">
    <label :for="label" class="passiveLabel">{{label}}</label>
    <br />
    <textarea
      :id="label"
      :name="name"
      :class="inputActive ? 'active' : 'passive'"
      @focus="inputActive = true"
      @blur="inputActive = false"
      v-model="message"
      @change="inputChanged(message)"
    />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
    },
    inputChanged: {
      type: Function,
    },
  },
  data() {
    return {
      inputActive: false,
      message: "",
    };
  },
};
</script>

<style scoped>
.textArea {
  margin-top: 40px;
  width: 100%;
}
.passiveLabel {
  font-size: inherit;
  transform: translateY(50px);
}
textarea {
  height: 20vh;
  padding: 10px;
  width: 100%;
}

textarea:focus {
  outline: none;
  background-color: #C0EFD6;
}
</style>