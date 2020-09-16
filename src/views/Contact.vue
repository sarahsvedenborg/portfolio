<template>
  <div class="contact">
    <NavBar />
    <div class="row">
        <div class="col lg-6">
            <h3>Lurer du på noe? Bare spør!</h3>
            <label for="name">Navnet ditt</label><br/>
            <input id="name" type="text" /><br/>
            <label for="email">Eposten din</label><br/>
            <input id="email" type="text" /><br/>
             <label for="emessage">Beskjed</label><br/>
             <input class="textarea" id="message" type="textarea" /><br/>
             <button> Send</button>
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
.contact {
  background-color: #000;
  color: #fff;
  width: 100%;
  height: 100vh;
}
label{
    width: 100%;
    text-align: left;
}
input{
    border: none;
    outline: none;
    border-bottom: 1px solid white;
    background-color: #000;
    width: 100%;
    margin: 1em 0em;
}

.textarea{
    background-color: #fff;
    height: 200px;
}

button{
    background-color: var(--color-accent);
    border-radius: 39px;
    height: 3.5em;
    width: 150px;
    color: white;
    font-weight: bold;
    border: none;
    margin: 1em;
}
</style>