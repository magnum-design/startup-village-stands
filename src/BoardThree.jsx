
import './App.css';
import StartPage from './StartPage/StartPage.jsx';
import HomePageThree from './HomePage/HomePageThree.jsx';
import InsidePage from './InsidePage/InsidePage.jsx';
import Controller from './Controller.js';
import { HomeButton, NextButton, BackButton} from './Buttons/Buttons.jsx';
import InsidePageTwo from './InsidePageTwo/InsidePageTwo.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function BoardThree() {

  return (
    <>
      <HomeButton></HomeButton>
      <NextButton></NextButton>
      <BackButton></BackButton>
      <StartPage></StartPage>  
      <HomePageThree></HomePageThree>    
      <InsidePage></InsidePage>
      <InsidePageTwo></InsidePageTwo>

      <Controller></Controller>
    </>
  );
}
