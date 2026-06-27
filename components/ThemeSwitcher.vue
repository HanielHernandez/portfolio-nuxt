<script setup lang="ts">
import gsap from 'gsap'

const modeIcon = ref<HTMLElement | null>(null)

const props = defineProps({
    isDark: {
        type: Boolean,
        default: () => false
    }
})

const animateIcon = async (inmediate: Boolean = false) => {
    await nextTick()
    const beams = modeIcon.value?.getElementsByClassName('beam')
    const tl = gsap.timeline()

    if (props.isDark) {
        const beams = modeIcon.value?.getElementsByClassName('beam')
        const center = modeIcon.value?.getElementsByClassName('center')
        const offCenter = modeIcon.value?.getElementsByClassName('off-center')

        if (beams) {
            if (modeIcon.value) {
                tl.to(
                    modeIcon.value.getElementsByClassName('off-center'),
                    {
                        ease: 'power4.easeIn',
                        transform: 'translate(50% , -50%)',
                        scale: 1,
                        duration: 0.3
                    },
                    0.6
                )
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
                            from: 'start',
                            ease: 'power4.easeIn'
                        }
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.2,
                        stagger: {
                            each: 0.1,
                            from: 'start',
                            ease: 'power4.easeIn'
                        }
                    }
                )
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
                        from: 'start',
                        ease: 'power4.easeIn'
                    }
                },
                {
                    opacity: 0,
                    scale: 0,
                    duration: 0.2,
                    stagger: {
                        each: 0.1,
                        from: 'end',
                        ease: 'power4.easeIn'
                    }
                },
                0.3
            )
        }
        if (modeIcon.value) {
            tl.to(
                modeIcon.value.getElementsByClassName('off-center'),
                {
                    ease: 'power4.easeIn',
                    transform: 'translate(75%, -75%)',
                    scale: 1.2,
                    duration: 0.3
                },
                1.2
            )
        }
    }
    tl.play(0.4)
}

onMounted(async () => {
    animateIcon()
})

const timeLine = ref()
watch(
    () => props.isDark,
    async (newval, oldVal) => {
        if (newval !== oldVal) {
            animateIcon()
        }
    }
)
</script>
<template lang="">
    <div
        ref="modeIcon"
        class="modeIcon w-10 h-10 relative rounded-full p-1 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all ease-in-out duration-500"
    >
        <div
            ref="modeIcon"
            class="icon sun"
        >
            <div
                ref="modIconCenter"
                class="center"
            ></div>
            <div
                ref="modIconCenterOff"
                class="off-center"
            ></div>
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
            background-color: #e5e5e5; // neutral-200
        }
    }
}

.icon {
    position: relative;
    width: 100%;
    height: 100%;

    .center {
        border-radius: 100%;
        background-color: #000;
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 100;
    }

    .off-center {
        border-radius: 9999px;
        background-color: #fff; // light
        position: absolute;
        top: 0;
        right: 0;
        z-index: 120;
        width: 100%;
        height: 100%;
        transform: translate(25%, -25%);

        :global(.dark) & {
            background-color: #262626; // neutral-800
        }
    }

    &.sun {
        .center,
        .off-center {
            transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 700ms;
        }

        .center {
            background-color: #171717; // neutral-900
            top: 50%;
            right: 50%;
            width: 1rem;
            height: 1rem;
            display: block;
            transform: translate(50%, -50%);

            :global(.dark) & {
                background-color: #fff;
            }
        }

        .off-center {
            background-color: #fff; // light
            top: 50%;
            right: 50%;
            width: 0.825rem;
            height: 0.825rem;
            transform: translate(50%, -50%);

            &:hover {
                background-color: #e5e5e5; // neutral-200
            }

            :global(.dark) & {
                background-color: #171717; // neutral-900
            }

            :global(.dark) &:hover {
                background-color: #262626; // neutral-800
            }
        }

        .center {
            z-index: 99;
        }

        .off-center {
            z-index: 100;
        }

        .beam {
            background-color: #f5f5f5; // neutral-900
            opacity: 1;
            z-index: 80;

            :global(.dark) & {
                background-color: #f5f5f5; // neutral-100
            }
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
