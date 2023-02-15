<script setup></script>
<template lang="">
  <div class="w-10 h-10  rounded-full bg-white border border-neutral-200">
  
  </div>
</template>
<style lang="scss">



.sun {
  position: relative;
}

.icon {
  position: relative;
  width: 100%;
  height: 100%;

  .center {
    @apply bg-neutral-800 rounded-full absolute;
    width: 100%;
    height: 100%;
    z-index: 100;
  }

  .off-center {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 120;
    @apply bg-white rounded-full;
    width: 100%;
    height: 100%;
    transform: translate(25%, -25%);
  }

  &.sun {
    .center {
      background: white;
      // width: calc(100% - 12px);
      // height: calc(100% - 12px);
      top: 50%;
      right: 50%;
      width: 1.5rem;
      height: 1.5rem;
      transform: translate(50%, -50%);
    }

    .off-center {
      top: 50%;
      right: 50%;
      background-color: black;
      // width: calc(100% - 16px);
      // height: calc(100% - 16px);
      width: 1.375rem;
      height: 1.375rem;
      transform: translate(50%, -50%);
    }

    .center,
    .off-center {
      z-index: 100;
    }

    .beam {
      opacity: 1;
      z-index: 80;
    }
  }

  .beam {
    position: absolute;
    opacity: 0;
    right: 50%;
    transform: translateX(50%);
    width: 3px;
    border-radius: 300px;
    height: 6px;
    background: #fff;

    &-top-left,
    &-bottom-right {
      transform: rotate(-45deg);
    }

    &-top-right,
    &-bottom-left {
      transform: rotate(45deg);
    }

    &-top-right,
    &-bottom-right {
      right: 4px;
    }

    &-center-right {
      right: 0;
    }

    &-center-left {
      left: 0;
    }

    &-top-left,
    &-bottom-left {
      left: 4px;
    }

    &-top-right,
    &-top-left {
      top: 4px;
    }

    &-top {
      top: 0;
    }

    &-bottom-right,
    &-bottom-left {
      top: calc(100% - 8px);
    }

    &-bottom {
      bottom: 0;
    }

    &-center-right,
    &-center-left {
      top: 50%;
      transform: translateY(-50%) rotate(90deg);
    }
  }
}</style>
