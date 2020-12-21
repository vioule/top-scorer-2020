import React, { useContext } from 'react'
import { Transition, TransitionGroup } from 'react-transition-group'
import gsap from 'gsap'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Description, Content } from '../../Texts'
import { DataContext } from '../../../layouts'

const StyledTransitionGroup = styled(TransitionGroup)`
  position: relative;
  height: 26.5rem;
`

const Container = styled.div`
  position: absolute;
  width: 100%;
  margin-top: 2rem;
`

const Mask = styled.div`
  position: relative;
  overflow: hidden;
`

const Element = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  height: 2rem;
  border-bottom: 0.15rem solid ${({ theme }) => theme.colors.dark};
`

const Border = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 2rem;
  border-bottom: 0.15rem solid ${({ theme, league }) => theme.colors[league]};
`

export default () => {
  const { stats } = useContext(DataContext)
  const { menu, league } = useSelector(store => store.stats)
  const { top } = useSelector(store => store.player)
  const onEnter = node => {
    const percent = stats[league][top - 1].percent[menu]
    const borders = gsap.utils.toArray(node.querySelectorAll('.border'))

    borders.forEach((el, i) => {
      gsap.to(el, {
        width: `${percent[i]}%`,
        duration: 0.25,
        delay: 0.1 * i + 0.75,
      })
    })
    gsap.fromTo(
      node.querySelectorAll('.description'),
      { xPercent: 100 },
      {
        xPercent: 0,
        duration: 0.25,
        ease: 'power2.out',
        stagger: 0.1,
        delay: 0.2,
      }
    )
    gsap.fromTo(
      node.querySelectorAll('.content'),
      { xPercent: -100 },
      {
        xPercent: 0,
        duration: 0.25,
        ease: 'power2.out',
        stagger: 0.1,
        delay: 0.45,
      }
    )
  }
  const onExit = node => {
    gsap.set(node.children, { borderBottomColor: 'transparent' })
    const borders = gsap.utils.toArray(node.querySelectorAll('.border'))

    borders.forEach((el, i) => {
      gsap.to(el, { width: 0, duration: 0.25, delay: 0.1 * i + 0.5 })
    })
    gsap.to(node.querySelectorAll('.description'), {
      xPercent: -100,
      duration: 0.25,
      ease: 'power2.in',
      stagger: 0.1,
    })
    gsap.to(node.querySelectorAll('.content'), {
      xPercent: 100,
      duration: 0.25,
      ease: 'power2.in',
      stagger: 0.1,
      delay: 0.25,
    })
  }
  return (
    <StyledTransitionGroup>
      <Transition
        key={[menu, top]}
        timeout={1000}
        onEnter={onEnter}
        onExit={onExit}
      >
        <Container>
          {Object.entries(stats[league][top - 1].stats[menu]).map(x => (
            <Element key={x}>
              <Mask>
                <Description className="description">
                  {x[0]
                    .replace(/_/g, ' ')
                    .replace('percent', '%')
                    .replace('per', '/')}
                </Description>
              </Mask>
              <Mask>
                <Content className="content">{x[1]}</Content>
              </Mask>
              <Border className="border" league={league} />
            </Element>
          ))}
        </Container>
      </Transition>
    </StyledTransitionGroup>
  )
}
