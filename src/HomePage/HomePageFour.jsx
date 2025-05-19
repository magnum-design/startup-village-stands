import './HomePage.css';
import {
    HitechEmploymentButton, 
    EntrepreneurshipPromotionButton, 
    EducationAndSelfRealizationButton
} from '../Buttons/Buttons.jsx';
import { useState } from 'react';


export default function HomePageFour(){
    const [currentPage, setCurrentPage] = useState(null);    

    const buttonVariants = {
            hidden: { opacity: 0, x: -2000, scale : 0 },
            };

    return (
        <>
            <div id='home_container_four' className='home_container'> 
                <div id='middel_conteiner_four' className='middel_conteiner'>
                   <HitechEmploymentButton></HitechEmploymentButton>
                   <EntrepreneurshipPromotionButton></EntrepreneurshipPromotionButton>
                   <EducationAndSelfRealizationButton></EducationAndSelfRealizationButton>
                </div>
                
            </div>
        </>
    )
}