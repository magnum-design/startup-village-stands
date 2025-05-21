import './StartPage.css';
import background_video from '../Videos/fon.mp4';
import logo from '../Img/LogoMIK.png';
import { forwardRef, useImperativeHandle, useRef} from 'react';
import {animate, defaultEasing} from 'motion'

import { useLocation } from "react-router-dom";



const StartPage = forwardRef((props, ref) => {
     const  componentRef = useRef(null);
     function showAnimate(delay){
         if (componentRef.current){
             componentRef.current.style.pointerEvents = 'auto';
             animate(componentRef.current, { opacity: 1 }, { duration: 0.5, delay : delay} )
         }
     };
     function hideAnimate(delay=0){
         if (componentRef.current){
             componentRef.current.style.pointerEvents = 'none';
             animate(componentRef.current, { opacity: 0 }, { duration: 0.5 } )
         }
     };
     useImperativeHandle(ref, () => ({
         showAnimate,
         hideAnimate,
     }));


    return (
        <>
            <div id='start_container' className='start_container' ref={componentRef}
        onClick={ hideAnimate }
        >
                <video className='video_fon'
                    controls = {false}
                    loop
                    muted
                    autoPlay
                    playsInline>
                <source src={background_video} type="video/webm" />
                </video>
                <div id='content' className='content'>

                    <h1 className='title'>
                        Привлечение
                    </h1>
                    <h1 className='title2'>
                        финансирования
                    </h1>
                    <img src={logo} alt="Logo" className="logo"/>

                </div>
            </div>
        </>
    )
})

export default StartPage;
