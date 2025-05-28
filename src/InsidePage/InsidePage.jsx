import './InsidePage.css';
import logo from '../Img/LogoMIK.png';
import { useImperativeHandle, useRef, useEffect, forwardRef} from 'react';
import {animate} from 'motion'
import { motion } from 'framer-motion';
import { GreenBubble } from '../GreenBubble'
import {StatisticFourBlock, StatisticThreeBlock, StatisticTwoBlock, StatisticSixBlock} from '../Statistic/StatisticFourBlock';
import department_logo from '../Img/Clip_path_group.png';
import InsidePageTwo from '../InsidePageTwo/InsidePageTwo';

const pageDataExample = {
    support_button_container :  {
        titleOne: 'Навигация',
        textOne: 'Сервис подбора релевантные программы поддержки от Правительства Москвы, институтов развития и других федеральных структур',
        titleTwo: 'Для кого:',
        textTwo: ['Предприниматели и компании, которые ищут государственные меры поддержки'],
        titleThree:'Что дает сервис?',
        dictThree: ['разобраться в многообразии доступных мер поддержки, реализуемых в Москве', 'подобрать наиболее подходящие меры поддержки', 'определить порядок действий для их получения'],
        indicator: ['300+ заявок на сервис', '300+ индивидуальных планов развития компании', '350+ заявок на релевантные программы поддержки', '160+ консультаций']
    },
    plug :  {
        titleOne: 'plug',
        textOne: 'plug',
        titleTwo: 'plug',
        textTwo: 'plug',
        titleThree:'?',
        dictThree: ['plug'],
        indicator: ['plug']
    },
    packaging_button_container : {
        titleOne: 'Ура Йопта',
        textOne: ['Сервис подбора релевантные программы поддержки от Правительства Москвы, институтов развития и других федеральных структур'],
        titleTwo: 'Для кого:',
        textTwo: 'Предприниматели и компании, которые ищут государственные меры поддержки',
        titleThree:'Что дает сервис?',
        dictThree: ['разобраться в многообразии доступных мер поддержки, реализуемых в Москве', 'подобрать наиболее подходящие меры поддержки', 'определить порядок действий для их получения'],
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
    const  titleContainer = useRef();

    return(
        <>
            <motion.div
                id='internal_page_one'
                className='internal_conteiner' >
                <img src={department_logo} alt="department_logo" className="department_logo"/>
                <img src={logo} alt="Logo" className="logoHome"/>
                <motion.div animate={{opacity:1, x:0}} initial={{opacity:0, x: -100}}
                    ref = {titleContainer}
                    className = 'title_container'>
                    <h2>{page.titleOne}</h2>
                     <p style = {{marginTop: '10px'}}>{page.textOne}</p>
                </motion.div>

                <div className='inside_main_conteiner'>
                <GreenBubble pageTitle = {page.titleTwo}   pageText = {page.textTwo} delay={0.5}/>
                <GreenBubble pageTitle = {page.titleThree} pageText= {page.dictThree} delay={1}/>
                {pageData.textTwoBlock && <GreenBubble pageTitle = {page.titleTwoBlock} pageText= {page.textTwoBlock} delay={1}/>}
                
                    { page.indicator.length === 6 ? (
                        <StatisticSixBlock data={page.indicator} />
                    ) : page.indicator.length === 4 ? (
                        <StatisticFourBlock data={page.indicator} />
                    ) : page.indicator.length === 3 ? (
                        <StatisticThreeBlock titlePage = {page.titleOne} data={page.indicator} />
                    ) : page.indicator.length === 2 ? (
                        <StatisticTwoBlock titlePage = {page.titleOne} data={page.indicator}/>
                    ) : (null)
                }

                </div>
            </motion.div>)

        </>
    )
})



export default InsidePage;
