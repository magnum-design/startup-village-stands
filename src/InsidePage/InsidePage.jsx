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

const InsidePage = forwardRef(({mainTitle, pageData }, ref) =>  {

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
                <div><p className='main_title'>{mainTitle}</p></div>
                <motion.div animate={{opacity:1, x:0}} initial={{opacity:0, x: -100}}
                    ref = {titleContainer}
                    className = 'title_container'>
                    <h2>{page.titleOne}</h2>
                     <p style = {{marginTop: '10px'}}>{page.textOne}</p>
                </motion.div>

                <div className='inside_main_conteiner'>
                <GreenBubble key={page.titleOne  + '0'} pageTitle = {page.titleTwo}   pageText = {page.textTwo} delay={0.5}/>
                <GreenBubble key={page.titleOne  + '1'} pageTitle = {page.titleThree} pageText= {page.dictThree} delay={1}/>
                {pageData.textTwoBlock &&
                (pageData.titleTwoBlock === "Что включает программа?" ||
                pageData.titleTwoBlock === "Возможности программы?")
                && <GreenBubble key={page.titleOne  + '2'} pageTitle = {page.titleTwoBlock} pageText= {page.textTwoBlock} delay={1.5}/>}

                    { page.indicator.length === 6 ? (
                        <StatisticSixBlock key={page.titleOne  + '3'} data={page.indicator} />
                    ) : page.indicator.length === 4 ? (
                        <StatisticFourBlock key={page.titleOne  + '4'} data={page.indicator} />
                    ) : page.indicator.length === 3 ? (
                        <StatisticThreeBlock key={page.titleOne  + '5'} titlePage = {page.titleOne} data={page.indicator} />
                    ) : page.indicator.length === 2 ? (
                        <StatisticTwoBlock key={page.titleOne  + '6'} titlePage = {page.titleOne} data={page.indicator}/>
                    ) : (null)
                }

                </div>
            </motion.div>)

        </>
    )
})



export default InsidePage;
