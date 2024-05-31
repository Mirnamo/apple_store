import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';
import { useState, useEffect} from 'react';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)
  const handleVideo = () => {
    window.innerWidth < 760 ? setVideoSrc(smallHeroVideo) : videoSrc(videoSrc)
    }
  
  useEffect (() => {
    window.addEventListener('resize', handleVideo);

    //remember it is important in React to clean up effects
    return () => {
        window.removeEventListener('resize', handleVideo)
    }
  })

  useGSAP(() =>{
    gsap.to(".hero-title", {opacity: 1, delay: 2, duration:1.2})
    gsap.to("#cta", {opacity: 1, delay: 2, duration:1.2, y:-50})
  })

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p className="hero-title">iPhone 15 Pro</p>
        <div className="md:w-10/12 w-9/12">
            <video autoPlay muted playsInline={true} key={videoSrc}>
                <source src={videoSrc} type="video/mp4" />
            </video>
        </div>
      </div>
      <div id="cta" className="flex flex-row justify-center items-center opacity-0 translate-y-20">
        <a href="#highlights" className="btn mr-4">Learn more</a>
        <a href="#highlights" className = "btn">Buy</a>
      </div>
    </section>
  )
}

export default Hero
