import './StartPage.css';
import background_video from '../Videos/fon.mp4';
import logo from '../Img/LogoMIK.png';
import department_logo from '../Img/Clip_path_group.png';
import { forwardRef, useImperativeHandle, useRef} from 'react';
import {animate, defaultEasing} from 'motion'

import { useLocation } from "react-router-dom";





const StartPage = forwardRef((props, ref) => {
     let {titleStartPage} = props; 
     console.log('гыг', titleStartPage);
     let titleStartFirst = titleStartPage.split(' ')[0];
     let titleStartSecond = titleStartPage.split(' ')[1];    
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
                    <div className='start_container_vertical'>
                        <div class="for_statistic_wrapper">
                            <div className='circle_hor'></div>
                            <div className='for_start'>
                                <h1 className='title'>
                                {titleStartFirst}<br/>
                                {titleStartSecond}
                                </h1>
                                
                            </div>
                        </div>    
                    </div>
                    <img src={logo} alt="Logo" className="logo"/>
                    <img src={department_logo} alt="department_logo" className="department_logo"/>
                    <div className='mony'></div>
                </div>
            </div>
        </>
    )
})

export default StartPage;
