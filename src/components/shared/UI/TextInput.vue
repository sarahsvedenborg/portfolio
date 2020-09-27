<template>
  <div>
    <p :class="inputActive || input != '' ? 'active' : 'passive'">
      <label :for="label">{{label}}</label>
    </p>
    <br />
    <input
      type="text"
      :id="label"
      :name="name"
      @focus="inputActive = true"
      @blur="inputActive = false"
      v-model="input"
      @change="inputChanged(input)"
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
      input: "",
    };
  },
  computed: {
    inputIsEmpty() {
      return this.input != "";
    },
  },
};
</script>

<style scoped>
div {
  position: relative;
  color: var(--color-light);
  width: 100%;
  margin-bottom: 1em;
  margin-top: -1.5em;
}
.active {
  font-size: 12px;
  transform: translateY(80px);
  transition: transform 0.5s;
}

.passive {
  font-size: inherit;
  transform: translateY(50px);
}
p {
  margin: 0px;
  position: relative;
  z-index: 0;
}

input {
  color: var(--color-light);
  font-family: Avenir;
  position: relative;
  border: none;
  border-bottom: 2px solid var(--color-light);
  background-color: transparent;
  width: 100%;
  cursor: pointer;
  z-index: 2;
  padding: 5px;
  font-size: large;
  text-align: center;
}

input:focus {
  outline: none;
  border: none;
  border-bottom: 2px solid var(--color-light);
}
</style>