<template>
  <div class="checkbox">
    <input type="checkbox" :id="id" @change="clicked" :checked="checked"/>
    <label :for="id" :class="{enhanced: checked}">{{val}}</label>
  </div>
</template>

<script>
export default {
  props:{
    id: {
      type: String
    },
    val: {
      type: String
    },
    checkedByDefault: {
      type: Boolean
    },
    changed: {
      type: Function
    }
  },
  data(){
    return {
      checked: this.checkedByDefault
    }
  },
  methods: {
    clicked(e) {
      this.checked = e.target.checked
      this.changed(e)
    }
  }
};
</script>

<style scoped>
label{
  color: #2c3e50;
  font-weight: bold;
}

.checkbox{
  display: inline-block;
}
.enhanced{
  font-weight: bold;
}
[type="checkbox"] {
  opacity: 0;
}

[type="checkbox"] + label {
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  display: inline-block;
  /*color: black;*/
  line-height: 15px;
}
[type="checkbox"] + label::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 15px;
  height: 15px;
  outline: 1px solid var(--color-dark);
  background: var(--color-light);
}
[type="checkbox"]:checked + label::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 15px;
  height: 15px;
  outline: 1px solid var(--color-accent);
  background: var(--color-light);
}
[type="checkbox"]:checked + label::after {
  content: "";
  position: absolute;
  left: -5px;
  top: -4px;
  width: 15px;
  height: 15px;
  background-image: url("../../../assets/checkmarkGif.gif");
  background-size: contain;
  transform: scale(2);
 /* opacity: 1;
  transition: all 0.3s ease; */
}
[type="checkbox"]:not(:checked) + label::after {
  content: "";
  position: absolute;
  left: -5px;
  top: -4px;
  width: 15px;
  height: 15px;
/*   background-image: url("../../../assets/checkmarkGif.gif");
  background-size: cover; */
 /*  transform: scale(0);
  opacity: 0;
  transition: all 0.3s ease; */
}
</style>