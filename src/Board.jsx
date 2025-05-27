import logo from './logo.svg';
import React, { useEffect, useRef, useState} from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import {MenuButton} from './Buttons/Buttons'
import StartPage from './StartPage/StartPage.jsx';
import HomePage from './HomePage/HomePage.jsx';
import InsidePage from './InsidePage/InsidePage.jsx';
import Controller from './Controller.js';
import { HomeButton, NextButton, BackButton} from './Buttons/Buttons.jsx';
import InsidePageTwo from './InsidePageTwo/InsidePageTwo.jsx';
import {AnimatePresence, motion} from 'framer-motion'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const RESET_TIME = 1200; //secs


function setInactiveTimer(setPageData, setShowStart, setShowMore) {
    let lastClickTimestamp = null;
    const time_to_restart = RESET_TIME;

    document.body.addEventListener("click", ()=> {lastClickTimestamp = Date.now();});

    const intervalId = setInterval(()=>{
        if (lastClickTimestamp) {
            const currentTime = Date.now();
            const timeDifference = currentTime - lastClickTimestamp;

            if (timeDifference > time_to_restart * 1000) {
                lastClickTimestamp = null;
                setShowStart(true);
                setPageData(null);
                setShowMore(false);
            }
        }
    }, 1000);
}

function Background(){
    return (
        <>
        <div className='home_container_four'></div>
        </>
    )
}


export default function BoardOne({jsonData, jsonbutton}) {
    const path = useLocation();
    const locationPath = path.pathname.split('/')[1];


    const jsonDatapage = jsonData;

    let titleStart;

    if (locationPath === 'board_one') {
        titleStart = 'Привлечение финансирования'
    } else if (locationPath === 'board_two') {
        titleStart = 'ПОДДЕРЖКА РАЗРАБОТОК'
    } else if (locationPath === 'board_three') {
        titleStart = 'Развитиае человечского капитала'
    } else if (locationPath === 'board_four') {
        titleStart = ''
    } else {
        titleStart = 'Привет'
    }




    let [pageData, setPageData] = useState(null);
    let [showMore, setShowMore] = useState(false);
    let [showStart, setShowStart] = useState(true);
    let [showHome, setShowHome] = useState(false);
    let [showNext, setShowNext] = useState(false);
    let [showBack, setShowBack] = useState(false);

    setInactiveTimer(setPageData, setShowStart, setShowMore);

    function homeButtonFuncution(){
        setShowHome(false);
        setPageData(null);
        setShowMore(false);
        setShowNext(false);
        setShowBack(false);
    }
    function nextButtonFuncution(){
        setShowNext(false);
        setShowMore(true);
        setShowBack(true);
    }

    function startPageButton(){
        setShowStart(false)
        setShowHome(false)
    }

    function backButtonFunction(){
        setShowNext(true);
        setShowMore(false);
        setShowBack(false);
    }
    return (
        <>
        <Background/>
        { showNext && <NextButton onclickFunc={nextButtonFuncution} />}
        { showHome && <HomeButton onclickFunc={homeButtonFuncution} />}
        { showBack && <BackButton onclickFunc={backButtonFunction}/>}
        <AnimatePresence>
        { showStart ? (
                <motion.div key='startpagekey'
                animate = {{opacity:1}}
                exit    = {{opacity: 0}}>
                    <StartPage image = {jsonDatapage.image.image_class} titleStartPage={titleStart} setShowStart={startPageButton} />
                </motion.div>
            ):(
            <>
               {!pageData ? (
                        <HomePage buttonsIds={jsonbutton} pageData={jsonData} setShowNext={setShowNext} setShowHome={setShowHome} setPageData={setPageData}/>
                       ):(
                           <>
                           {!showMore ? (
                               <InsidePage  pageData={pageData}/>
                           ):(
                               <InsidePageTwo pageData={pageData}/>
                            )}
                           </>
                       )}
            </>)
            }
        </AnimatePresence>
        </>
    )};
            // <InsidePageTwo ref = {insidePageTwoRef} pageData={pageData}/>
