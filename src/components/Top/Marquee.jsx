import gsap from 'gsap/gsap-core'
import React, { useRef, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import debounce from 'lodash.debounce'
import styled from 'styled-components'
import { Name } from '../Texts'

const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const Wrapper = styled.div`
  position: absolute;
  display: inline-block;
  white-space: nowrap;
  z-index: -1;
`

const StyledName = styled(Name)`
  font-size: 5.3vw;
  color: ${({ theme }) => theme.colors.dark};
  padding-left: 2rem;
  @media ${({ theme }) => theme.medias.portrait} {
    font-size: 5.3vh;
  }
`

export default () => {
  const ref = useRef(null)
  const name = useSelector(({ player }) => player.name)
  const [iteration, setIteration] = useState(1)
  const [duration, setDuration] = useState(1)
  const [children, setChildren] = useState([
    <StyledName key={0}>{name}</StyledName>,
  ])
  const handleIteration = () => {
    const width = ref.current.offsetWidth
    const wrapperWidth = ref.current.firstChild.firstChild.offsetWidth
    setIteration(Math.ceil(width / wrapperWidth) * 2)
  }
  const handleDuration = () => {
    setDuration(ref.current.firstChild.offsetWidth / 100)
  }

  useEffect(() => {
    const debounceHandleIteration = debounce(handleIteration, 200)
    const debounceHandleDuration = debounce(handleDuration, 200)
    window.addEventListener('resize', debounceHandleIteration)
    window.addEventListener('resize', debounceHandleDuration)
    return () => {
      window.removeEventListener('resize', debounceHandleIteration)
      window.removeEventListener('resize', debounceHandleDuration)
    }
  }, [])

  useEffect(() => {
    setChildren(() => {
      const array = []
      for (let i = 0; i < iteration; i += 1) {
        array.push(<StyledName key={i}>{name}</StyledName>)
      }
      return array
    })
  }, [iteration])

  useEffect(() => {
    gsap.fromTo(
      ref.current.firstChild,
      { xPercent: 0 },
      {
        xPercent: -50,
        duration,
        ease: 'linear',
        repeat: -1,
        overwrite: true,
      }
    )
  }, [duration])

  useEffect(() => {
    handleDuration()
  }, [children])

  useEffect(() => {
    handleIteration()
    handleDuration()
  }, [name])
  return (
    <Container ref={ref}>
      <Wrapper>{children}</Wrapper>
    </Container>
  )
}
