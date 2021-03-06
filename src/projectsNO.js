export const projectsNO = {
    "burger-builder": {
        name: "Burger Builder",
        technologyIcon: "React.svg",
        summary: "Nettsiden lar brukere sette sammen og bestille en fiktiv burger.",
        discipline: ['Front-end'],
        screenshots: ['burgerBuilder1.png', 'burgerBuilder2.png', 'burgerBuilder3.png'],
        siteURL: "https://burger-builder.sarahsvedenborg.no/",
        gitHubURL: "https://github.com/sarahsvedenborg/burger-builder-from-course",
        problem: "Lag en applikasjon som lar brukere sette sammen og bestille burgere.",
        demography: "Fast food-kunder",
        technology: [['Rammeverk', 'React'], ['Backend', 'Firebase'], ['Hosting', 'Netlify'], ['Intern state-håndtering', 'Redux']],
        lessons: "Firebase backend, logikk for autorisering av brukere, react router, redux, react hooks, lazy loading, prosjekt-/filstruktur, CSS modules",
        other: "Prosjeket er laget som en del av et React-kurs på udemy.com med Maximillian Swartzmüller. Her har jeg bare fokusert på kodingen. Alt av design er tatt rett frakurset. Se retro-burger-builder for min redesign av prosjektet.",
        acknowledgements: [{what: 'React-kurs med Maximillian Swartzmüller', source: 'https://udemy.com'}]
    },
    "for-barna": {
        name: "ForBarna.no",
        technologyIcon: "Vue.svg",
        summary: "Et nettsted som samler pedagogiske spill jeg har laget til barna.",
        discipline: ['UX', 'Front-end'],
        screenshots: ['forBarna1.png', 'forBarna2.png', 'forBarna3.png'],
        siteURL: "https://www.forbarna.no",
        gitHubURL: "https://github.com/sarahsvedenborg/forbarna",
        problem: "Jeg trenger et nettsted som samler alle de små pedagogiske spillene vi lager til barna.",
        demography: "Barn 6-9 år.",
        technology: [['Rammeverk', 'Vue.js'], ['Backend', 'Firebase (Ikke implementert ennå)'], ['Hosting', 'Netlify'], ['Versjonskontroll', 'Git'], ['Projektplanlegging', 'Trello']],
        lessons: "Responsivt design, iPad first, drag and drop på iPad, informasjonsstruktur, CSS animasjoner",
        other: "",
        acknowledgements: []
    },
    "portfolio": {
        name: "sarahsvedenborg.no",
        technologyIcon: "Vue.svg",
        summary: "Dette er nettsiden du er på. Laget av meg selv, for meg selv. ",
        discipline: ['UX', 'Front-end'],
        screenshots: ['portfolio1.png', 'portfolio2.png', 'portfolio3.png'],
        siteURL: "https://www.sarahsvedenborg.no",
        gitHubURL: "https://github.com/sarahsvedenborg/portfolio/tree/master",
        problem: "Lage en portefølje som viser hvem jeg er og hva jeg kan.",
        demography: "Andre likesinnede",
        technology: [['Rammeverk', 'Vue.js'], ['Hosting', 'Netlify'], ['UI design', 'Sketch']],
        lessons: "Lasy-loading, single file components, VUE Router, i18n, custom responsive grid, custom UI components, CSS animasjoner, mappestruktur, responsivt design, CSS struktur",
        other: "",
        acknowledgements: [{what: 'Custom responsive grid', source: 'https://medium.com/csun-metalab/creating-a-simple-mobile-first-grid-system-1e883a85fa3f'}]
    },
    "beauty-board": {
        wip: true,
        name: "Beauty Board",
        technologyIcon: "React.svg",
        summary: "Dette er en Trello-lignende app for å holde styr på gjøremål. ",
        discipline: ['UX', 'Front-end'],
        screenshots: ['myBoard1.png'],
        siteURL: "",
        gitHubURL: "",
        problem: "Implementere en Trello-lignende app fra bunn av.",
        demography: "Prosjektplanleggere, individer som ønsker å holde styr på gjøremålene sine.",
        technology: [['Rammeverk', 'React'], ['Backend', 'Firebase'], ['Hosting', '?'], ['Statehåndtering', 'Redux']],
        lessons: "Virtuell liste for backup, drag and drop, redux, react-router, react hooks,",
        other: "Denne har jeg laget helt fra scratch",
        acknowledgements: [{what: 'Type app', source: 'https://www.trello.com'}, {what: 'Drag and drop', source: 'https://github.com/atlassian/react-beautiful-dnd'}]
    },
    "retro-burger-builder": {
        wip: true,
        name: "Retro Burger Builder",
        technologyIcon: "React.svg",
        summary: "Redesign av Burger Builder appen. Designet og brukeropplevelsen er endret.",
        discipline: ['UX'],
        screenshots: ['retro1.png', 'retro2.png', 'retro3.png'],
        siteURL: "",
        gitHubURL: "",
        problem: "Lag en applikasjon som lar brukere sette sammen og bestille burgere.",
        demography: "Fast food-kunder",
        technology: [['Rammeverk', 'React'], ['Backend', 'Firebase'], ['Hosting', 'Netlify'], ['Intern state-håndtering', 'Redux'], ['UI design', 'Sketch']],
        lessons: "Lage et nytt design basert på en plakat, forbedre navigasjonsstruktur, mer erfering med Sketch, responsive assets",
        other: "Front-end koden er basert på Burger Builder-prosjeket som er laget som en del av et React-kurs på udemy.com med Maximillian Swartzmüller. I dette prosjektet er GUI-et redesignet for et freshere uttrykk og en smidigere brukeropplevelse.",
        acknowledgements: [{what: 'Plakaten som inspirerte', source:"https://www.uidownload.com/free-vectors/retro-burger-menu-436692"}]
    }

}