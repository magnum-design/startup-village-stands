import './HomePage.css';

import { MenuButton } from '../Buttons/Buttons.jsx';
import { useRef, useImperativeHandle, useEffect, createRef, forwardRef } from 'react';
import logo from '../Img/LogoMIK.png';
import department_logo from '../Img/Clip_path_group.png';
import { motion } from "motion/react"
import { animate } from 'motion';


const HomePageOne =  forwardRef(({pageData, buttonsIds, setPageData, setShowHome, setShowFakeNext, setShowFakeBack, fakeCounter, setShowNext}, ref) => {
    const homeTitle = useRef();
    let title = Object.keys(pageData.textForButtonBlock)[0];
    let text = pageData.textForButtonBlock[title];

    const onePageTitle = [
        'Образовательные программы по интеллектуальной собственности',
        'Кредитование под залог интеллектуальной собственности',
        'Грант на патентование изобретений и полезных моделей в Российской Федерации',
        'Грант на патентование изобретений и полезных моделей за рубежом',
        'Пилотное тестирование инноваций',
        'Пилотное тестирование инноваций',

        'Льготные займы на развитие',
        "Льготные займы на масштабирование",
        "Финансирование подготовки к IPO",
    ]
    const onMenuButtonClick = (id) => {
        setPageData(pageData[id]);
        // console.log('sjfbguiys',  pageData[id].titleOne)
        setShowHome(true);
        // TODO: show if nessasary
        if (onePageTitle.includes(pageData[id].titleOne)){
            setShowNext(false);
        } else {
            setShowNext(true);
        }
        if (pageData[id].titleOne == "Льготные займы на развитие"){
            setShowFakeNext(true);
        }
        if (pageData[id].titleOne == "Льготные займы на масштабирование"){
            setShowFakeNext(true);
        }
        if (pageData[id].titleOne == "Финансирование подготовки к IPO"){
            setShowFakeNext(false);
        }
    }

    // 'investment_button': 'Льготные займы на развитие',
    // 'direct_button': 'Льготные займы на масштабирование',
    // 'financing_button': 'Финансирование подготовки к IPO',

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
            <div id='home_container' className='home_container'>
            <img src={department_logo} alt="department_logo" className="department_logo"/>
                <img src={logo} alt="Logo" className="logoHome"/>
                    <div  id='middel_conteiner' className='middel_conteiner'>
                    <h2 ref={homeTitle} className='title_home'>Меры поддержки <br></br> и сервисы</h2>

                        <div className='container_for_button'>
                            { buttons }
                        </div>
                    </div>
            </div>
        </>
    )
})
export default HomePageOne;
