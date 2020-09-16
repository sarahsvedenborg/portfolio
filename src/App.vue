<template>
  <div id="app">
    <!--     <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
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
:root {
  --color-accent: #2eca77;
}
/*used ofr setting gutters on custom responsive grid*/
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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

h1 {
  font-family: "Trirong", serif;
  font-size: 3em;
  font-weight: regular;
  margin-bottom: 10px;
}

h2 {
  font-family: "Trirong", serif;
  font-size: 2em;
  font-weight: regular;
}

/* Responsive grid*/
.row {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.row::after {
  content: "";
  /*display: block;*/
  clear: both;
}

/*Mobile first so these specifications are for xs screens*/
.col {
  width: 100%;
  margin-left: 5px;
  margin-right: 5px;
}

.col-1 {
  width: 8%;
}
.col-2 {
  width: 16%;
}
.col-3 {
  width: 25%;
}
.col-4 {
  width: 33%;
}
.col-5 {
  width: 42%;
}
.col-6 {
  width: 50%;
}
.col-7 {
  width: 58%;
}
.col-8 {
  width: 66%;
}
.col-9 {
  width: 75%;
}
.col-10 {
  width: 83%;
}
.col-11 {
  width: 92%;
}
.col-12 {
  width: 100%;
}

/*Small devices*/
@media (min-width: 576px) {
  .sm-1 {
    width: 8%;
  }
  .sm-2 {
    width: 16%;
  }
  .sm-3 {
    width: 25%;
  }
  .sm-4 {
    width: 33%;
  }
  .sm-5 {
    width: 42%;
  }
  .sm-6 {
    width: 50%;
  }
  .sm-7 {
    width: 58%;
  }
  .sm-8 {
    width: 66%;
  }
  .sm-9 {
    width: 75%;
  }
  .sm-10 {
    width: 83%;
  }
  .sm-11 {
    width: 92%;
  }
  .sm-12 {
    width: 100%;
  }
}
/*Medium devices*/
@media (min-width: 768px) {
  .md-1 {
    width: 8%;
  }
  .md-2 {
    width: 16%;
  }
  .md-3 {
    width: 25%;
  }
  .md-4 {
    width: 33%;
  }
  .md-5 {
    width: 42%;
  }
  .md-6 {
    width: 50%;
  }
  .md-7 {
    width: 58%;
  }
  .md-8 {
    width: 66%;
  }
  .md-9 {
    width: 75%;
  }
  .md-10 {
    width: 83%;
  }
  .md-11 {
    width: 92%;
  }
  .md-12 {
    width: 100%;
  }
}
/*Large devices*/
@media (min-width: 992px) {
  .lg-1 {
    width: 8%;
  }
  .lg-2 {
    width: 16%;
  }
  .lg-3 {
    width: 25%;
  }
  .lg-4 {
    width: 33%;
  }
  .lg-5 {
    width: 42%;
  }
  .lg-6 {
    width: 50%;
  }
  .lg-7 {
    width: 58%;
  }
  .lg-8 {
    width: 66%;
  }
  .lg-9 {
    width: 75%;
  }
  .lg-10 {
    width: 83%;
  }
  .lg-11 {
    width: 92%;
  }
  .lg-12 {
    width: 100%;
  }
}
</style>
