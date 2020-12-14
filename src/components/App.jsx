import React, { useEffect, useRef, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import gsap from 'gsap'
import { useDispatch, useSelector } from 'react-redux'
import Primary from './Primary'
import Player from './Player'
import Menu from './Menu'
import Top from './Top'
import Stats from './Stats'
import {
  setPlayerImage,
  setPlayerName,
  setPlayerTop,
} from '../store/player/action'
import { DataContext } from '../layouts'
import {
  onMountTransition,
  leagueTransition,
  topTransition,
} from '../transitions'
import { setTop } from '../store/menu/action'

export default () => {
  const preventLeagueTransitionOnMount = useRef(false)
  const preventTopTransitionOnMount = useRef(false)
  const ref = useRef(null)
  const themeContext = useContext(ThemeContext)
  const { stats } = useContext(DataContext)
  const { league, top } = useSelector(store => store.menu)
  const dispatch = useDispatch()
  useEffect(() => {
    onMountTransition(ref.current, themeContext, league)
  }, [])

  useEffect(() => {
    if (preventLeagueTransitionOnMount.current) {
      leagueTransition(
        ref.current,
        themeContext,
        stats,
        league,
        top,
        dispatch,
        setTop,
        setPlayerImage,
        setPlayerName
      )
    } else {
      preventLeagueTransitionOnMount.current = true
    }
  }, [league])

  useEffect(() => {
    if (preventTopTransitionOnMount.current) {
      topTransition(
        ref.current,
        stats,
        league,
        top,
        dispatch,
        setPlayerTop,
        setPlayerName,
        setPlayerImage
      )
    } else {
      preventTopTransitionOnMount.current = true
    }
  }, [top])

  useEffect(() => {
    const handleMatchMedia = e => {
      if (e.matches) {
        gsap.set(ref.current.children[3], {
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
        gsap.set(ref.current.children[1].lastChild.firstChild, {
          height: '15%',
          width: '11.11%',
        })
      } else {
        gsap.set(ref.current.children[3], {
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
        gsap.set(ref.current.children[1].lastChild.firstChild, {
          height: '11.11%',
          width: '15%',
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
      <Stats />
      <Primary />
      <Menu />
    </div>
  )
}
