<template>
  <div class="overlay" @click="closeModal">
    <div class="modal">
      <div class="modalContent">
        <h2 class="title title-medium color-accent">{{$t("FunFact.heading")}}</h2>
        <p>
         {{$t("FunFact.par1")}}
        </p>
        <p>
        {{$t("FunFact.par2")}}
        </p>
        <p>
           {{$t("FunFact.par3")}}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    props:{
        closeModal: {
            type: Function
        }
    }
};
</script>
<style scoped>
.overlay {
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
}

.modal {
  width: 60%;
  background: var(--color-light);
  border: 5px solid var(--color-accent);
  box-shadow: 0px 1px 7px 0px var(--color-accent);
}

.modalContent {
    padding: 20px 40px;
    font-weight: bold;
}
</style>