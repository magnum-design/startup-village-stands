import './InsidePage.css';
import logo from '../Img/LogoMIK.png';

const pageData = {
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




export default function InsidePage({page}) {
    // console.log(page);
    if (!page){
        page = pageData.support_button_container
    }

    return(
        <>
            <div id='internal_page_one'  className='internal_conteiner'>
                <img src={logo} alt="Logo" class="logoHome"/>
                <h2 className='title_home'>{page.titleOne}</h2>
                <p className='text'>{page.textOne}</p>
                <div className='for_whom'>
                    <h3>{page.titleTwo}</h3>    
                    {page.textTwo.map((item, index) => (
                     <p key={index}>{item}</p>                        
                     ))}
                </div>
                
               
                <h2>{page.titleTree}</h2>    
                <ul>
                    {page.dictTree.map((item, index) => (
                     <li key={index}>{item}</li>
                    ))}
                </ul>
                {page.indicator.map((item, index) => (
                     <p key={index}>{item}</p>                        
                     ))}
            </div>    
        </>
    )
}
