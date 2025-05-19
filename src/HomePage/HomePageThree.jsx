import './HomePage.css';
import {
    PilotTestingProgramButton,
    IntersectoralClustersButton
  } from '../Buttons/Buttons.jsx';
import { useState } from 'react';


export default function HomePageThree(){
    const [currentPage, setCurrentPage] = useState(null);    

    const buttonVariants = {
            hidden: { opacity: 0, x: -2000, scale : 0 },
            };

    return (
        <>
            <div id='home_container_three' className='home_container'> 
                <div id='middel_conteiner_three' className='middel_conteiner'>
                   <PilotTestingProgramButton buttonVariants={buttonVariants}></PilotTestingProgramButton>
                   <IntersectoralClustersButton buttonVariants={buttonVariants}></IntersectoralClustersButton>
                </div>
                
            </div>
        </>
    )
}