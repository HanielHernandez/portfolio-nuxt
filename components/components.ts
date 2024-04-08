import type { Component } from 'vue'
import MlProjects from './molecules/ml-projects/MlProjects.vue'
import MlSkills from './molecules/ml-skills/MlSkills.vue'
import OrHeroSection from './organisms/HeroSection.vue'
import MlWorkExperiences from './molecules/ml-work-experiences/MlWorkExperiences.vue'
import MlBio from './molecules/ml-bio/MlBio.vue'

export type ComponentType = 'heroSection' | 'mlBio' | 'mlSkills' | 'mlProjects' | 'mlWorkExperiences'

export const ComponentTypes: Record<ComponentType, Component> = {
    heroSection: OrHeroSection,
    mlBio: MlBio,
    mlSkills: MlSkills,
    mlProjects: MlProjects,
    mlWorkExperiences: MlWorkExperiences
}
