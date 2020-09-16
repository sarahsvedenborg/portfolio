<template>
  <div class="about">
    <NavBar />
    <div class="row">
      <div class="row">
 <h1>Om meg</h1>
      </div>
      <div class="col lg-2">
        <img alt="profile picture" src="@/assets/Sarah.svg" />
      </div>
      <div class="col lg-6">
        <p>
          Hei! Jeg heter <span class="accent">Sarah Svedenborg</span> og må være definisjonen av tverrfaglighet.
          Interessene mine spriker fra språk til læring til bunadsbrodering til søm til programmering
          (se sarahsurium.no for min mer lekne personlighet). Jeg er en kreativ person og programmering er 
          enda én arena hvor jeg kan bruke kreativiteten min. I motsetning til søm, er det praktiske med programmering at produktene
          ikke tar opp skapplass.
        </p>
        <p>
          Sarah er en jente som liker å programmere. Hun like rå lage ting og tang.
          Søm er noe som hun elsker å drive med og brodere bunad gjør hun også.
          I tillegg er frontend noie hun liker og UX har hun studert, Hun ølnsker
          å jobbe med benne deler.
          Altså være UX utvikler. Hun trives veldig me då lage ting for bar, og liker
          skiller undervisning og koding.
        </p>
        <p>
          Sarah er en jente som liker å programmere. Hun like rå lage ting og tang.
          Søm er noe som hun elsker å drive med og brodere bunad gjør hun også.
          I tillegg er frontend noie hun liker og UX har hun studert,
          Hun ølnsker å jobbe med benne deler.
          Altså være UX utvikler. Hun trives veldig me då lage ting for bar,
          og liker skiller undervisning og koding.
        </p>
        <h2>Utdanning</h2>
        <p>
          Sarah er en jente som liker å programmere. Hun like rå lage ting og tang.
          Søm er noe som hun elsker å drive med og brodere bunad gjør hun også.
          I tillegg er frontend noie hun liker og UX har hun studert, Hun ølnsker å jobbe med
          benne deler.
          Altså være UX utvikler. Hun trives veldig me då lage ting for bar,
          og liker skiller undervisning og koding.
        </p>
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
h1 {
  color: var(--color-accent);
  text-align: left;
  margin-top: 0px;
}
h2 {
  color: var(--color-accent);
}
p{
  text-align: left;
  margin-top: 0px;
}
.accent{
  color: var(--color-accent);
  font-weight: bold;
  font-family: "Trirong", serif;
}
.about .row{
  margin-top: 10vh;
}
</style>
