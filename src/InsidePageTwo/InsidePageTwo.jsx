import { useImperativeHandle, useRef, useEffect, forwardRef} from 'react';
import {animate} from 'motion'
import { motion } from 'framer-motion';
import { QR } from '../Statistic/StatisticFourBlock';
import qr from '../Img/qr-kod.png';
import { GreenBubble } from '../GreenBubble';
import department_logo from '../Img/Clip_path_group.png';
import logo from '../Img/LogoMIK.png';

function QRTwo ({image_url, delay}){
    return(
        <>
            <motion.div initial={{opacity : 0, y:-100}} animate={{opacity : 1, y:0, transition:{delay:delay}}} className="for_statistic_wrapper_two">
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
            </motion.div>
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
      return(<>
                <motion.div
                    initial="hidden"
                    id='internal_page_two'
                    className='internal_conteiner'>
                    <img src={department_logo} alt="department_logo" className="department_logo"/>
                    <img src={logo} alt="Logo" className="logoHome"/>
                    <div className="inside_main_conteiner-two">
                    {page.title ? (
                        <div className='title_container_two'>
                            <h5>{page.title}</h5>
                        </div>
                    ):( <div className='title_container_two'></div>)}

                            {page.text.map((item, index) => {
                                const [key, value] = Object.entries(item)[0];
                                return (
                                    <>
                                        <GreenBubble flag = {page.title} pageTitle = {key} delay={index/2}  pageText = {value}/>
                                        
                                        
                                    </>
                                );
                            })}
                     {page.titleTwoBlock && 
                        <div className='title_container_two not_margin_top'>
                            <h5>{page.titleTwoBlock}</h5>
                        </div>
                    }      

                            {pageData.titleTwoBlock && pageData.textTwoBlock &&  
                                pageData.textTwoBlock.map((item, index) => {
                                    const [key, value] = Object.entries(item)[0];
                                    return (
                                        <GreenBubble 
                                            flag={pageData.titleTwoBlock} 
                                            pageTitle={key} 
                                            delay={index / 2}  
                                            pageText={value} 
                                        />
                                    );
                                })
                            }                    
                    {page.title === 'Что дают межотраслевые кластеры?' && 
                    <motion.div 
                        initial={{opacity : 0, x:-100}} 
                        animate={{opacity : 1, x:0, transition:{delay:1.5}}} 
                        className='otraslevie_napravlenia'>
                    </motion.div>}
                            
                        {page.titleOne === 'Инвестиционная экспертиза' ?
                         (
                         <div className='contaniner_qr'>
                            <QR delay={2}/>
                         </div>
                         ):(
                            <QRTwo delay={2} image_url={page.urlImage}/>
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
