import './HomePage.css';

import { MenuButton } from '../Buttons/Buttons.jsx';
import { useRef, useImperativeHandle, useEffect, createRef, forwardRef } from 'react';
import logo from '../Img/four_logo.png';
import department_logo from '../Img/Clip_path_group.png';
import { motion } from "motion/react"
import { animate } from 'motion';


const HomePageOne =  forwardRef(({pageData, buttonsIds, setPageData, setShowHome, setShowNext}, ref) => {
    const homeTitle = useRef();
    
    let title = Object.keys(pageData.textForButtonBlock)[0];
    let text = pageData.textForButtonBlock[title];


    const onMenuButtonClick = (id) => {
        setPageData(pageData[id]);
        setShowHome(true);
        // TODO: show if nessasary
        setShowNext(true);
    }

    let counter = 0;
    let buttons = [];
    Object.entries(buttonsIds).forEach(([id, text]) => {
        buttons.push(<MenuButton
            onclickFunc={() => {onMenuButtonClick(id)} }
            delay = { counter/2 }
            key={ id }
            id_button={ id }
            nameButton= { text } />)
        counter+=1;
    });

    return (
        <>
            <div id='home_container' className='home_container_four'>
            <img src={department_logo} alt="department_logo" className="department_logo"/>
                <img src={logo} alt="Logo" className="logoHome"/>
                    <div  id='middel_conteiner' className='middel_conteiner'>
                        <h2 ref={homeTitle} className='title_home'>{title}</h2>
                        {text && <p className='title_home'>{text}</p>}
                        <div className='container_for_button'>
                            { buttons }
                        </div>
                    </div>
            </div>
        </>
    )
})
export default HomePageOne;
