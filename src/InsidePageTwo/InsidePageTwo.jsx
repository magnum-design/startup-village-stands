

const pageData = {
    support_button_container :  {
        title: 'Что включает инвестиционная',
        text: [
            {'Рынок':'Оценка российского и глобального объёма рынка продукта, сегментов и прогнозов роста Продукт'},
            {'Продукт':'Определение основных преимуществ продукта, актуальности, востребованности на рынке'},
            {'Бизнес-модель':'Оценка бизнес-модели проекта, её реализуемости и эффективности'},
            {'Динамика развития проекта':'Анализ истории развития проекта и его целей, оценка рисков и достигнутых результатов'}, 
            {'Команда':'Анализ компетенций и опыта ключевых членов команды'}, 
            {'Конкуренты':'Обзор конкурентного ландшафта продукта'}, 
            {'Финансы':'Оценка финансовых показателей проекта'}, 
            {'Сделка':'Оценка инвестиционной привлекательности проекта и возможностей последующего выхода из него'}
         ],
       
    }
}


export default function InsidePageTwo({page}) {
    console.log('Page Two', page);
    if (!page){
        page = pageData.support_button_container
    }

    return(
        <>
            <div id='internal_page_two'  className='internal_conteiner'>
                <div className="inside_main_conteiner-two">
                    <h3>{page.title}</h3>
                    {page.text.map((item, index) => {
                        const [key, value] = Object.entries(item)[0];
                        return (
                            <>
                                {/* <h3>{key}</h3> */}
                                <div className="for_whom">
                                    <ul>
                                        <li>
                                        <p>{key}</p>
                                        </li>
                                    </ul>
                                    <p>{value}</p>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>    
        </>
    )
}