import React, {useEffect} from 'react';
import { Title, SubTitle, ContainerAnimation, HiddenVideo, MotionTitle } from './styles';
import { init } from '../../visualizations/webcam-video/'
import video from '../../assets/video.mp4'

const Visualization = () =>
   {
       useEffect(() => {
           setTimeout(() => {
           init()               
           }, 1000);
       }, [])
       
       return (
           <div id="content">
            <MotionTitle
                variants={ContainerAnimation}
                initial="hidden"
                animate="visible"      
            >
                <Title>
                ex reality
                </Title>
                <SubTitle>rafael dormido</SubTitle>
                <HiddenVideo id="video" src={video}></HiddenVideo>
            </MotionTitle>
           </div>
  )};

export default Visualization;
