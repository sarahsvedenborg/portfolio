<template>
    <div>
         <NavBar />
         <div class="row">
             <div class="col col-10 md-8 lg-6">
                 Melding sendt! Takk :)
                 <router-link to="/">Tilbake til forsiden</router-link>
             </div>
         </div>
    </div>
</template>

<script>
import NavBar from '@/components/shared/NavBar'
export default {
    components: {NavBar}
}
</script>

<style scoped>

</style>