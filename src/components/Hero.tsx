import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 768 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 768) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };
  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);
    return () => {
      window.removeEventListener('resize', handleVideoSrcSet);
    };
  }, []);

  // initially opacity is zero, and useGSAP will make it 1
  useGSAP(() => {
    gsap.to('#hero', {
      opacity: 1,
      delay: 1.2,
    });
  }, []);

  return (
    // nav-height specifies that opacity is 0 initially
    <section className='w-full nav-height bg-black relative'>
      <div className='h-5/6 w-full flex-center flex-col'>
        <p id='hero' className='hero-title'>
          iPhone 15 Pro
        </p>
        <div className='md:w-10/12 w-9/12'>
          <video
            className='pointer-events-none'
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type='video/mp4' />
          </video>
        </div>
      </div>
    </section>
  );
}
