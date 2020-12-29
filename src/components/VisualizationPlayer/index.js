import React, { useEffect, useState } from 'react'
import { Header, Container, Title, SubTitle, ContainerAnimation, MotionTitle, LeftSideNav, RightSideNav, Content } from './styles'
import RaveWavesAnimation from './RaveWavesAnimation'
import PlayerLayout from './PlayerLayout'

const VisualizationPlayer = () => {
  return (
    <Content id='content'>
      <MotionTitle
        variants={ContainerAnimation}
        initial='hidden'
        animate='visible'
      >
        {/* <Title>
          ex:reality
        </Title>
        <SubTitle>rafael dormido</SubTitle> */}
      </MotionTitle>
      <Container>
        <RaveWavesAnimation />
      </Container>

    </Content>
  )
}

export default VisualizationPlayer
