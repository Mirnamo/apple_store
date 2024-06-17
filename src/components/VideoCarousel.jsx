import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef, useState } from "react";

import { hightlightsSlides } from "../constants";
import { pauseImg, playImg, replayImg } from "../utils";

const VideoCarousel = () => {
    const videoRef = useRef([]);
    const videoSpanRef = useRef([]);
    const videoDivRef = useRef([]);

    const [video, setVideo] = useState({
        isEnd: false,
        startPlay: false,
        videoId: 0,
        isLastVideo: false,
        isPlaying: false,
    });

    const [loadedData, setLoadedData] = useState([]);

    const {isEnd, isLastVideo, startPlay, videoId, isPlaying} = video;

    useGSAP(()=>{
         gsap.to('#video', {
          scrollTrigger: {
            trigger: '#video',
            toggleActions: 'restart none none none'
          },
          onComplete: ()=>{
            setVideo((pre)=>({
              ...pre,
              startPlay: true,
              isPlaying: true,
            }))
          }
         })
    },[isEnd, videoId]);


    useEffect(()=>{
        const currentState = 0;
        let span = videoSpanRef.current;
 
        if(span[videoId]){
         let animation = gsap.to(span[videoId], {
          onUpdate: ()=> {
 
         }, onComplete: ()=>{
 
         }
 
         })
        }
     }, [videoId, startPlay]);

     const handleProcess = (type, i) => {
      switch (type) {
        case "video-end":
          setVideo((pre) => ({ ...pre, isEnd: true, videoId: i + 1 }));
          break;
  
        case "video-last":
          setVideo((pre) => ({ ...pre, isLastVideo: true }));
          break;
  
        case "video-reset":
          setVideo((pre) => ({ ...pre, videoId: 0, isLastVideo: false }));
          break;
  
        case "pause":
          setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
          break;
  
        case "play":
          setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
          break;
  
        default:
          return video;
      }
    };

     useEffect(()=>{
      if(loadedData.length > 3){
        if(!isPlaying){
            videoRef.current[videoId].pause();
        }
        else{
            startPlay && videoRef.current[videoId].play();
        }
      }
    },[startPlay, videoId, isPlaying, loadedData]);

  return (
    <>
    <div className="flex items-center">
      {hightlightsSlides.map((list,i) =>
      (
        <div key={list.id} id="slider" className="sm:pr-20 pr-10">
            <div className="video-carousel_countainer">
            <div className="w-full h-full flex-center rounded-3x1 overflow-hidden bg-black">
                <video id="video" playsInline={true} muted preload='auto' ref={(element) => (videoRef.current[i] = element)} 
                onPlay={()=>{setVideo((prevVideo) => ({...prevVideo, isPlaying:true}))}}
                onLoadedMetadata={(element)=>handleProcess(i, element)}>

                    <source src={list.video} type="video'mp4"/>
                </video>
            </div>
            <div className="absolute top-12 left-[%5] z-10">
               {list.textLists.map(text => (
                <p key={text} className="text-xl font-medium md:text-2xl">{text}</p>
               ))}
            </div>
            </div>
        </div>
      )
    )}
    </div>
    <div className="relative flex-center mt-10">
        <div className="flex-center py-5 px-3 bg-gray-300 backdrop-blur rounded-full">
        {videoRef.current.map((_, i) => (
            <span
              key={i}
              className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer"
              ref={(element) => (videoDivRef.current[i] = element)}
            >
              <span
                className="absolute h-full w-full rounded-full"
                ref={(element) => (videoSpanRef.current[i] = element)}
              />
            </span>
          ))}
        </div>
        <button className="control-btn">
          <img
            src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
            alt={isLastVideo ? "replay" : !isPlaying ? "play" : "pause"}
            onClick={
              isLastVideo
                ? () => handleProcess("video-reset")
                : !isPlaying
                ? () => handleProcess("play")
                : () => handleProcess("pause")
            }
          />
        </button>
    </div>
    </>
  )
}

export default VideoCarousel