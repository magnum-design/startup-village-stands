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



export default function BoardOne() {
    let homePageRef = useRef(null);

    const f = () => {
        // console.log(homePageRef)
        homePageRef.current.showButtons()
    }



    return (
        <>
            <HomeButton onclickFunc={f}/>
            <NextButton></NextButton>
            <BackButton></BackButton>
            <StartPage></StartPage>
            <HomePageOne ref={homePageRef}></HomePageOne>
            <InsidePage></InsidePage>

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
