<template>
  <div class="about">
    <NavBar />
    <div class="row">
      <h1 class="title title-large color-accent" ref="personalRef">Om meg</h1>
    </div>
    <div class="row">
      <!--     <div class="col lg-2">
        <img alt="profile picture" src="@/assets/Sarah.svg" />
      </div>-->
      <OnPageNav :navItems="navItems" :action="(ref) => scroll(ref)" :itemInView="itemInView" />
      <div class="col lg-6">
        <img alt="profile picture" src="@/assets/Sarah.svg" />
        <p>
          Hei! Jeg heter
          <span class="accent">Sarah Svedenborg</span> og må være definisjonen av tverrfaglighet.
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
        <h2 class="title title-medium color-accent">Utdanning</h2>
        <p>
          Sarah er en jente som liker å programmere. Hun like rå lage ting og tang.
          Søm er noe som hun elsker å drive med og brodere bunad gjør hun også.
          I tillegg er frontend noie hun liker og UX har hun studert, Hun ølnsker å jobbe med
          benne deler.
          Altså være UX utvikler. Hun trives veldig me då lage ting for bar,
          og liker skiller undervisning og koding.
        </p>
        <div ref="educationRef">
          <AboutSection heading="Utdannelse" :lists="education" />
        </div>
        <div ref="skillsRef" horizontal>
          <AboutSection heading="Ferdigheter" :lists="skills" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/shared/NavBar";
import AboutSection from "@/components/AboutSection";
import OnPageNav from "@/components/shared/OnPageNav";
export default {
  components: { NavBar, AboutSection, OnPageNav },
  created() {
    window.scrollTo(0, 0);
  },
  data() {
    return {
      education: [
        {
          heading: "Formell",
          items: [
            "Master informatikk, NTNU",
            "Årsstudium matematikk, NTNU",
            "Årsstudium engelsk, NTNU",
            "Bachelor i koreansk og utviklingsstudier, SOAS (London)",
            "15sp i Latin (jeg nevner det bare fordi jeg synes det er utrolig kult å ha studert Latin. I tillegg er det ett av de desidert morsomte fagene jeg noen gang har tatt!)",
          ],
        },
        {
          heading: "Kurs",
          items: [
            "React, udemy",
            "Vue, udemy",
            "App design in Sketch, udemy",
            "Phaser, Zenva",
          ],
        },
        {
          heading: "Sertifiseringer",
          items: ["HTML/CSS/JS, Microsoft", "Java I, oracle", "UXQB"],
        },
      ],
      skills: [
        {
          heading: "UX Tools",
          items: ["Sketch", "Optimal Workshop", "Balsamiq"],
        },
        {
          heading: "Front-end Tools",
          items: ["VS code", "Git"],
        },
        {
          heading: "UX Techniques",
          items: ["User testing", "Card sorting", "Tree testing"],
        },
        {
          heading: "Front-end Processes",
          items: ["Scrum"],
        },
      ],
      navItems: [
        {
          name: "Personlig",
          ref: "personalRef",
        },
        {
          name: "Utdannelse",
          ref: "educationRef",
        },
        {
          name: "Ferdigheter",
          ref: "skillsRef",
        },
      ],
    };
  },
  computed: {
    itemInView() {
      return "personalRef"
    },
  },
  methods: {
    scroll(ref) {
      console.log("ref", ref);
      console.log("refs", this.$refs);
      console.log("element", this.$refs[ref]);
      this.$refs[ref].scrollIntoView();
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: left;
}
p {
  text-align: justify;
  margin-top: 0px;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
}
.accent {
  color: var(--color-accent);
  font-weight: bold;
  font-family: "Trirong", serif;
}

img {
  width: 250px;
  float: left;
  padding: 10px 40px 30px 0px;
}
</style>
