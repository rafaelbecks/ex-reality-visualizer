import React, { useEffect } from 'react';
import { HiddenVideo } from './styles';
import { init } from '../../visualizations/ravewaves/';

const RaveWavesAnimation = () => {
  const videoRef = React.createRef();

  const initStuff = () => {
    console.log('ready to play');
    init();
  };

  useEffect(() => {
    const setupCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.onloadedmetadata = () => {
            videoRef.current.play();
            initStuff();
          };
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    setupCamera();

    return () => {
      // Cleanup code if needed
    };
  // eslint-disable-next-line
  }, []);

  return (
    <HiddenVideo
      id='video'
      muted
      autoPlay
      playsInline
      ref={videoRef}
    />
  );
};

export default RaveWavesAnimation;
