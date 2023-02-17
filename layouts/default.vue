<script setup lang="ts"></script>
<template>
  <div
    class="transition-all pt-20  lg:pt-28 ease-in-out duration-300 w-full h-screen overflow-y-auto dark:bg-neutral-900"
    style="overflow: overlay;"
  >
    <the-navbar id="navbar" />
    <div
      class="md:h-full mx-auto dar bgtransparent  transition-colors ease-in-out duration-300 "
      style="max-width: 1024px; "
    >
      <slot />
    </div>
      <!-- <Footer/> -->
  </div>
</template>
<style lang="scss"></style>
