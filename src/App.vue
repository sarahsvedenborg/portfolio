<template>
  <div id="app">
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/shared/Footer'
export default {
  components:{Footer}
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Trirong:wght@100&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700');
@import url("./responsiveStyle.css");

:root {
  --color-accent: #2eca77;
  --color-light: white;
  --color-dark: black;
}

body {
  margin: 0px;
}
#app {
  font-family: Nunito, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/*Heading*/
.title{
    font-family: "Trirong", serif;
    font-weight: regular;
    margin-bottom: 10px;
}
.subtitle{
    font-weight: bold;
}

/*Colors*/
.color-accent{
    color: var(--color-accent)
}
.color-light{
    color: var(--color-light)
}
.color-dark{
    color: var(--color-dark)
}

/*Margins*/
.margin-bottom-none{
    margin-bottom: 0px;
}
.margin-top-none{
    margin-top: 0px;
}
</style>
