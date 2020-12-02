import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Primary from './Primary'
import Menu from './Menu'

export default () => {
  const ref = useRef(null)
  useEffect(() => {
    const topScorer = ref.current.firstChild.firstChild
    const league = ref.current.firstChild.lastChild.children
    const menu = ref.current.lastChild
    const tl = gsap.timeline()
    tl.fromTo(
      Array.from(topScorer.children).map(x => x.children),
      { yPercent: 100 },
      {
        yPercent: 0,
        stagger: 0.05,
        duration: 1,
        ease: 'power3.inOut',
        delay: 0.5,
      }
    )
    tl.set(menu, { display: 'block' })
    tl.to(topScorer, { opacity: 0, duration: 0.5, ease: 'linear' }, '+=0.5')
    tl.to(
      league,
      { opacity: 1, duration: 0.5, stagger: 0.1, ease: 'linear' },
      '+=0.5'
    )
    if (window.matchMedia('(orientation:landscape)').matches) {
      tl.to(
        ref.current.firstChild,
        { width: '6.25%', duration: 0.5, ease: 'power2.inOut' },
        '+=0.5'
      )
    } else {
      tl.to(
        ref.current.firstChild,
        { height: '6.25vh', duration: 0.5, ease: 'power2.inOut' },
        '+=0.5'
      )
    }
    tl.to(menu, { opacity: 1, duration: 0.5, ease: 'linear' }, '-=0.5')

    window
      .matchMedia('(orientation:landscape)')
      .addEventListener('change', e => {
        if (e.matches) {
          gsap.set(ref.current.firstChild, { width: '6.25%', height: '100%' })
        } else {
          gsap.set(ref.current.firstChild, { width: '100%', height: '6.25vh' })
        }
      })
  }, [])
  return (
    <div ref={ref}>
      <Primary />
      <Menu />
    </div>
  )
}
