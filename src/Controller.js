import { useEffect, useState } from "react";
import { motion, useAnimate } from "framer-motion";
import InsidePage from "./InsidePage/InsidePage";
import InsidePageTwo from "./InsidePageTwo/InsidePageTwo";
import { useLocation } from "react-router-dom";
import HomePageFour from "./HomePage/HomePageFour";


export default function Controller() {

  const location = useLocation();
  // const navigate = useNavigate();
  const [scope, animate] = useAnimate();
  const [currentPage, setCurrentPage] = useState(null);
  const [activePage, setActivePage] = useState("home");



  const pageData = {
    support_button: {
      titleOne: "Навигация по мерам поддержки",
      textOne:
        "Сервис подбора релевантные программы поддержки от Правительства Москвы, институтов развития и других федеральных структур",
      titleTwo: "Для кого:",
      textTwo: ["Предприниматели и компании, которые ищут государственные меры поддержки",
      ],
      titleTree: "Что дает сервис?",
      dictTree: [
        "разобраться в многообразии доступных мер поддержки, реализуемых в Москве",
        "подобрать наиболее подходящие меры поддержки",
        "определить порядок действий для их получения",
      ],
      indicator: [
        {"300+": "заявок на сервис"},
        {"300+": "индивидуальных планов развития компании"},
        {"350+": "заявок на релевантные программы поддержки"},
        {"160+": "консультаций"},
      ],
      title: 'Что включает инвестиционная экспертиза?',
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
    },

    packaging_button: {
      titleOne: "Инвестиционная упаковка",
      textOne: "Программа по созданию инвестиционных материалов для презентации инвесторам и привлечения финансирования",
      titleTwo: "Для кого:",
      textTwo: [
        "Для стартапов и предпринимателей, которые хотят сформировать инвестиционное предложение и привлечь инвестиции в свой проект",
        "Для тех, кто хочет научиться эффективно представлять свой проект инвестору"
      ],
      titleTree: "Что помогает решить программа?",
      dictTree: [
        "Помогает качественно представить инновационный проект и повысить шансы на финансирование",
      ],
      indicator: [
        "1200+ заявок подано на участие в программе",
        "290 млн руб. сумма привлеченного финансирования",
        "280+ проектов разработали инвестиционные материалы",
        "20,2+ млн руб. сэкономили участники на инвестиционной упаковке"],
      title: 'Что включает программа?',
      text: [
          {'Полезные материалы':'Пошаговые алгоритмы, шаблоны, инструменты и знания для разработки инвестиционной презентации, финансовой модели и питч-презентации'},
          {'Профессиональная помощь':'Консультация с опытными специалистами для улучшения материалов для инвесторов'},
          {'Питч-сессии':' Возможность выступление на питч-сессии перед инвесторами'},
      ]
    },

    techno_market_button: {
      titleOne: "Платформа инвестиционного роста",
      textOne: "Комплексный сервис для подготовки проектов к выходу на рынок капитала и привлечению инвестиций.",
      titleTwo: "Кому подойдёт:",
      textTwo: "Стартапам, малому бизнесу и технологическим компаниям, планирующим масштабирование.",
      titleTree: "Что вы получите:",
      dictTree: [
        "Презентационные и аналитические материалы для инвесторов",
        "Стратегию выхода на инвестиционный рынок",
        "Юридическое и финансовое сопровождение сделок"
      ],
      indicator: [
        "Более 100 реализованных проектов",
        "Привлечено свыше 1 млрд ₽ инвестиций"
      ],
      title: "Оценка инвестиционной готовности",
      text: [
        { 'Базар': 'Глубокий анализ отрасли, оценка трендов и перспектив роста в выбранной нише' },
        { 'Продукт': 'Выявление конкурентных преимуществ и рыночной ценности продукта' },
        { 'Бизнес-модель': 'Проверка устойчивости и масштабируемости бизнес-модели' },
        { 'Динамика проекта': 'Оценка этапов развития, потенциала роста и рисков' },
        { 'Команда': 'Анализ ключевых компетенций и управленческого опыта команды' },
        { 'Конкуренты': 'Сравнение с аналогичными решениями на рынке и формулирование УТП' },
        { 'Финансы': 'Финансовая диагностика, расчёт unit-экономики и инвестиционных метрик' },
        { 'Сделка': 'Формирование условий инвестирования и рекомендаций по выходу инвестора' }
      ]
    },
    pilot_testing_program_button: {
      titleOne: "Программа пилотного тестирования",
      textOne: "Программа для тестирования новейших решений в реальных условиях на городских и коммерческих площадках",
      titleTwo: "Для кого программа?",
      textTwo: "•     Технологические компании, представляющие новые продукты и сервисы •     Городские и коммерческие заказчики, заинтересованные в инновациях",
      titleTree: "Что дает программа?",
      dictTree: [
        "Тестирование продукта перед внедрением",
        "Подтверждение спроса на инновационное решение",
      ],
      indicator: [
        "Более 100 реализованных проектов",
        "Привлечено свыше 1 млрд ₽ инвестиций"
      ],
    }

  };


  const handleButtonClick = (pageType) => {
    setCurrentPage(pageData[pageType]);
    setActivePage("inside");
  };


  // const handleButtonStart = () => {
  //   setActivatHome(true);
  // };


  useEffect(() => {

    const locationPath = location.pathname.split('/')[1]


    let button_next = 'support_button';
    let is_support = false;
    let is_packaging = false;
    let is_expertise = false;
    let is_program = false;
    let is_investment = false;
    let is_direct = false;
    let is_financing = false;
    let is_grants = false;

    let is_techno_market = false;

    const next_button = document.getElementById("next_button");
    const back_button = document.getElementById("back_button")
    const internal_page_two = document.getElementById('internal_page_two');

    const start_container = document.getElementById("start_container");
    const home_button = document.getElementById("home_button");

    // animate(home_button, {scale: 0})
    const internal_page_one = document.getElementById("internal_page_one"); 


    const home_container = document.getElementById("home_container");
    const middel_conteiner = document.getElementById("middel_conteiner");
    const support_button = document.getElementById("support_button");

    const packaging_button = document.getElementById("packaging_button");

    const expertise_button = document.getElementById("expertise_button");
    const program_button = document.getElementById("program_button");
    const investment_button = document.getElementById("investment_button");
    const direct_button = document.getElementById("direct_button");
    const financing_button = document.getElementById("financing_button");
    const grants_button = document.getElementById("grants_button");




    const home_container_two = document.getElementById("home_container_two");
    const middel_conteiner_two = document.getElementById("middel_conteiner_two");
    const techno_market_button = document.getElementById("techno_market_button");
    const education_programs_button = document.getElementById("education_programs_button");
    const online_service_rid_button = document.getElementById("online_service_rid_button");
    const ip_packaging_button = document.getElementById("ip_packaging_button");
    const ip_secured_lending_button = document.getElementById("ip_secured_lending_button");
    const russian_patent_grant_button = document.getElementById("russian_patent_grant_button");
    const foreign_patent_grant_button = document.getElementById("foreign_patent_grant_button");



    const home_container_three = document.getElementById("home_container_three");
    const middel_conteiner_three = document.getElementById("middel_conteiner_three");
    const pilot_testing_program_button = document.getElementById("pilot_testing_program_button");
    const intersectoral_clusters_button = document.getElementById("intersectoral_clusters_button");


    const home_container_four = document.getElementById("home_container_four");
    const middel_conteiner_four = document.getElementById("middel_conteiner_four");
    const hitech_employment_button = document.getElementById("hitech_employment_button");
    const entrepreneurship_promotion_button = document.getElementById("entrepreneurship_promotion_button");
    const education_self_realization_button = document.getElementById("education_self_realization_button");




    //General buttons

    function home_general(){

      setCurrentPage(null);
      // animate(
      //   home_button,
      //   {
      //     scale: 0.9,
      //     y: 2
      //   },
      //   {
      //     type: "spring",
      //     stiffness: 400,
      //     damping: 17,
      //     // restDelta: 0.001,
      //     onComplete: () => {
      //       home_button.style.scale = 0;
      //     }
      //   }
      // );
      animate(internal_page_one, {  scale: 0 });
      animate(internal_page_two, {  scale: 0 })
      animate(next_button, {scale: 0});
      animate(back_button, {scale: 0});
      animate(home_button, {scale: 0});

    }

    function home_button_general(name_buttons) {
      name_buttons.forEach(name_button => {
        animate(name_button, {
          opacity: 1,
          x: 0,
          scale: 1,
          transition: { delay: 2, duration: 5 },
        });
      });
    }

    if (home_button) {
      home_button.onclick = () => {
        if (locationPath == 'board_one') {
          home_general();
          animate(home_container, { opacity: 1, scale: 1 });
          animate(middel_conteiner, { scale: 1 });
          let buttons = [support_button, packaging_button, expertise_button, program_button,
            investment_button, direct_button, financing_button, grants_button
          ];
          home_button_general(buttons);
          }


        if (locationPath === 'board_two') {
          home_general();
          animate(home_container_two, { opacity: 1, scale: 1 });
          animate(middel_conteiner_two, { scale: 1 });
          let buttons = [techno_market_button, education_programs_button, online_service_rid_button,
            ip_packaging_button, ip_secured_lending_button, russian_patent_grant_button, foreign_patent_grant_button
          ];
          home_button_general(buttons);
        }
    
        if (locationPath === 'board_three') {
          setCurrentPage(null); 
          animate(home_button, { scale: 0 });
          animate(home_container_three, { opacity: 1, scale: 1 });
          animate(middel_conteiner_three, { scale: 1 });
          animate(internal_page_one, {  scale: 0 });
          animate(internal_page_two, {  scale: 0 })
          animate(pilot_testing_program_button, {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: { delay: 2, duration: 5 },
          });
          animate(intersectoral_clusters_button, {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: { delay: 5, duration: 8 },
          });
          animate(next_button, {scale: 0});  
          animate(back_button, {scale: 0})
        }

        if (locationPath === 'board_four') {
          // handleButtonStart()
          // console.log(activeHome)
          start_general();
          // animate(home_container_four, { opacity: 1 });
          // animate(middel_conteiner_four, { scale: 1 });
          // let buttons = [
          //   hitech_employment_button,
          //   entrepreneurship_promotion_button,
          //   education_self_realization_button
          // ];
          // start_button_general(buttons);
        }
  


      };
    }
    

    function start_general() {
      setCurrentPage(null);
      animate(start_container, { scale: 0 });
      animate(internal_page_one, { opacity: 0, scale: 0 });
      animate(internal_page_two, { opacity: 0,  scale: 0 });

    }

    function start_button_general(button_names) {
      button_names.forEach((name_button, index) => {
        animate(name_button, {
          opacity: 1,
          x: 0,
          scale: 1,
          transition: { delay: 2 + index * 2, duration: 0.5 },
        });
      });
    }


    function next_button_general(){
      setActivePage("insideTwo");
      animate(internal_page_one, { opacity: 0 });
      animate(internal_page_two, {opacity: 1})
      animate(next_button, {scale: 0});
      animate(back_button, {scale: 1});

    }
    if (next_button){
      next_button.onclick = () => {
        if (button_next == "support_button") {
          next_button_general();
          is_support = true;
        }
  
        if (button_next == "packaging_button"){
          next_button_general();
          is_packaging = true;
        }
  
        if (button_next == "expertise_button") {
          next_button_general();
          is_expertise = true;
        }
  
        if (button_next == "program_button"){
          next_button_general();
          is_program = true;
        }
  
        if (button_next == "investment_button") {
          next_button_general();
          is_investment = true;
        }
  
        if (button_next == "direct_button"){
          next_button_general();
          is_direct = true;
        }
  
        if (button_next == "financing_button") {
          next_button_general();
          is_financing = true;
        }
  
        if (button_next == "grants_button"){
          next_button_general();
          is_grants = true;
        }
  
        if (button_next == "techno_market_button") {
          next_button_general();
          is_techno_market = true;
        }
      }
    } 
  

    function back_button_general() {
      animate(internal_page_one, { scale: 1 });
      animate(internal_page_two, {scale: 0})
      animate(next_button, {scale: 1});
      animate(back_button, {scale: 0});
      setActivePage("inside");


    }
    if (back_button) {
      back_button.onclick = () => {
        if (is_support){
          back_button_general()  
          is_support = false;
        }


        if (is_packaging){
          back_button_general()
          is_packaging = false;
        }

        if (is_expertise){
          back_button_general()  
          is_expertise = false;
        }

        if (is_program){
          back_button_general()
          is_program = false;
        }


        if (is_investment){
          back_button_general()  
          is_investment = false;
        }


        if (is_direct){
          back_button_general()
          is_direct = false;
        }

     

        if (is_financing){
          back_button_general()  
          is_financing = false;
        }


        if (is_grants){
          back_button_general()
          is_grants = false;
        }

        if (is_financing){
          back_button_general()
          is_financing = false;
        }

        if (is_techno_market){
          back_button_general()
          is_techno_market = false;
        }
      }}
    

    function click_button_general(){
      setActivePage("inside");
      animate(internal_page_one, { opacity: 1 });
      animate(home_button, { scale: 1 });
    }

    //One
    if (support_button) {
      support_button.onclick = () => {
          handleButtonClick("support_button");
          animate(middel_conteiner, { scale: 0 });
          click_button_general();
          animate(next_button, {scale: 1});
          button_next = "support_button";
      };
    }

    if (packaging_button) {
      packaging_button.onclick = () => {
          handleButtonClick("packaging_button");
          animate(middel_conteiner, { scale: 0 });
          click_button_general();
          animate(next_button, {scale: 1});
          button_next = "packaging_button";
      };
    }

    if (expertise_button) {
      expertise_button.onclick = () => {
          handleButtonClick("expertise_button");
          animate(middel_conteiner, { scale: 0 });
          click_button_general();
          animate(next_button, {scale: 1});
          button_next = "expertise_button";
      };
    }

    if (program_button) {
      program_button.onclick = () => {
          handleButtonClick("program_button");
          animate(middel_conteiner, { scale: 0 });
          click_button_general();
          animate(next_button, {scale: 1});
          button_next = "program_button";
      };
    }

    if (investment_button) {
      investment_button.onclick = () => {
          handleButtonClick("investment_button");
          animate(middel_conteiner, { scale: 0 });
          click_button_general();
          // animate(next_button, {scale: 1});
          // button_next = "program_button";
      };
    }

    if (direct_button) {
      direct_button.onclick = () => {
          handleButtonClick("direct_button");
          animate(middel_conteiner, { scale: 0 });
          click_button_general();
          // animate(next_button, {scale: 1});
          // button_next = "program_button";
      };
    }

    if (financing_button) {
      financing_button.onclick = () => {
          handleButtonClick("financing_button");
          animate(middel_conteiner, { scale: 0 });
          click_button_general();
          animate(next_button, {scale: 1});
          button_next = "financing_button";
      };
    }

    if (grants_button) {
      grants_button.onclick = () => {
          handleButtonClick("grants_button");
          animate(middel_conteiner, { scale: 0 });
          click_button_general();
          animate(next_button, {scale: 1});
          button_next = "grants_button";
      };
    }




    //Two
    if (techno_market_button){
      techno_market_button.onclick = () => {
        handleButtonClick("techno_market_button");
        click_button_general();
        animate(middel_conteiner_two, { scale: 0 });
        animate(next_button, {scale: 1});
        button_next = "techno_market_button";
      };
    }




    //Three button
    if (pilot_testing_program_button){
      pilot_testing_program_button.onclick = () => {
        handleButtonClick("pilot_testing_program_button");
        setActivePage("inside");
        animate(middel_conteiner_three, { scale: 0 });
        animate(internal_page_one, { opacity: 1 });
        animate(home_button, { scale: 1 });
        // animate(next_button, {scale: 1});
        // button_next = "techno_market_button";
      }
    }


    if (intersectoral_clusters_button) {
      intersectoral_clusters_button.onclick = () => {
        handleButtonClick("intersectoral_clusters_button");
        setActivePage("inside");
        animate(middel_conteiner_three, { scale: 0 });
        animate(internal_page_one, { opacity: 1 });
        animate(home_button, { scale: 1 });
        animate(next_button, {scale: 1});
        button_next = "intersectoral_clusters_button";
      }
    }



    document.oncontextmenu = () => false;

    return () => {
    };
  }, [animate]);

  return (
    <>  
          
          {/* {activeHome && <HomePageFour></HomePageFour>} */}
          {activePage === "inside" && currentPage && (
            <InsidePage page={currentPage} />
          )}
          {activePage === "insideTwo" && currentPage && (
            <InsidePageTwo page={currentPage} />
          )}
    </>
  );
}
