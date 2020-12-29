import styled from 'styled-components'
import { motion } from 'framer-motion'

const Content = styled.div`
  width: 100vw;
  height: 100vh;
`

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
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
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

const LeftSideNav = styled.div`
  background: #121212cf;
  height: 100%;
  width: 300px;
  z-index: 5;
`

const RightSideNav = styled.div`
  background: #121212cf;
  height: 100%;
  width: 300px;
  z-index: 5;
`

const Header = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  display:flex;
  background: #121212cf;
  z-index: 5;
`

const Container = styled.div`
  width: 100%;
  z-index: 5;
  height: 100%;
  display: flex;
  justify-content: space-between;
`

export { Container, Header, Title, SubTitle, ContainerAnimation, HiddenVideo, MotionTitle, AnimationCanvas, LeftSideNav, RightSideNav, Content }
