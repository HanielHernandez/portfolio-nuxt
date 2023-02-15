<script setup lang="ts"></script>
<template>
  <div
    class="transition-all pt-28 ease-in-out duration-300 w-full h-screen overflow-y-auto dark:bg-neutral-900"
    style="overflow: overlay;"
  >
    <the-navbar id="navbar" />
    <div
      class="md:h-full mx-auto dar bgtransparent  transition-colors ease-in-out duration-300 "
      style="max-width: 1024px; "
    >
      <slot />

      <!-- <div ref="modeIcon" class="change-theme-button" @click="changeLightMode()">
        <transition mode="out-in" :css="false" @enter="onSunEnter" @leave="onSunLeave">
          <div v-if="darkmode" class="icon sun">
            <div ref="modIconCenter" class="center"></div>
            <div ref="modIconCenterOff" class="off-center"></div>
            <div class="beam bteam-top"></div>
            <div class="beam beam-top-right"></div>
            <div class="beam beam-center-right"></div>
            <div class="beam beam-bottom-right"></div>
            <div class="beam beam-bottom"></div>
            <div class="beam beam-bottom-left"></div>
            <div class="beam beam-center-left"></div>
            <div class="beam beam-top-left"></div>
          </div>
          <div v-else="" class="icon">
            <div ref="modIconCenter" class="center"></div>
            <div ref="modIconCenterOff" class="off-center"></div>
          </div>
        </transition>
      </div> -->
    </div>
      <!-- <Footer/> -->
  </div>
</template>
<style lang="scss"></style>
