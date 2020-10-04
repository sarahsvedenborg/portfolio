<template>
    <div class="section">
        <h3 class="subtitle title-small margin-bottom-none">{{heading}}</h3>
        <div><img src="@/assets/divider.png" alt="dividing line"/></div>
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        heading: {
            type: String
        }
    }    
}
</script>

<style scoped>
.section{
    margin: 4em 0em;
}

 @media (min-width: 768px) {
     .section{
         margin: 6em 0em;
     }
 }
</style>