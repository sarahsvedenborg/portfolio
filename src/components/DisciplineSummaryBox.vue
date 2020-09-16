<template>
  <div class="disciplineSummaryBox">
    <h2>{{heading}}</h2>
    <p>{{body}}</p>
    <button>Read more</button>
  </div>
</template>

<script>
export default {
    props:{
        heading:{
            type: String
        },
        body:{
            type: String
        }
    }
};
</script>

<style scoped>
.disciplineSummaryBox {
  width: 100%;
  margin: 2em 0em;
}

h2 {
  color: var(--color-accent);
}

p {
  color: black;
}

button {
  border: 1px solid var(--color-accent);
  background-color: white;
  border-radius: 39px;
  height: 3.5em;
  width: 125px;
  color: var(--color-accent);
  margin: 1em;
  font-family: "Trirong", serif;
  font-weight: bold;
}
</style>