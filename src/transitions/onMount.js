import gsap from 'gsap'

export default (ref, themeContext, league) => {
  const topScorer = ref.children[4].firstChild
  const logos = ref.children[4].lastChild.children
  const menu = ref.lastChild
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
      ref.children[4],
      { width: '6.25%', duration: 0.5, ease: 'power2.inOut' },
      '+=0.5'
    )
    tl.set(ref.children[4], {
      background: `linear-gradient(${themeContext.colors.dark}, ${themeContext.colors[league]})`,
    })
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
    tl.set(ref.children[4], {
      background: `linear-gradient(to right, ${themeContext.colors.dark}, ${themeContext.colors[league]})`,
    })
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
  tl.to(menu, { opacity: 1, duration: 0.5, ease: 'linear' }, '-=0.5')
  tl.set('.menu-item', { display: 'block' })
}
