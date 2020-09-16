<template>
    <div>
        <NavBar />
        <div class="row">
            <div class="col">
            <h1>Projects</h1>
            </div>
            <div class="col">
            <p>Checkboxes for filtering projects</p>
            </div>
        </div>
        <div class="row">
       <ProjectSummaryCard v-for="(project,i) in projects" :key="project.name" :project="project" :index="i"/>
    </div>
    </div>
</template>

<script>
import NavBar from '@/components/shared/NavBar'
import ProjectSummaryCard from '@/components/ProjectSummaryCard'
export default {
    components: {NavBar, ProjectSummaryCard},
    data(){
        return {
            projects: [
                {
                    name: 'ForBarna.no',
                    technology: '@/assets/Vue.svg',
                    summary: 'ForBarna.no er ett nettsted for barn i småskolen soms inneholder diverse spill for læring. Prosjektet er laget i vue og designet er laget selv. Firebase er brukt som backed og funksjonaliteten er brukertestet.',
                    discipline: 'UX|Dev|Both' 
                },
                {
                    name: 'BeautyBoard',
                    technology: 'React',
                    summary: 'Dette er en trello lignende app som ... ',
                    discipline: 'UX|Dev|Both' 
                },
                {
                    name: 'Portfolio',
                    technology: 'Vue',
                    summary: 'Denne portfolio-siden er laget av meg selv ... ',
                    discipline: 'UX|Dev|Both' 
                },
                 {
                    name: 'BurgerBuilder',
                    technology: 'React',
                    summary: 'Denne portfolio-siden er laget av meg selv ... ',
                    discipline: 'UX|Dev|Both' 
                },
                 {
                    name: 'Timeline',
                    technology: 'Vue',
                    summary: 'Denne portfolio-siden er laget av meg selv ... ',
                    discipline: 'UX|Dev|Both' 
                },
                 {
                    name: 'Engelske farger',
                    technology: 'Phaser',
                    summary: 'Her kan man lære fargene på engelsk og øve på dem ',
                    discipline: 'UX|Dev|Both' 
                },
                 {
                    name: 'BurgerBuilder redesign',
                    technology: 'React',
                    summary: 'Designet og brukeropplevelsen ble endret i dette prosjektet ',
                    discipline: 'UX' 
                }
            ]
        }
    }
}
</script>

<style scoped>
h1{
    color: var(--color-accent)
}
</style>