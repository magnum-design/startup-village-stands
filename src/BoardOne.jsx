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

    console.log('та', titleStart)    
    let homePageRef = useRef(null);
    let nextButtonRef = useRef(null);
    let startPageRef = useRef(null);
    let insidePageRef = useRef(null);
    let insidePageTwoRef = useRef(null);

    setInactiveTimer(homePageRef, startPageRef);

    const homeButtonClick = () => {
        // console.log(homePageRef)
        insidePageRef.current.hideAnimate(0);
        homePageRef.current.showButtons();
        nextButtonRef.current.showButtons();

    }

    const nextButtonClick = () => {
        insidePageTwoRef.current.showAnimate();
        insidePageRef.current.hideAnimate(0);
    }

    let [pageData, setPageData] = useState(null);
    return (
        <>
            <HomeButton onclickFunc={homeButtonClick}/>
            <NextButton onclickFunc={nextButtonClick}/>
            <BackButton/>
            <StartPage titleStartPage = {titleStart}  ref={startPageRef}/>
            <HomePageOne ref={homePageRef} insidePageRef={insidePageRef} setPageData={setPageData}/>
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
