import './HomePage.css';
import logo from '../Img/LogoMIK.png';

import {
    HitechEmploymentButton, 
    EntrepreneurshipPromotionButton, 
    EducationAndSelfRealizationButton
} from '../Buttons/Buttons.jsx';
import { useRef, useState } from 'react';
import { GloballButtonsFour } from '../Buttons/Buttons.jsx';
import { motion } from 'framer-motion'
import { animate } from 'framer-motion';
import InsidePageFour from '../InsidePage/InsidePageFour.jsx';


const fourButton  = [
    {employment_button: "ТРУДОУСТРОЙСТВО В ВЫСОКОТЕХ"},
    {entrepreneurship_button: " ПОПУЛЯРИЗАЦИЯ ПРЕДПРИНИМАТЕЛЬСТВА"},
    {education_button: "ОБУЧЕНИЕ И САМОРЕАЛИЗАЦИЯ"}
]


export default function HomePageFour(){
    const [activeComponent, setActiveComponent] = useState('home');
    const homePage = useRef();

    const handleShowDetails = (component) => {
        setActiveComponent(component); 
    };

    if (activeComponent === 'hitech') {
        // animate(homePage.current, {opacity: 0});
        return <InsidePageFour />;     
    }

    return (
        <>
            <div id='home_container_four' className='home_container'> 
                <img src={logo} alt="Logo" class="logoHome"/>
                <div id='middel_conteiner_four' className='middel_conteiner'>
                    
                    <div className='container_for_button'>
                  {/* {fourButton.forEach(element => {
                        const id = Object.keys(element)[0]
                        const name = element[id]
                        
                        return <GloballButtonsFour id_button={id} nameButton={name}></GloballButtonsFour>

                    })}; */}
                        <motion.div
                            initial={{ opacity: 0, x: -2000, scale : 0}}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ delay: 0.5,  duration: 0.5 }}
                        >
                            <HitechEmploymentButton  onClick={() => handleShowDetails('hitech')}></HitechEmploymentButton>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -2000, scale : 0}}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ delay: 1,  duration: 0.5 }}
                        >
                            <EntrepreneurshipPromotionButton  onClick={handleShowDetails}></EntrepreneurshipPromotionButton>
                        </motion.div>    
                        <motion.div
                            initial={{ opacity: 0, x: -2000, scale : 0}}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ delay: 1.5,  duration: 0.5 }}
                        >
                            <EducationAndSelfRealizationButton  onClick={handleShowDetails}></EducationAndSelfRealizationButton>
                        </motion.div>
                    </div>
                </div> 
            </div>
        </>
    )
}