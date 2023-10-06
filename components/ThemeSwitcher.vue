<script setup lang="ts">
import gsap from "gsap";

const modeIcon = ref<HTMLElement | null>(null);

const props = defineProps({
  isDark: {
    type: Boolean,
    default: () => false,
  },
});

const animateIcon = async () => {
  await nextTick();
  const beams = modeIcon.value?.getElementsByClassName("beam");
  const tl = gsap.timeline();

  if (props.isDark) {
    const beams = modeIcon.value?.getElementsByClassName("beam");
    const center = modeIcon.value?.getElementsByClassName("center");
    const offCenter = modeIcon.value?.getElementsByClassName("off-center");

    if (beams) {
      if (modeIcon.value) {
        tl.to(
          modeIcon.value.getElementsByClassName("off-center"),
          {
            ease: "power4.easeIn",
            transform: "translate(50% , -50%)",
            scale: 1,
            duration: 0.3,
          },
          0.6
        );
      }



      if (beams) {
        tl.fromTo(
          beams,
          {
            opacity: 0,
            scale: 0,
            duration: 0.2,
            stagger: {
              each: 0.1,
              from: "start",
              ease: "power4.easeIn",
            },
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.2,
            stagger: {
              each: 0.1,
              from: "start",
              ease: "power4.easeIn",
            },
          }
        );
      }
    }
  } else {

    if (beams) {
      tl.fromTo(
        beams,
        {
          opacity: 1,
          scale: 1,
          duration: 0.2,
          stagger: {
            each: 0.1,
            from: "start",
            ease: "power4.easeIn",
          },
        },
        {
          opacity: 0,
          scale: 0,
          duration: 0.2,
          stagger: {
            each: 0.1,
            from: "end",
            ease: "power4.easeIn",
          },
        },
        0.3
      );
    }
    if (modeIcon.value) {
      tl.to(
        modeIcon.value.getElementsByClassName("off-center"),
        {
          ease: "power4.easeIn",
          transform: "translate(75%, -75%)",
          scale: 1.2,
          duration: 0.3,
        },
        1.2
      );
    }
  }
  tl.play();
};

onMounted(async () => {
  animateIcon();
});

const timeLine = ref();
watch(
  () => props.isDark,
  async (newval, oldVal) => {
    if (newval !== oldVal) {
      animateIcon();

    }
  }
);
</script>
<template lang="">
  <div
    class="modeIcon w-10 h-10 relative rounded-full p-1 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all ease-in-out duration-500"
    ref="modeIcon"
  >
    <div class="icon sun" ref="modeIcon">
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
  </div>
</template>
<style lang="scss" scoped>
.sun {
  position: relative;
}

.modeIcon {
  &:hover {
    .center {
      @apply bg-neutral-200;
    }
  }
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
    @apply rounded-full dark:bg-neutral-800 bg-white;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 120;
    width: 100%;
    height: 100%;
    transform: translate(25%, -25%);
  }

  &.sun {

    .center,
    .off-center {
      @apply transition-colors ease-in-out duration-700;
    }

    .center {
      @apply bg-neutral-900 dark:bg-white;
      top: 50%;
      right: 50%;
      width: 1rem;
      height: 1rem;
      transform: translate(50%, -50%);
    }

    .off-center {
      @apply bg-white dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800;
      top: 50%;
      right: 50%;
      width: 0.825rem;
      height: 0.825rem;
      transform: translate(50%, -50%);
    }

    .center {
      z-index: 99;
    }

    .off-center {
      z-index: 100;
    }

    .beam {
      @apply bg-neutral-900 dark:bg-neutral-100;
      opacity: 1;
      z-index: 80;
    }
  }

  .beam {
    position: absolute;
    opacity: 0;
    right: 50%;
    transform: translateX(50%);
    width: 2px;
    border-radius: 300px;
    height: 4px;
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
}
</style>
