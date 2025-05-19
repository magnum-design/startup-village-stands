import StartPage from './StartPage/StartPage.jsx';
import HomePageTwo from './HomePage/HomePageTwo.jsx';
import InsidePage from './InsidePage/InsidePage.jsx';
import Controller from './Controller.js';
import { HomeButton, NextButton, BackButton} from './Buttons/Buttons.jsx';
import InsidePageTwo from './InsidePageTwo/InsidePageTwo.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function BoardTwo() {

  return (
    <>
      <HomeButton></HomeButton>
      <NextButton></NextButton>
      <BackButton></BackButton>
      <StartPage></StartPage>  
      <HomePageTwo></HomePageTwo>    
      <InsidePage></InsidePage>
      <InsidePageTwo></InsidePageTwo>

      <Controller></Controller>
    </>
  );
}
