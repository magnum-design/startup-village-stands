import logo from './logo.svg';
import './App.css';
import Controller from './Controller';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BoardOne from './BoardOne.jsx';
import {pageDataOne} from './DataJSON/JsonDataOne.jsx'
import {buttonsIdsOne} from './DataJSON/JsonDataOne.jsx'

export default function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/board_one" element={<BoardOne jsonData = {pageDataOne} jsonbutton = {buttonsIdsOne} />} />
          <Route path="/board_two" element={<BoardOne />} />
          <Route path="/board_three" element={<BoardOne />} />
          <Route path="/board_four" element={<BoardOne />} />
          <Route path="*" element={<Controller />} /> {/* Fallback для неизвестных маршрутов */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
