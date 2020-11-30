import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Primary from './Primary'

export default () => {
  const ref = useRef(null)
  useEffect(() => {
    const topScorer = ref.current.firstChild.firstChild
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
    tl.to(topScorer, { opacity: 0, duration: 0.5, ease: 'linear' }, '+=0.5')
  }, [])
  return (
    <div ref={ref}>
      <Primary />
    </div>
  )
}
