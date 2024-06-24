import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero() {
  // initially opacity is zero, and useGSAP will make it 1
  useGSAP(() => {
    gsap.to('#hero', {
      opacity: 1,
      delay: 1.0,
    });
  }, []);

  return (
    // nav-height specifies that opacity is 0 initially
    <section className='w-full nav-height bg-black relative'>
      <div className='h-5/6 w-full flex-center flex-col'>
        <p id='hero' className='hero-title'>
          iPhone 15 Pro
        </p>
      </div>
    </section>
  );
}
