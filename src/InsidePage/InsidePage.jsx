import './InsidePage.css';
import logo from '../Img/LogoMIK.png';
import { useImperativeHandle, useRef, useEffect, forwardRef} from 'react';
import {animate} from 'motion'
import { motion } from 'framer-motion';
import {StatisticFourBlock, StatisticThreeBlock} from '../Statistic/StatisticFourBlock';

import InsidePageTwo from '../InsidePageTwo/InsidePageTwo';

const pageDataExample = {
    support_button_container :  {
        titleOne: 'Навигация',
        textOne: 'Сервис подбора релевантные программы поддержки от Правительства Москвы, институтов развития и других федеральных структур',
        titleTwo: 'Для кого:',
        textTwo: ['Предприниматели и компании, которые ищут государственные меры поддержки'],
        titleTree:'Что дает сервис?',
        dictTree: ['разобраться в многообразии доступных мер поддержки, реализуемых в Москве', 'подобрать наиболее подходящие меры поддержки', 'определить порядок действий для их получения'],
        indicator: ['300+ заявок на сервис', '300+ индивидуальных планов развития компании', '350+ заявок на релевантные программы поддержки', '160+ консультаций']
    },
    plug :  {
        titleOne: 'plug',
        textOne: 'plug',
        titleTwo: 'plug',
        textTwo: 'plug',
        titleTree:'?',
        dictTree: ['plug'],
        indicator: ['plug']
    },
    packaging_button_container : {
        titleOne: 'Ура Йопта',
        textOne: ['Сервис подбора релевантные программы поддержки от Правительства Москвы, институтов развития и других федеральных структур'],
        titleTwo: 'Для кого:',
        textTwo: 'Предприниматели и компании, которые ищут государственные меры поддержки',
        titleTree:'Что дает сервис?',
        dictTree: ['разобраться в многообразии доступных мер поддержки, реализуемых в Москве', 'подобрать наиболее подходящие меры поддержки', 'определить порядок действий для их получения'],
        indicator: ['300+ заявок на сервисsdfsdfdsffffffffffffffffffffffffffffffff', '300+ индивидуальных планов развития компании', '350+ заявок на релевантные программы поддержки', '160+ консультаций']
    }
}




const InsidePage = forwardRef(({ pageData }, ref) =>  {
    // console.log(page);
    console.log('Recived:', pageData);

    let page = null;
    if (pageData != null){
        page = pageData
    } else {
        page = pageDataExample.support_button_container
    }
    const  componentRef = useRef(null);
    const  titleContainer = useRef();
    function showAnimate(delay){
        if (componentRef.current){
            animate(componentRef.current, { opacity: 1 }, { duration: 0.5, delay : delay} )
            animate(titleContainer.current, {opacity: 1}, {delay: 2}, )

        }
    };
    function hideAnimate(delay=0){
        if (componentRef.current){
            animate(componentRef.current, { opacity: 0 }, { duration: 0.5 } )
            animate(titleContainer.current,  {opacity: 0})

        }
    };
    useImperativeHandle(ref, () => ({
        showAnimate,
        hideAnimate,
    }));

    const list = {
        // visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }

    console.log('Данные', page.indicator.length ) 

    return(
        <>           
            <motion.div 
                variants={list}
                initial="hidden" 
                id='internal_page_one'  
                className='internal_conteiner' 
                ref={componentRef}>
                <img src={logo} alt="Logo" className="logoHome"/>
                <motion.div  
                    ref = {titleContainer} 
                    className = 'title_container'>
                    <h2>{page.titleOne}</h2>
                     <p>{page.textOne}</p>
                </motion.div>    
                
                <div className='inside_main_conteiner' >
                    <div className='for_whom'>
                        <h3>{page.titleTwo}</h3>
                        {page.textTwo.length === 1 ? (
                        <p>{page.textTwo}</p>
                            ) : (
                        <ul>
                            {page.textTwo.map((item, index) => (
                            <li key={index}>{item}</li>
                            ))}
                        </ul>
                        )}
                    </div>

                    <div className='for_whom'>
                        <h3>{page.titleTree}</h3>

                        {page.dictTree.length === 1 ? (
                        <p>{page.dictTree}</p>
                            ) : (
                        <ul>
                            {page.dictTree.map((item, index) => (
                            <li key={index}>{item}</li>
                            ))}
                        </ul>
                        )}    

                    </div>
                    
                    {
                    page.indicator.length === 4 ? (
                        <StatisticFourBlock data={page.indicator} />
                    ) : page.indicator.length === 3 ? (
                        <StatisticThreeBlock data={page.indicator} />
                    ) : (
                        null 
                    )
                }

                        
                        {/* {
                            page.indicator.map((item, index) => {
                            const [key, value] = Object.entries(item)[0];
                            return (
                                <>
                                <div className='for_statistic' key={index}>
                                <div className='circle'></div>    
                                    <h3 className='indicator_size'>{key}</h3>
                                    <p>{value}</p>
                                </div>
                                </>
                            );

                        })} */}
                    
                </div>
            </motion.div>
        </>
    )
})



export default InsidePage;

