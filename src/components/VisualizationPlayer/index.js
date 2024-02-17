import React from 'react'
import { Container, ContainerAnimation, MotionTitle, Content } from './styles'
import RaveWavesAnimation from './RaveWavesAnimation'

const VisualizationPlayer = () => {
  return (
    <Content id='content'>
      <MotionTitle
        variants={ContainerAnimation}
        initial='hidden'
        animate='visible'
      >
      </MotionTitle>
      <Container>
        <RaveWavesAnimation />
      </Container>

    </Content>
  )
}

export default VisualizationPlayer
