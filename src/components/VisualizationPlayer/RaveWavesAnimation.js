import React from 'react'
import { HiddenVideo } from './styles'
import { init } from '../../visualizations/ravewaves/'

const RaveWavesAnimation = () => {
  const videoRef = React.createRef()

  const initStuff = () => {
    console.log('ready to play')
          init()
  }

  return (
    <HiddenVideo
      id='video'
      muted
      crossOrigin='Anonymous'
      autoloop
      src='https://ex-reality.s3.amazonaws.com/cp-cropped.mp4'
      ref={videoRef}
      onCanPlay={() => initStuff()}
    />)
}

export default RaveWavesAnimation
