<template>
  <div class="grid">
    <div class="item item-a empty">
        <img src="@/assets/icons/Skills.svg"/>
    </div>
    <div class="item item-b heading">UX</div>
    <div class="item item-c heading">FRONT-END</div>
    <div class="item item-d heading">
      <h5 class="rowHeadingContent">TOOLS</h5>
    </div>
    <div class="item item-e cell">
      <ul>
        <li>Sketch</li>
        <li>Optimal Workshop</li>
        <li>Balsamiq</li>
      </ul>
    </div>
    <div class="item item-f cell">
      <ul>
        <li>VS code</li>
        <li>Git</li>
      </ul>
    </div>
    <div class="item item-g heading">
      <h5 class="rowHeadingContent"><span>TECHNIQUES/</span><br/> <span>PROCESSES</span></h5>
    </div>
    <div class="item item-h cell">
      <ul>
        <li>Usability testing</li>
        <li>Card sorting</li>
        <li>Tree testing</li>
      </ul>
    </div>
    <div class="item item-i cell">
      <ul>
        <li>Scrum</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.grid {
  display: grid;
  height: 300px;
  width: 100%;
/*   grid-template-columns: 10% 45% 45%;
  grid-template-rows: 10% 45% 45%; */
  grid-template-columns: 10% 45% 45%;
  grid-template-rows: 10% 45% 45%;
  grid-gap: 0px;
  margin: 10px;
}
.item-a {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
}
.item-b {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}
.item-c {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
}
.item-d {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
}
.item-e {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
}
.item-f {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
}
.item-g {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
}
.item-h {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;
}
.item-i {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
}
.item-empty {
  background-color: blue;
}
/* .colHeading {
  font-weight: bold;
  background-color: var(--color-accent);
} */
.heading {
  font-weight: bold;
  color: var(--color-light);
  background-color: var(--color-accent);
}
.rowHeadingContent {
  font-weight: bold;
  transform: rotate(270deg);
}
.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.cell {
  border: 3px solid var(--color-accent);
  font-weight: bold;
}
ul {
  list-style-type: none;
  padding: 0px;
  height: inherit;
}

ul li {
  margin: 10px;
}

img{
    width: 30px;
}
</style>