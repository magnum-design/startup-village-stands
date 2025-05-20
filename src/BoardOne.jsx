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
    const buttonRefs = useRef([]);
    useEffect(()=>{
        hideButtons();
    })
    const hideButtons = () => {
        for (let i=0; i< buttonRefs.current.length; i++){
            const buttonRef = buttonRefs.current[i].current;
            if (buttonRef) {
                buttonRef.hideAnimate(i/10);
            } else {
                console.log('No current ref for button.');
            }
        };
    };

    const showButtons = () => {
        for (let i=0; i< buttonRefs.current.length; i++){
            const buttonRef = buttonRefs.current[i].current;
            if (buttonRef) {
                buttonRef.showAnimate(i/10);
            } else {
                console.log('No current ref for button.');
            }
        };
    };

    let buttons = []
    for (let i=0; i<3; i++){
        const buttonRef = React.createRef();
        buttonRefs.current.push(buttonRef);
        buttons.push(<MenuButton
            onclickFunc={hideButtons}
            key={i}
            id_button={'global_id'}
            nameButton= {'Супер кнопка'}
            ref={buttonRef}/>)
    }

    return (
        <>
        { buttons }
        <button onClick={showButtons}> Show </button>
        <button onClick={hideButtons}> Hide </button>
        </>
    );
}

// <HomeButton></HomeButton>
// <NextButton></NextButton>
// <BackButton></BackButton>
// <StartPage></StartPage>
// <HomePageOne></HomePageOne>
// <InsidePage></InsidePage>
// <InsidePageTwo></InsidePageTwo>
// <Controller></Controller>
