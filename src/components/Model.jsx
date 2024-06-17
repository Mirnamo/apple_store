import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ModelView from "./ModelView";
import { useRef, useState} from "react";
import { View } from "@react-three/drei";
import { yellowImg } from "../utils";
import * as THREE from 'three';
import { Canvas } from "@react-three/fiber";

const Model = () => {
    const [size, setSize] = useState('small');
    const [model, setModel] = useState({
        title: 'iPhone 15 Pro in Natural Titanium',
        color: ['#8F8A1', '#FFE7B9', '#6F6C64'],
        img: yellowImg,
    });

    //camera view
    const cameraControlSmall = useRef();
    const cameraControlLarge = useRef();
    //model
    const small = useRef(new THREE.Group());
    const large = useRef(new THREE.Group());
    //rotation
    const [smallRotation, setSmallRotation] = useState(0);
    const [largeRotation, setLargeRotation] = useState(0);


    useGSAP(()=>{
      gsap.to("#heading", {y: 0, opacity: 1})
    }, []);

  return (
    <section className="coomon-padding">
        <div className="screen-max-width">
            <h1 id="heading" className="section-heading">
                take a closer look.
            </h1>
            <div className="flex flex-col items-center mt-5">
                <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
                    <ModelView 
                    index={1}
                    groupRef={small}
                    gsapTye="view1"
                    controlRef={cameraControlSmall}
                    setRotationState={setSmallRotation}
                    item={model}
                    size={size}
                    />

                   <ModelView 
                    index={2}
                    groupRef={large}
                    gsapTye="view2"
                    controlRef={cameraControlLarge}
                    setRotationState={setLargeRotation}
                    item={model}
                    size={size}
                    />

                    <Canvas className="w-full h-full" style={{
                        position: 'fixed',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        overflow: 'hidden'
                    }}
                    eventSource={document.getElementById('root')}>
                        <View.Port />
                    </Canvas>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Model
