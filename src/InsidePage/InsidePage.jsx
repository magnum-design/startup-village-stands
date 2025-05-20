import './InsidePage.css';
import logo from '../Img/LogoMIK.png';
import { useImperativeHandle, useRef, useEffect, forwardRef} from 'react';
import {animate} from 'motion'
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
        textOne: 'Сервис подбора релевантные программы поддержки от Правительства Москвы, институтов развития и других федеральных структур',
        titleTwo: 'Для кого:',
        textTwo: 'Предприниматели и компании, которые ищут государственные меры поддержки',
        titleTree:'Что дает сервис?',
        dictTree: ['разобраться в многообразии доступных мер поддержки, реализуемых в Москве', 'подобрать наиболее подходящие меры поддержки', 'определить порядок действий для их получения'],
        indicator: ['300+ заявок на сервис', '300+ индивидуальных планов развития компании', '350+ заявок на релевантные программы поддержки', '160+ консультаций']
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
    function showAnimate(delay){
        if (componentRef.current){
            animate(componentRef.current, { opacity: 1 }, { duration: 0.5, delay : delay} )
        }
    };
    function hideAnimate(delay=0){
        if (componentRef.current){
            animate(componentRef.current, { opacity: 0 }, { duration: 0.5 } )
        }
    };
    useImperativeHandle(ref, () => ({
        showAnimate,
        hideAnimate,
    }));


    return(
        <>
            <div id='internal_page_one'  className='internal_conteiner' ref={componentRef}>
                <img src={logo} alt="Logo" className="logoHome"/>
                <h2 className='title_inside'>{page.titleOne}</h2>
                <div >
                    <p className='gloabal_button_text'>{page.textOne}</p>
                </div>
                <div className='inside_main_conteiner' >
                    <div className='for_whom'>
                        <h3>{page.titleTwo}</h3>
                        {page.textTwo.map((item, index) => (
                        <p key={index}>{item}</p>
                        ))}
                    </div>

                    <div className='for_whom'>
                        <h3>{page.titleTree}</h3>
                        <ul>
                            {page.dictTree.map((item, index) => (
                            <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='for_whom'>
                        {
                            page.indicator.map((item, index) => {
                            const [key, value] = Object.entries(item)[0];
                            return (
                                <>
                                <div key={index}>
                                    <h3 className='indicator_size'>{key}</h3>
                                    <p>{value}</p>
                                </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    )
})

export default InsidePage;
