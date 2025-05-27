import logo from './logo.svg';
import './App.css';
import Controller from './Controller';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Board from './Board.jsx';
import BoardFour from './BoardFour.jsx'
import {pageDataOne, pageDataTwo, pageDataThree, pageDataFour} from './DataJSON/JsonDataOne.jsx'
import {buttonsIdsOne, buttonsIdsTwo, buttonsIdsThree, buttonsIdFour} from './DataJSON/JsonDataOne.jsx'

export default function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/board_one" element={<Board jsonData = {pageDataOne} jsonbutton = {buttonsIdsOne} />} />
          <Route path="/board_two" element={<Board  jsonData = {pageDataTwo} jsonbutton = {buttonsIdsTwo}/>} />
          <Route path="/board_three" element={<Board  jsonData = {pageDataThree} jsonbutton = {buttonsIdsThree}/>} />
          <Route path="/board_four" element={<BoardFour  jsonData = {pageDataFour} jsonbutton = {buttonsIdFour}/>} />                    
          <Route path="*" element={<Controller />} /> {/* Fallback для неизвестных маршрутов */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
