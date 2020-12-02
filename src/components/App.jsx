import React, { useEffect, useRef, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import gsap from 'gsap'
import { useSelector } from 'react-redux'
import Primary from './Primary'
import Menu from './Menu'

export default () => {
  const didMountRef = useRef(false)
  const ref = useRef(null)
  const themeContext = useContext(ThemeContext)
  const league = useSelector(({ menu }) => menu.league)
  useEffect(() => {
    const topScorer = ref.current.firstChild.firstChild
    const logos = ref.current.firstChild.lastChild.children
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
    tl.to(topScorer, { opacity: 0, duration: 0.5, ease: 'linear' }, '+=0.5')
    tl.to(
      logos,
      { opacity: 1, duration: 0.5, stagger: 0.1, ease: 'linear' },
      '+=0.5'
    )
    if (window.matchMedia('(orientation:landscape)').matches) {
      tl.to(
        ref.current.firstChild,
        { width: '6.25%', duration: 0.5, ease: 'power2.inOut' },
        '+=0.5'
      )
      tl.set(ref.current.firstChild, {
        background: `linear-gradient(${themeContext.colors.dark}, ${themeContext.colors[league]})`,
      })
    } else {
      tl.to(
        ref.current.firstChild,
        { height: '6.25vh', duration: 0.5, ease: 'power2.inOut' },
        '+=0.5'
      )
      tl.set(ref.current.firstChild, {
        background: `linear-gradient(to right, ${themeContext.colors.dark}, ${themeContext.colors[league]})`,
      })
    }
    tl.to(menu, { opacity: 1, duration: 0.5, ease: 'linear' }, '-=0.5')
    tl.set('.menu-item', { display: 'block' })
  }, [])

  useEffect(() => {
    if (didMountRef.current) {
      const topScorer = ref.current.firstChild.firstChild
      const logos = ref.current.firstChild.lastChild.children
      const tl = gsap.timeline()
      tl.set('.menu-item', { display: 'none' })
      if (window.matchMedia('(orientation:landscape)').matches) {
        tl.to(ref.current.firstChild, {
          width: '100%',
          duration: 0.5,
          ease: 'power2.inOut',
        })
      } else {
        tl.to(ref.current.firstChild, {
          height: '100vh',
          duration: 0.5,
          ease: 'power2.inOut',
        })
      }
      tl.fromTo(
        topScorer,
        { opacity: 1 },
        { opacity: 0, duration: 0.5, ease: 'linear' },
        '+=0.5'
      )
      if (window.matchMedia('(orientation:landscape)').matches) {
        tl.to(
          ref.current.firstChild,
          {
            background: `linear-gradient(${themeContext.colors.dark}, ${themeContext.colors[league]})`,
            duration: 0.5,
            ease: 'linear',
          },
          '-=0.5'
        )
      } else {
        tl.to(
          ref.current.firstChild,
          {
            background: `linear-gradient(to right, ${themeContext.colors.dark}, ${themeContext.colors[league]})`,
            duration: 0.5,
            ease: 'linear',
          },
          '-=0.5'
        )
      }
      tl.fromTo(
        logos,
        { opacity: 0 },
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
      tl.set('.menu-item', { display: 'block' })
    } else {
      didMountRef.current = true
    }
  }, [league])

  useEffect(() => {
    const handleMatchMedia = e => {
      if (e.matches) {
        gsap.set(ref.current.firstChild, {
          width: '6.25%',
          height: '100%',
          background: `linear-gradient(${themeContext.colors.dark}, ${themeContext.colors[league]})`,
        })
      } else {
        gsap.set(ref.current.firstChild, {
          width: '100%',
          height: '6.25vh',
          background: `linear-gradient(to right, ${themeContext.colors.dark}, ${themeContext.colors[league]})`,
        })
      }
    }
    const matchMedia = window.matchMedia('(orientation:landscape)')
    matchMedia.addListener(handleMatchMedia)
    return () => {
      matchMedia.removeListener(handleMatchMedia)
    }
  }, [league])
  return (
    <div ref={ref}>
      <Primary />
      <Menu />
    </div>
  )
}
