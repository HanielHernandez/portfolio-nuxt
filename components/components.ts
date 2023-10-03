import OrHeroSection from "./HeroSection.vue";
import type { Component } from "vue";

export type ComponentType = "heroSection" | "bio";

export const ComponentTypes: Record<ComponentType, Component> = {
  heroSection: OrHeroSection,
  bio: OrHeroSection,
};
