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
        titleStart = 'ТРУДОУСТРОЙСТВО В ВЫСОКОТЕХ'
    } else {
        titleStart = 'Привет'
    }




    let [pageData, setPageData] = useState(null);
    let [showMore, setShowMore] = useState(false);
    let [showStart, setShowStart] = useState(true);
    let [showHome, setShowHome] = useState(false);
    let [showNext, setShowNext] = useState(false);
    let [showBack, setShowBack] = useState(false);

    let [showFakeNext, setShowFakeNext] = useState(false);
    let [showFakeBack, setShowFakeBack] = useState(false);
    let [fakeCounter, setFakeCounter] = useState(0) ;

    setInactiveTimer(setPageData, setShowStart, setShowMore);

    function homeButtonFuncution(){
        setShowHome(false);
        setPageData(null);
        setShowMore(false);
        setShowNext(false);
        setShowBack(false);
        setShowFakeNext(false);
        setShowFakeBack(false);
        setFakeCounter(0);
    }
    function nextButtonFuncution(){
        setShowNext(false);
        setShowMore(true);
        setShowBack(true);
    }


    function nextFakeButtonFuncution(){
        console.log('next', fakeCounter)
        setFakeCounter(fakeCounter + 1);
        if (fakeCounter == 0){
            setPageData(pageData => jsonData['direct_button'])
            setShowFakeBack(true);
        } else if (fakeCounter == 1){
            setPageData(pageData => jsonData['financing_button'])
            setShowFakeNext(false);
            setShowFakeBack(true);
        }
    }

    function backFakeButtonFunction(){
        console.log('back', fakeCounter)
        setFakeCounter(fakeCounter - 1);
        if (fakeCounter == 1){
            setPageData(pageData => jsonData['product_buttons'])
            setShowFakeBack(false);
        } else if (fakeCounter == 2){
            setPageData(pageData => jsonData['direct_button'])
        }
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
        { showHome && <HomeButton onclickFunc={homeButtonFuncution} />}

        { showNext && <NextButton onclickFunc={nextButtonFuncution} />}
        { showFakeNext && <NextButton onclickFunc={nextFakeButtonFuncution} />}

        { showBack && <BackButton onclickFunc={backButtonFunction}/>}
        { showFakeBack && <BackButton onclickFunc={backFakeButtonFunction}/>}
        <AnimatePresence>
        { showStart ? (
                <motion.div key='startpagekey'
                animate = {{opacity:1}}
                exit    = {{opacity: 0}}>
                    <StartPage  image = {jsonDatapage.image.image_class} titleStartPage={titleStart} setShowStart={startPageButton} />
                </motion.div>
            ):(
            <>
               {!pageData ? (
                        <HomePage buttonsIds={jsonbutton} pageData={jsonData} setShowNext={setShowNext} setShowFakeBack={setShowFakeBack} setShowFakeNext={setShowFakeNext} setShowHome={setShowHome} setPageData={setPageData}/>
                       ):(
                           <>
                           {!showMore ? (
                               <InsidePage mainTitle={titleStart} fakeCounter={fakeCounter} pageData={pageData}/>
                           ):(
                               <InsidePageTwo mainTitle={titleStart} pageData={pageData}/>
                            )}
                           </>
                       )}
            </>)
            }
        </AnimatePresence>
        </>
    )};
            // <InsidePageTwo ref = {insidePageTwoRef} pageData={pageData}/>
