import './StartPage.css';
import background_video from '../Videos/bg_violet.mp4';
import logo from '../Img/razvitie.png';
import department_logo from '../Img/Clip_path_group.png';
import { forwardRef, useImperativeHandle, useRef} from 'react';
import {animate, defaultEasing, progressPercentage} from 'motion'

import {AnimatePresence, motion} from 'framer-motion'
import { useLocation } from "react-router-dom";





const StartPage = forwardRef((props, ref) => {
    let {titleStartPage} = props;
    let {image} = props;
    console.log('гыг', titleStartPage);
    let titleStartFirst = titleStartPage.split(' ')[0];
    let titleStartSecond = titleStartPage.split(' ')[1];
    let titleStartThree = titleStartPage.split(' ')[2];
    const  componentRef = useRef(null);
    function hideStart(){
        props.setShowStart(false);
    }


    return (
        <>
            <motion.div exit={{opacity : 0, duration: 5}} id='start_container' className='start_container' ref={componentRef}
        onClick={ hideStart }
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
                        <div className="for_statistic_wrapper">
                            <div className='circle'></div>
                            <div className='for_start'>
                                <h1 className='title'>
                                {titleStartFirst}<br/>
                                {titleStartSecond}<br/>
                                {titleStartThree}
                                </h1>

                            </div>
                        </div>
                    </div>
                    <img src={logo} alt="Logo" className="logo_start"/>
                    <img src={department_logo} alt="department_logo" className="department_logo_start"/>
                    <div className={image}></div>
                </div>
            </motion.div>
        </>
    )
})

export default StartPage;
