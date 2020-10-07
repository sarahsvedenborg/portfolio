<template>
  <button
    @click="action ? action() : null"
    :type="buttonType ? buttonType : null"
    :class="{'button':true, outlined: outlined != undefined, 'default': outlined == undefined}"
  >{{label}}</button>
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
.button {
  border: 1px solid var(--color-accent);
  border-radius: 39px;
  height: 3.5em;
  width: 125px;
  margin: 1em;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.default {
  background-color: var(--color-accent);
  color: var(--color-light);
}

.default:hover {
  box-shadow: 0px 1px 7px 0px var(--color-accent);
}

.outlined {
  border: 1px solid var(--color-accent);
  background-color: var(--color-light);
  color: var(--color-accent);
}

.outlined:hover {
  background-color: var(--color-accent);
  color: var(--color-light);
  transition: background-color 0.2s ease;
}
</style>