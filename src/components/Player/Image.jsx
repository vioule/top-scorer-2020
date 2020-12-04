import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useSelector } from 'react-redux'
import { DataContext } from '../../layouts'

const Container = styled.div`
  position: absolute;
  padding-top: 1rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export default () => {
  const image = useSelector(({ player }) => player.image)
  const data = useContext(DataContext)
  const [fluid, setFluid] = useState(null)
  useEffect(() => {
    const img = data.find(x => x.originalName === image)
    setFluid(img)
  }, [image])
  return (
    <Container>
      {fluid && (
        <Img
          fluid={{ ...fluid, sizes: '50vw' }}
          style={{ width: '100%', height: '100%' }}
          imgStyle={{ objectFit: 'contain', objectPosition: 'center bottom' }}
        />
      )}
    </Container>
  )
}
