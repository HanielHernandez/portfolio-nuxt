import MlBio from './molecules/ml-bio/MlBio.vue'
import OrHeroSection from './organisms/HeroSection.vue'
import type { Component } from 'vue'

export type ComponentType = 'heroSection' | 'mlBio'

export const ComponentTypes: Record<ComponentType, Component> = {
  heroSection: OrHeroSection,
  mlBio: MlBio
}
