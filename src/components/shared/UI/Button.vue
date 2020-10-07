<template>
  <button @click="action ? action() : null" :type="buttonType ? buttonType : null">{{label}}</button>
</template>

<script>
export default {
  props: {
    outlined: {
      type: String,
    },
    label: {
      type: String,
    },
    action: {
      type: Function,
    },
    buttonType: {
      type: String,
    },
  },
};
</script>

<style scoped>
button {
  border: 1px solid var(--color-accent);
  background-color: var(--color-light);
  border-radius: 39px;
  height: 3.5em;
  width: 125px;
  color: var(--color-accent);
  margin: 1em;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

button:hover {
  background-color: var(--color-accent);
  color: var(--color-light);
  transition: background-color 0.2s ease;
}
</style>