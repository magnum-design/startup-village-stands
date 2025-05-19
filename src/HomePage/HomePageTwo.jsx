import './HomePage.css';
import {
    TechnoMarketButton,
    EducationProgramsButton,
    OnlineServiceRIDButton,
    IPPackagingButton,
    IPSecuredLendingButton,
    RussianPatentGrantButton,
    ForeignPatentGrantButton
  } from '../Buttons/Buttons.jsx';
import { useState } from 'react';


export default function HomePageTwo(){
    const [currentPage, setCurrentPage] = useState(null);    

    const buttonVariants = {
            hidden: { opacity: 0, x: -2000, scale : 0 },
            };

    return (
        <>
            <div id='home_container_two' className='home_container'> 
                <div id='middel_conteiner_two' className='middel_conteiner'>
                    <TechnoMarketButton 
                        buttonVariants={buttonVariants}
                    />

                    <EducationProgramsButton 
                        buttonVariants={buttonVariants}
                    />

                    <OnlineServiceRIDButton/>

                    <IPPackagingButton 
                       
                    />

                    <IPSecuredLendingButton 
                       
                    />

                    <RussianPatentGrantButton 
                        
                    />

                    <ForeignPatentGrantButton 
                        
                    />
                </div>
                
            </div>
        </>
    )
}