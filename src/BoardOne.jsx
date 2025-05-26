import logo from './logo.svg';
import React, { useEffect, useRef, useState} from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import {MenuButton} from './Buttons/Buttons'
import StartPage from './StartPage/StartPage.jsx';
import HomePageOne from './HomePage/HomePageOne.jsx';
import InsidePage from './InsidePage/InsidePage.jsx';
import Controller from './Controller.js';
import { HomeButton, NextButton, BackButton} from './Buttons/Buttons.jsx';
import InsidePageTwo from './InsidePageTwo/InsidePageTwo.jsx';
import { animate } from 'motion'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const RESET_TIME = 520; //secs


function setInactiveTimer(homePageRef, startPageRef) {
    let lastClickTimestamp = null;
    const time_to_restart = RESET_TIME;

    document.body.addEventListener("click", ()=> {lastClickTimestamp = Date.now();});

    const intervalId = setInterval(()=>{
        if (lastClickTimestamp) {
            const currentTime = Date.now();
            const timeDifference = currentTime - lastClickTimestamp;

            if (timeDifference > time_to_restart * 1000) {
                lastClickTimestamp = null;
                startPageRef.current.showAnimate(0);
                homePageRef.current.showButtons()
            }
        }
    }, 1000);
}


export default function BoardOne() {
    const path = useLocation();
    const locationPath = path.pathname.split('/')[1];
    console.log('lop', locationPath);
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


    let homePageRef = useRef(null);
    let nextButtonRef = useRef(null);
    let homeButtonRef = useRef(null);
    let startPageRef = useRef(null);
    let insidePageRef = useRef(null);
    let insidePageTwoRef = useRef(null);

    setInactiveTimer(homePageRef, startPageRef);

    const showNavigation = () => {
        animate(nextButtonRef.current, { opacity: 1, y:0}, { duration: 0.5, delay : 0} )
        animate(homeButtonRef.current, { opacity: 1, y:0}, { duration: 0.5, delay : 0} )
        homeButtonRef.current.style.pointerEvents = 'auto';
        nextButtonRef.current.style.pointerEvents = 'auto';
    }
    const hideNavigation = () => {
        animate(nextButtonRef.current, { opacity: 0, y:0}, { duration: 0.5, delay : 0} )
        animate(homeButtonRef.current, { opacity: 0, y:0}, { duration: 0.5, delay : 0} )
        homeButtonRef.current.style.pointerEvents = 'none';
        nextButtonRef.current.style.pointerEvents = 'none';
    }

    const homeButtonClick = () => {
        insidePageRef.current.hideAnimate(0);
        insidePageTwoRef.current.hideAnimate();
        homePageRef.current.showButtons();
        hideNavigation();
    }

    const nextButtonClick = () => {
        insidePageTwoRef.current.showAnimate();
        insidePageRef.current.hideAnimate(0);
    }



    let [pageData, setPageData] = useState(null);
    return (
        <>
            <NextButton ref={nextButtonRef} onclickFunc={nextButtonClick}/>
            <HomeButton ref={homeButtonRef} onclickFunc={homeButtonClick}/>
            <BackButton/>
            <StartPage titleStartPage = {titleStart}  ref={startPageRef}/>
            <HomePageOne ref={homePageRef} showNavigation={showNavigation} hideNavigation={hideNavigation} insidePageRef={insidePageRef} setPageData={setPageData}/>
            <InsidePage  ref={insidePageRef} pageData={pageData}/>
            <InsidePageTwo ref = {insidePageTwoRef} pageData={pageData}/>
        </>
    );
}
            // <InsidePageTwo></InsidePageTwo>
            // <Controller></Controller>
{/* <NavigatingSupportButton/>
                    <InvestmentPackagingButton/>
                    <InvestmentExpertiseButton></InvestmentExpertiseButton>
                    <PathIPOProgramButton></PathIPOProgramButton>
                    <SeedInvestmentButton></SeedInvestmentButton>
                    <DirectInvestmentButton></DirectInvestmentButton>
                    <IPOPreparationFinancingButton></IPOPreparationFinancingButton>
                    <GrantsButton></GrantsButton> */}
