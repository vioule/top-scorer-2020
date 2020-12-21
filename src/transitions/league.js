import gsap from 'gsap'

export default (
  ref,
  themeContext,
  stats,
  league,
  top,
  dispatch,
  setTop,
  setPlayerImage,
  setPlayerName,
  setStatsLeague
) => {
  const topScorer = ref.children[4].firstChild
  const logos = ref.children[4].lastChild.children
  const tl = gsap.timeline()
  tl.set('.menu-item', { display: 'none' })
  if (window.matchMedia('(orientation:landscape)').matches) {
    tl.to(ref.firstChild.lastChild, {
      width: '100%',
      duration: 0.5,
      ease: 'power2.in',
    })
    tl.to(
      ref.children[2].lastChild,
      {
        width: '116.667%',
        duration: 0.5,
        ease: 'power2.in',
      },
      '-=0.15'
    )
    tl.to(ref.children[4], {
      width: '100%',
      duration: 0.5,
      ease: 'power2.inOut',
    })
  } else {
    tl.to(ref.firstChild.lastChild, {
      height: '100%',
      duration: 0.5,
      ease: 'power2.in',
    })
    tl.to(
      ref.children[2].lastChild,
      {
        height: '116.667%',
        duration: 0.5,
        ease: 'power2.in',
      },
      '-=0.15'
    )
    tl.to(ref.children[4], {
      height: '100vh',
      duration: 0.5,
      ease: 'power2.inOut',
    })
  }
  tl.addLabel('curtain')
  tl.set(ref.children[1].lastChild.firstChild.firstChild.firstChild, {
    color: `${themeContext.colors[league]}`,
  })
  tl.call(
    () => {
      if (top > 1) {
        dispatch(setTop(1))
      } else {
        dispatch(setPlayerImage(`${league}-1.png`))
        dispatch(setPlayerName(stats[league][0].name))
      }
      dispatch(setStatsLeague(league))
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
      ref.children[4],
      {
        background: `linear-gradient(${themeContext.colors.dark}, ${themeContext.colors[league]})`,
        duration: 0.5,
        ease: 'linear',
      },
      '-=0.5'
    )
    tl.set(ref.firstChild, {
      background: `linear-gradient(${themeContext.colors[league]}, ${themeContext.colors.dark})`,
    })
  } else {
    tl.to(
      ref.children[4],
      {
        background: `linear-gradient(to right, ${themeContext.colors.dark}, ${themeContext.colors[league]})`,
        duration: 0.5,
        ease: 'linear',
      },
      '-=0.5'
    )
    tl.set(ref.firstChild, {
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
      ref.children[4],
      { width: '6.25%', duration: 0.5, ease: 'power2.inOut' },
      '+=0.5'
    )
    tl.to(ref.children[2].lastChild, {
      width: 0,
      duration: 0.5,
      ease: 'power2.out',
    })
    tl.to(
      ref.firstChild.lastChild,
      {
        width: 0,
        duration: 0.5,
        ease: 'power2.out',
      },
      '-=0.15'
    )
  } else {
    tl.to(
      ref.children[4],
      { height: '6.25vh', duration: 0.5, ease: 'power2.inOut' },
      '+=0.5'
    )
    tl.to(ref.children[2].lastChild, {
      height: 0,
      duration: 0.5,
      ease: 'power2.out',
    })
    tl.to(
      ref.firstChild.lastChild,
      {
        height: 0,
        duration: 0.5,
        ease: 'power2.out',
      },
      '-=0.15'
    )
  }
  tl.set('.menu-item', { display: 'block' })
}
