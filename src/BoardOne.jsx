import logo from './logo.svg';
import './App.css';
import StartPage from './StartPage/StartPage.jsx';
import HomePageOne from './HomePage/HomePageOne.jsx';
import InsidePage from './InsidePage/InsidePage.jsx';
import Controller from './Controller.js';
import { HomeButton, NextButton, BackButton} from './Buttons/Buttons.jsx';
import InsidePageTwo from './InsidePageTwo/InsidePageTwo.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function BoardOne() {

  return (
    <>
      <HomeButton></HomeButton>
      <NextButton></NextButton>
      <BackButton></BackButton>
      <StartPage></StartPage>  
      <HomePageOne></HomePageOne>    
      <InsidePage></InsidePage>
      <InsidePageTwo></InsidePageTwo>

      <Controller></Controller>
    </>
  );
}
