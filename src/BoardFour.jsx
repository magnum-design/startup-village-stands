
import './App.css';
import StartPage from './StartPage/StartPage.jsx';

import InsidePage from './InsidePage/InsidePage.jsx';
import Controller from './Controller.js';
import { HomeButton, NextButton, BackButton} from './Buttons/Buttons.jsx';
import InsidePageTwo from './InsidePageTwo/InsidePageTwo.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePageFour from './HomePage/HomePageFour.jsx';

export default function BoardFour() {

  return (
    <>
      <HomeButton></HomeButton>
      <NextButton></NextButton>
      <BackButton></BackButton>
      <StartPage></StartPage>  
      <HomePageFour></HomePageFour>
      <InsidePage></InsidePage>
      <InsidePageTwo></InsidePageTwo>

      <Controller></Controller>
    </>
  );
}
