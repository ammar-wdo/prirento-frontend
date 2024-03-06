
'use client'
import React from 'react';
import  Lottie ,{ useLottie } from 'lottie-react';
import { AnimationItem, AnimationConfigWithData } from 'lottie-web';

interface LottieAnimationProps {
  animationData: AnimationConfigWithData['animationData'];
  height?: number;
  width?: number;
  playInterval?: number;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ animationData, height = 300, width = 300, playInterval = 4000 }) => {
    
  return <Lottie animationData={animationData} style={{ width, height }}  loop={false}  />;
};

export default LottieAnimation;
