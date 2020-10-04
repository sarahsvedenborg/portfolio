<template>
  <div class="overlay" @click="closeModal">
    <div class="row">
      <div class="modal col col-11 md-8">
        <div class="modalContent">
          <h2 class="title title-medium color-accent">{{$t("FunFact.heading")}}</h2>
          <p>{{$t("FunFact.par1")}}</p>
          <p>{{$t("FunFact.par2")}}</p>
          <p>{{$t("FunFact.par3")}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    closeModal: {
      type: Function,
    },
  },
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
  height: 70vh;
  background: var(--color-light);
  border: 5px solid var(--color-accent);
  box-shadow: 0px 1px 7px 0px var(--color-accent);
  overflow-x: hidden;
  overflow-y: auto;
}

.modalContent {
  padding: 20px 40px;
  font-size: small;
}

@media (min-width: 768px) {
  .modal {
    height: 80vh;
  }
  .modalContent {
    font-weight: bold;
    font-size: medium;
  }
}
</style>