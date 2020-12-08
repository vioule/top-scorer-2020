import React, { useEffect, useRef, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import gsap from 'gsap'
import { useDispatch, useSelector } from 'react-redux'
import Primary from './Primary'
import Player from './Player'
import Menu from './Menu'
import Top from './Top'
import { setPlayerImage, setPlayerName } from '../store/player/action'
import { DataContext } from '../layouts'

export default () => {
  const didMountRef = useRef(false)
  const ref = useRef(null)
  const themeContext = useContext(ThemeContext)
  const { stats } = useContext(DataContext)
  const { league, top } = useSelector(store => store.menu)
  const dispatch = useDispatch()
  useEffect(() => {
    const topScorer = ref.current.children[2].firstChild
    const logos = ref.current.children[2].lastChild.children
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
        ref.current.children[2],
        { width: '6.25%', duration: 0.5, ease: 'power2.inOut' },
        '+=0.5'
      )
      tl.set(ref.current.children[2], {
        background: `linear-gradient(${themeContext.colors.dark}, ${themeContext.colors[league]})`,
      })
      tl.to(ref.current.firstChild.lastChild, {
        width: 0,
        duration: 0.5,
        ease: 'power2.in',
      })
    } else {
      tl.to(
        ref.current.children[2],
        { height: '6.25vh', duration: 0.5, ease: 'power2.inOut' },
        '+=0.5'
      )
      tl.set(ref.current.children[2], {
        background: `linear-gradient(to right, ${themeContext.colors.dark}, ${themeContext.colors[league]})`,
      })
      tl.to(ref.current.firstChild.lastChild, {
        height: 0,
        duration: 0.5,
        ease: 'power2.in',
      })
    }
    tl.to(menu, { opacity: 1, duration: 0.5, ease: 'linear' }, '-=0.5')
    tl.set('.menu-item', { display: 'block' })
  }, [])

  useEffect(() => {
    if (didMountRef.current) {
      const topScorer = ref.current.children[2].firstChild
      const logos = ref.current.children[2].lastChild.children
      const tl = gsap.timeline()
      tl.set('.menu-item', { display: 'none' })
      if (window.matchMedia('(orientation:landscape)').matches) {
        tl.to(ref.current.firstChild.lastChild, {
          width: '100%',
          duration: 0.5,
          ease: 'power2.out',
        })
        tl.to(ref.current.children[2], {
          width: '100%',
          duration: 0.5,
          ease: 'power2.inOut',
        })
      } else {
        tl.to(ref.current.firstChild.lastChild, {
          height: '100%',
          duration: 0.5,
          ease: 'power2.out',
        })
        tl.to(ref.current.children[2], {
          height: '100vh',
          duration: 0.5,
          ease: 'power2.inOut',
        })
      }
      tl.addLabel('curtain')
      tl.set(ref.current.children[1].lastChild.firstChild.firstChild, {
        color: `${themeContext.colors[league]}`,
      })
      tl.call(
        () => {
          dispatch(setPlayerImage(`${league}-1.png`))
          dispatch(setPlayerName(stats[league][top - 1].name))
        },
        null,
        'curtain'
      )
      tl.fromTo(
        topScorer,
        { opacity: 1 },
        { opacity: 0, duration: 0.5, ease: 'linear' },
        '+=0.5'
      )
      if (window.matchMedia('(orientation:landscape)').matches) {
        tl.to(
          ref.current.children[2],
          {
            background: `linear-gradient(${themeContext.colors.dark}, ${themeContext.colors[league]})`,
            duration: 0.5,
            ease: 'linear',
          },
          '-=0.5'
        )
        tl.set(ref.current.firstChild, {
          background: `linear-gradient(${themeContext.colors[league]}, ${themeContext.colors.dark})`,
        })
      } else {
        tl.to(
          ref.current.children[2],
          {
            background: `linear-gradient(to right, ${themeContext.colors.dark}, ${themeContext.colors[league]})`,
            duration: 0.5,
            ease: 'linear',
          },
          '-=0.5'
        )
        tl.set(ref.current.firstChild, {
          background: `linear-gradient(to right, ${themeContext.colors[league]}, ${themeContext.colors.dark})`,
        })
      }
      tl.fromTo(
        logos,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, stagger: 0.1, ease: 'linear' },
        '+=0.5'
      )
      if (window.matchMedia('(orientation:landscape)').matches) {
        tl.to(
          ref.current.children[2],
          { width: '6.25%', duration: 0.5, ease: 'power2.inOut' },
          '+=0.5'
        )
        tl.to(ref.current.firstChild.lastChild, {
          width: 0,
          duration: 0.5,
          ease: 'power2.in',
        })
      } else {
        tl.to(
          ref.current.children[2],
          { height: '6.25vh', duration: 0.5, ease: 'power2.inOut' },
          '+=0.5'
        )
        tl.to(ref.current.firstChild.lastChild, {
          height: 0,
          duration: 0.5,
          ease: 'power2.in',
        })
      }
      tl.set('.menu-item', { display: 'block' })
    } else {
      didMountRef.current = true
    }
  }, [league])

  useEffect(() => {
    const handleMatchMedia = e => {
      if (e.matches) {
        gsap.set(ref.current.children[2], {
          width: '6.25%',
          height: '100%',
          background: `linear-gradient(${themeContext.colors.dark}, ${themeContext.colors[league]})`,
        })
        gsap.set(ref.current.firstChild, {
          background: `linear-gradient(${themeContext.colors[league]}, ${themeContext.colors.dark})`,
        })
        gsap.set(ref.current.firstChild.lastChild, {
          height: '100%',
          width: 0,
        })
      } else {
        gsap.set(ref.current.children[2], {
          width: '100%',
          height: '6.25vh',
          background: `linear-gradient(to right, ${themeContext.colors.dark}, ${themeContext.colors[league]})`,
        })
        gsap.set(ref.current.firstChild, {
          background: `linear-gradient(to right, ${themeContext.colors[league]}, ${themeContext.colors.dark})`,
        })
        gsap.set(ref.current.firstChild.lastChild, {
          width: '100%',
          height: 0,
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
      <Player />
      <Top />
      <Primary />
      <Menu />
    </div>
  )
}
