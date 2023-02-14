import gsap from 'gsap'
export default {
  onEnter: (el: HTMLElement|Element, done: () => void) => {
    console.log('entering home page')

    const tl = gsap.timeline({
      onComplete: done
    })

    tl.from(
      '#rightSide >*',
      {
        stagger: 0.1,
        opacity: 0,
        x: -30,
        duration: 1,
        ease: 'back.inOut(10)',
        clearProps: 'all'
      },
      0
    )
    tl.from(
      el.getElementsByClassName('graph'),
      {
        opacity: 0,
        scale: 0,
        duration: 1,
        ease: 'back.inOut(1.7)',
        clearProps: 'all'
      },
      0
    )

    tl.play()
  },
  onLeave: (el: HTMLElement|Element, done: () => void) => {
    console.log('Leaving home page')
    const tl = gsap.timeline({
      onComplete: done
    })

    tl.to('#rightSide >*', {
      stagger: 0.1,
      opacity: 0,
      x: -30,
      duration: 1,
      ease: 'back.inOut(1.7)'
    })

    tl.to(
      '.graph',
      {
        opacity: 0,
        scale: 0,
        duration: 1,
        ease: 'back.inOut(1.7)'
      },
      0
    )

    tl.play()
  }
}
