

import '../HomePage/HomePage.css';
import logo from '../Img/LogoMIK.png';

import {
    HitechEmploymentButton, 
    EntrepreneurshipPromotionButton, 
    EducationAndSelfRealizationButton
} from '../Buttons/Buttons.jsx';
import { useState } from 'react';
import { GloballButtonsFour } from '../Buttons/Buttons.jsx';
import { motion } from 'framer-motion';


export default function InsidePageFour(){
    const [showDetails, setShowDetails] = useState(false);

    const handleShowDetails = () => {
        setShowDetails(true);
    };
 
    return (
        <>
            <div id='home_container_inside_four' className='home_container'> 
                <img src={logo} alt="Logo" class="logoHome"/>
                <div id='middel_conteiner_inside_four' className='middel_conteiner'> 
                    <div className='container_for_button'>
                        <motion.div
                            initial={{ opacity: 0, x: -2000, scale : 0}}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ delay: 0.5,  duration: 0.5 }}
                        >
                            <HitechEmploymentButton  onClick={handleShowDetails}></HitechEmploymentButton>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -2000, scale : 0}}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ delay: 1,  duration: 0.5 }}
                        >
                            <EntrepreneurshipPromotionButton  onClick={handleShowDetails}></EntrepreneurshipPromotionButton>
                        </motion.div>    
                    
                    </div>
                </div> 
            </div>
        </>
    )
}