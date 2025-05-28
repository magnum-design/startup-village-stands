import logo from './logo.svg';
import React, { useEffect, useRef, useState} from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import {MenuButton} from './Buttons/Buttons'
import StartPage from './StartPage/StartPage.jsx';
import HomePage, { PreHomePage } from './HomePage/HomePage.jsx';
import InsidePage from './InsidePage/InsidePage.jsx';
import Controller from './Controller.js';
import { HomeButton, NextButton, BackButton} from './Buttons/Buttons.jsx';
import InsidePageTwo from './InsidePageTwo/InsidePageTwo.jsx';
import {AnimatePresence, motion} from 'framer-motion'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { buttonsIdFour, buttonsIdPreHome } from './DataJSON/JsonDataOne';

const RESET_TIME = 60 * 5; //secs


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
        <div className='home_container'></div>
        </>
    )
}


export default function BoardOne({ jsonData, jsonbutton}) {
    const path = useLocation();
    const locationPath = path.pathname.split('/')[1];


    const jsonDatapage = jsonData;

    let titleStart;

    if (locationPath === 'board_one') {
        titleStart = 'Привлечение финансирования'
    } else if (locationPath === 'board_two') {
        titleStart = 'ПОДДЕРЖКА РАЗРАБОТОК'
    } else if (locationPath === 'board_three') {
        titleStart = 'ВНЕДРЕНИЕ ИННОВАЦИЙ'
    } else if (locationPath === 'board_four') {
        titleStart = 'Развитие человеческого капитала'
    } else {
        titleStart = 'Привет'
    }




    let [pageData, setPageData] = useState(null);
    let [homePageData, setHomePageData] = useState(null);
    let [showMore, setShowMore] = useState(false);
    let [showStart, setShowStart] = useState(true);
    let [showHome, setShowHome] = useState(false);
    let [showNext, setShowNext] = useState(false);
    let [showBack, setShowBack] = useState(false);

    setInactiveTimer(setPageData, setShowStart, setShowMore);

    function homeButtonFuncution(){
        setShowHome(false);
        setHomePageData(null);
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
        setPageData(null);
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
                    <StartPage  image = {jsonDatapage.image.image_class} titleStartPage={titleStart} setShowStart={startPageButton} />
                </motion.div>
            ):(
            <>
                {! homePageData ? (
                        <PreHomePage buttonsIds={buttonsIdPreHome} pageData={jsonData} setHomePageData={setHomePageData} setShowNext={setShowNext} setShowHome={setShowHome}/>
                    ):(
                        <>
                       {!pageData ? (
                            <HomePage buttonsIds={homePageData} pageData={jsonData} setShowBack={setShowBack} setShowHome={setShowHome} setPageData={setPageData}/>
                       ):(
                           <>
                           {!showMore ? (
                               <InsidePage  pageData={pageData}/>
                           ):(
                               <InsidePageTwo pageData={pageData}/>
                            )}
                           </>
                       )}</>)
                }</>)
            }
        </AnimatePresence>
        </>
    )};

            // <InsidePageTwo ref = {insidePageTwoRef} pageData={pageData}/>
