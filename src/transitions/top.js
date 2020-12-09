import gsap from 'gsap'

export default (
  ref,
  stats,
  league,
  top,
  dispatch,
  setPlayerTop,
  setPlayerName,
  setPlayerImage
) => {
  const tl = gsap.timeline()
  tl.set('.menu-item', { display: 'none' })
  if (window.matchMedia('(orientation:landscape)').matches) {
    tl.to(ref.children[1].lastChild.firstChild, {
      height: '100%',
      duration: 0.5,
      ease: 'power2.inOut',
    })
    tl.to(ref.children[1].lastChild.firstChild, {
      width: '100%',
      duration: 0.5,
      ease: 'power2.inOut',
    })
  } else {
    tl.to(ref.children[1].lastChild.firstChild, {
      width: '100%',
      duration: 0.5,
      ease: 'power2.inOut',
    })
    tl.to(ref.children[1].lastChild.firstChild, {
      height: '100%',
      duration: 0.5,
      ease: 'power2.inOut',
    })
  }
  tl.call(
    () => {
      dispatch(setPlayerTop(top))
      dispatch(setPlayerImage(`${league}-${top}.png`))
      dispatch(setPlayerName(stats[league][top - 1].name))
    },
    null,
    '+=0.25'
  )
  if (window.matchMedia('(orientation:landscape)').matches) {
    tl.to(
      ref.children[1].lastChild.firstChild,
      {
        width: '11.11%',
        duration: 0.5,
        ease: 'power2.inOut',
        delay: 0.25,
      },
      '+=0.25'
    )
    tl.to(ref.children[1].lastChild.firstChild, {
      height: '15%',
      duration: 0.5,
      ease: 'power2.inOut',
    })
  } else {
    tl.to(
      ref.children[1].lastChild.firstChild,
      {
        height: '11.11%',
        duration: 0.5,
        ease: 'power2.inOut',
        delay: 0.25,
      },
      '+=0.25'
    )
    tl.to(ref.children[1].lastChild.firstChild, {
      width: '15%',
      duration: 0.5,
      ease: 'power2.inOut',
    })
  }
  tl.set('.menu-item', { display: 'block' })
}
