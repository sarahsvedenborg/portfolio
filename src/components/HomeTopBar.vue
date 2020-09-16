<template>
    <div class="topBar">
       <router-link to="/gridtest">Test grid</router-link>
        <img class="logo" alt="GitHub logo" src="@/assets/GitHub-Mark-Light-64px.png"/> 
        <img class="logo" alt="LinkedIn logo" src="@/assets/In-White-40.png"/> 
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.topBar{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    color: white;
    font-weight: bold;
}

.logo{
    width: 30px;
    margin: 10px;
}
</style>