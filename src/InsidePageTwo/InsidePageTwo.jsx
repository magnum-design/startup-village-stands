import { useImperativeHandle, useRef, useEffect, forwardRef} from 'react';
import {animate} from 'motion'
import { motion } from 'framer-motion';
import { QR } from '../Statistic/StatisticFourBlock';
import qr from '../Img/qr-kod.png';

import parse from 'html-react-parser';

// import robo_ruka from '../Img/robo_ruka.png'
function ParseJSON({ htmlContent }) {
    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

function GreenBubble({flag,  pageTitle, pageText }) {
    console.log('AAA', pageTitle);
    console.log('AAA', pageText);
    console.log('AAAA', flag);

    if (!pageText){
        return (<></>)
    }
    return (
        <>
        <div className='for_whom' style={{ fontWeight: 300 }} >
            {pageTitle && flag ? (<p>{pageTitle}</p>):(<h3>{pageTitle}</h3>)}
            {/* {pageText.length === 1 ? ( <p>{pageText}</p>) : ( */}
                <ul>
                {pageText.map((item, index) => (
                    <li key={index}><ParseJSON htmlContent = {item}/></li>
                ))}
                </ul>
            {/* )} */}
        </div>
        </>
    )
}

function QRTwo ({image_url}){
    return(
        <>
            <div className="for_statistic_wrapper_two" >
                <div className='circle'></div>
                <div className='for_qr' style={{width: '100%'}}>
                    <div className='flex_row'>
                        <div className='flex_column'>
                            <p>подать заявку</p>
                            <img src={qr} alt="Logo" className="logo_gr_two"/>
                        </div>
                        <div>
                            <img src={image_url} alt="Logo" className="images_insideTwo"/>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

const pageDataExample = {
    support_button_container :  {
        title: 'Что включает инвестиционная',
        text: [
            { 'Базар': ['Глубокий анализ отрасли, оценка трендов и перспектив роста в выбранной нише'] },
            { 'Продукт': ['Выявление конкурентных преимуществ и рыночной ценности продукта'] },
            { 'Бизнес-модель': ['Проверка устойчивости и масштабируемости бизнес-модели'] },
            { 'Динамика проекта': ['Оценка этапов развития, потенциала роста и рисков'] },
            { 'Команда': ['Анализ ключевых компетенций и управленческого опыта команды'] },
            { 'Конкуренты': ['Сравнение с аналогичными решениями на рынке и формулирование УТП'] },
            { 'Финансы': ['Финансовая диагностика, расчёт unit-экономики и инвестиционных метрик'] },
            { 'Сделка': ['Формирование условий инвестирования и рекомендаций по выходу инвестора'] }
        ]

    }
}



const InsidePageTwo = forwardRef(({ pageData }, ref) =>  {
    let page = null;
    if (pageData != null){
        page = pageData
    } else {
        page = pageDataExample.support_button_container
    }
    const  componentRef = useRef(null);
    // const  titleContainer = useRef();
    function showAnimate(delay){
        if (componentRef.current){
            animate(componentRef.current, { opacity: 1 }, { duration: 0.5, delay : delay} )
            // animate(titleContainer.current, {opacity: 1}, {delay: 2}, )

        }
    };
    function hideAnimate(delay=0){
        if (componentRef.current){
            animate(componentRef.current, { opacity: 0 }, { duration: 0.5 } )
            // animate(titleContainer.current,  {opacity: 0})

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

      return(<>
                <motion.div
                    variants={list}
                    initial="hidden"
                    id='internal_page_two'
                    className='internal_conteiner'
                    ref={componentRef}>
                    <div className="inside_main_conteiner-two">
                    {page.title ? (
                        <div className='title_container_two'>
                            <h3>{page.title}</h3>
                        </div>
                    ):( <div className='title_container_two'></div>)}

                            {page.text.map((item, index) => {
                                const [key, value] = Object.entries(item)[0];
                                return (
                                    <>
                                        <GreenBubble flag = {page.title} pageTitle = {key}   pageText = {value}/>
                                        {/* <div className="for_whom">
                                            <ul>
                                                <li>
                                                <p>{key}</p>
                                                </li>
                                            </ul>
                                            <p>{value}</p>
                                        </div> */}
                                    </>
                                );
                            })}
                        {/* </div>     */}
                        {page.titleOne === 'Инвестиционная экспертиза' ?
                         (
                         <div className='contaniner_qr'>
                            <QR/>
                         </div>
                         ):(
                            <QRTwo image_url={page.urlImage}/>
                         )}

                    </div>
                </motion.div>
            </>)

})

export default InsidePageTwo;

// export default function InsidePageTwo({page}) {
//     console.log('Page Two', page);
//     if (!page){
//         page = pageData.support_button_container
//     }

//     return(
//         <>
//             <div id='internal_page_two'  className='internal_conteiner'  ref={componentRef}>
//                 <div className="inside_main_conteiner-two">
//                     <h3>{page.title}</h3>
//                     {page.text.map((item, index) => {
//                         const [key, value] = Object.entries(item)[0];
//                         return (
//                             <>
//                                 {/* <h3>{key}</h3> */}
//                                 <div className="for_whom">
//                                     <ul>
//                                         <li>
//                                         <p>{key}</p>
//                                         </li>
//                                     </ul>
//                                     <p>{value}</p>
//                                 </div>
//                             </>
//                         );
//                     })}
//                 </div>
//             </div>
//         </>
//     )
// }
