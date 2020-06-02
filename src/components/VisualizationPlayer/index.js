import React, { useEffect, useState} from 'react';
import { Title, SubTitle, ContainerAnimation, MotionTitle } from './styles';
import RaveWavesAnimation from './RaveWavesAnimation'

const VisualizationPlayer = () =>
   {
       return (
           <div id="content">
            <MotionTitle
                variants={ContainerAnimation}
                initial="hidden"
                animate="visible"      
            >
                <Title>
                ex-reality
                </Title>
                <SubTitle>rafael dormido</SubTitle>
                <RaveWavesAnimation />
            </MotionTitle>
           </div>
  )};

export default VisualizationPlayer;
