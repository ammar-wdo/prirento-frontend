'use client'

import React, { useEffect, useRef } from 'react';
import lottie, { AnimationItem } from 'lottie-web';

type LottieAnimationProps = {
  animationData: any; // Use appropriate type for your animation data (e.g., `any` or a specific structure based on the JSON schema)
};

const LottieAnimation: React.FC<LottieAnimationProps> = ({ animationData }) => {
  const animationContainer = useRef<HTMLDivElement>(null);
  const animationInstance = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (animationContainer.current) {
      animationInstance.current = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
    }

    return () => animationInstance.current?.destroy();
  }, [animationData]);

  return <div ref={animationContainer} />;
};

export default LottieAnimation;