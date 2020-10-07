<template>
  <div class="failure">
    <NavBar />
    <div class="row">
      <div class="col col-10 md-8 lg-6 content">
        <h1 class="title title-large color-accent">{{$t('Failure.oups')}}...</h1>
        <h2 class="subtitle title-medium">{{$t('Failure.messageLost')}}</h2>
        <span>
          {{$t('Failure.please')}}
          <router-link to="/">{{$t('Failure.contactForm')}}</router-link>
          {{$t('Failure.tryAgain')}}.
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/shared/NavBar";
export default {
  components: { NavBar },
};
</script>

<style scoped>
.failure {
  background-color: var(--color-dark);
  color: var(--color-light);
  width: 100%;
  height: 100vh;
}
.content {
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

a {
  color: var(--color-accent);
}
</style>