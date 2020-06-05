import styled from 'styled-components'
import { motion } from 'framer-motion'

const Title = styled.h1`
  font-family: 'Bandeins Strange';
  font-weight: 100;
  font-variation-settings: "wght" 100, "wdth" 350;
  margin: 5px 0;
`

const SubTitle = styled.h5`
  font-family: 'Bandeins Strange';
  font-variation-settings: "wght" 100, "wdth" 350;
  margin: 0;
`

const HiddenVideo = styled.video`
  display:none;
`

const MotionTitle = styled(motion.div)`
    z-index: 3;
    position: relative
`

const AnimationCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
`

const ContainerAnimation = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 0,
    scale: 1,
    transition: {
      delay: 5,
      staggerChildren: 0.1
    }
  }
}

export { Title, SubTitle, ContainerAnimation, HiddenVideo, MotionTitle, AnimationCanvas }
