import './HomePage.css';

import { MenuButton } from '../Buttons/Buttons.jsx';
import { useRef, useImperativeHandle, useEffect, createRef, forwardRef } from 'react';
import logo from '../Img/LogoMIK.png';
import department_logo from '../Img/Clip_path_group.png';
import { motion } from "motion/react"
import { animate } from 'motion';


const HomePageOne =  forwardRef(({pageData, buttonsIds, setPageData, insidePageRef, showNavigation, hideNavigation}, ref) => {
    const buttonRefs = useRef([]);
    const homeTitle = useRef();

    const hideButtons = () => {
        console.log(homeTitle.current)
        animate(homeTitle.current, {opacity: 0})
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
        animate(homeTitle.current, {opacity: 1})

        for (let i=0; i< buttonRefs.current.length; i++){
            const buttonRef = buttonRefs.current[i].current;
            if (buttonRef) {
                buttonRef.showAnimate(i/10);
            } else {
                console.log('No current ref for button.');
            }
            console.log(buttonRefs)
        };
    };

    useImperativeHandle(ref, () => ({
        showButtons,
        hideButtons,

    }));


    const onMenuButtonClick = (id) => {
        showNavigation()
        setPageData(pageData[id]);
        insidePageRef.current.showAnimate()
        hideButtons()
    }
    buttonRefs.current = []

    let buttons = []
    let counter = 0;
    Object.entries(buttonsIds).forEach(([id, text]) => {
        const buttonRef = createRef();
        buttonRefs.current.push(buttonRef);
        buttons.push(<MenuButton
            onclickFunc={() => {onMenuButtonClick(id)} }
            key={ id }
            id_button={ id }
            nameButton= { text }
            ref={buttonRef}/>)
        counter+=1;
    });

    return (
        <>
            <div id='home_container' className='home_container'>
            <img src={department_logo} alt="department_logo" className="department_logo"/>
                <img src={logo} alt="Logo" className="logoHome"/>
                    <div  id='middel_conteiner' className='middel_conteiner'>
                        <h2 ref={homeTitle} className='title_home'>Меры поддержки<br/> и сервисы</h2>
                        <div className='container_for_button'>
                            { buttons }
                        </div>
                    </div>
            </div>
        </>
    )
})
export default HomePageOne;
