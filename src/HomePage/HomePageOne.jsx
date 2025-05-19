import './HomePage.css';

import { NavigatingSupportButton, InvestmentPackagingButton,
    InvestmentExpertiseButton, PathIPOProgramButton, SeedInvestmentButton, DirectInvestmentButton,
    IPOPreparationFinancingButton, GrantsButton, GlobalButton
} from '../Buttons/Buttons.jsx';
import { useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../Img/LogoMIK.png';




export default function HomePageOne(){
    const [currentPage, setCurrentPage] = useState(null);    

    // const buttonVariants = {
    //         hidden: { opacity: 0, x: -2000, scale : 0 },
    //         };   buttonVariants={buttonVariants}


    return (
        <>
            <div id='home_container' className='home_container'> 
                <img src={logo} alt="Logo" class="logoHome"/>
                <div id='middel_conteiner' className='middel_conteiner'>
                    
                    <h2 className='title_home'>Меры поддержки<br/> и сервисы</h2>
                    <div className='container_for_button'>
                        <GlobalButton id_button = {'global_id'} nameButton= {'Супер кнопка'}></GlobalButton>
                        {/* <NavigatingSupportButton/>
                        <InvestmentPackagingButton/>
                        <InvestmentExpertiseButton></InvestmentExpertiseButton>
                        <PathIPOProgramButton></PathIPOProgramButton>
                        <SeedInvestmentButton></SeedInvestmentButton>
                        <DirectInvestmentButton></DirectInvestmentButton>
                        <IPOPreparationFinancingButton></IPOPreparationFinancingButton>
                        <GrantsButton></GrantsButton> */}
                    </div>
                </div>
            </div>
        </>
    )
}