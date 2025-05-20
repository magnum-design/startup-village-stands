import logo from './logo.svg';
import React, { useEffect, useRef } from 'react';
import './App.css';
import {MenuButton} from './Buttons/Buttons'
import StartPage from './StartPage/StartPage.jsx';
import HomePageOne from './HomePage/HomePageOne.jsx';
import InsidePage from './InsidePage/InsidePage.jsx';
import Controller from './Controller.js';
import { HomeButton, NextButton, BackButton} from './Buttons/Buttons.jsx';
import InsidePageTwo from './InsidePageTwo/InsidePageTwo.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const RESET_TIME = 10; //secs


function setTimer(homePageRef, startPageRef) {
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
    let homePageRef = useRef(null);
    let startPageRef = useRef(null);

    setTimer(homePageRef, startPageRef);


    const homeButtonClick = () => {
        // console.log(homePageRef)
        homePageRef.current.showButtons()
    }



    return (
        <>
            <HomeButton onclickFunc={homeButtonClick}/>
            <NextButton/>
            <BackButton/>
            <StartPage ref={startPageRef}/>
            <HomePageOne ref={homePageRef}/>
            <InsidePage/>
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
