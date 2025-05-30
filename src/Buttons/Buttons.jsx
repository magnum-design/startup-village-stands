import './Buttons.css';
import {motion, scale} from 'framer-motion';
import { useRef,  forwardRef, useImperativeHandle } from "react";
import { useState } from 'react';
import { animate, AnimatePresence } from 'framer-motion';


 export const BackButton = forwardRef((props, ref) => {
    const onclickFunc = props['onclickFunc']
    return (
      <>
         <motion.div ref={ref} whileTap="tapped" onClick={onclickFunc} id='back_button' className="back_button_container">
         </motion.div>
      </>
    )
 })

 export const HomeButton = forwardRef((props, ref) => {
    const onclickFunc = props['onclickFunc']
    return (
      <>
         <motion.div ref={ref} whileTap="tapped" onClick={onclickFunc} id='home_button' className="home_button_container">
         </motion.div>
      </>
    )
 })

 export const NextButton = forwardRef((props, ref) => {
    const onclickFunc = props['onclickFunc']
    return (
      <>
         <motion.div ref={ref} whileTap="tapped" onClick={onclickFunc}  id='next_button' className="next_button_container">
         </motion.div>
      </>
    )
 })


 export const MenuButton = forwardRef((props, ref) => {
     const id_button = props['id_button']
     const nameButton = props['nameButton']
     const onclickFunc = props['onclickFunc']

      return (
        <>
        <AnimatePresence>
         <motion.div key={id_button} initial={{y:-50, opacity:0}} animate={{y : 0, opacity:1, transition:{delay: props['delay']/10}}} exit={{x:100}} onClick={onclickFunc} className='menu_button' id={id_button}>
            <h4 className='correct_for_button'>{nameButton}</h4>
         </motion.div>
        </AnimatePresence>
      </>
      )
 });


//Второй билборд кнопки

export function TechnoMarketButton({ buttonVariants }) {
   return (
     <motion.div
       variants={buttonVariants}
       initial="hidden"
       id="techno_market_button"
       className="techno_market_button_container"
     />
   );
 }

 export function EducationProgramsButton({ buttonVariants }) {
   return (
     <motion.div
       variants={buttonVariants}
       initial="hidden"
       id="education_programs_button"
       className="education_programs_button_container"
     />
   );
 }

 export function OnlineServiceRIDButton({ buttonVariants }) {
   return (
     <motion.div
       variants={buttonVariants}
       initial="hidden"
       id="online_service_rid_button"
       className="online_service_rid_button_container"
     />
   );
 }

 export function IPPackagingButton({ buttonVariants }) {
   return (
     <motion.div
       variants={buttonVariants}
       initial="hidden"
       id="ip_packaging_button"
       className="ip_packaging_button_container"
     />
   );
 }

 export function IPSecuredLendingButton({ buttonVariants }) {
   return (
     <motion.div
       variants={buttonVariants}
       initial="hidden"
       id="ip_secured_lending_button"
       className="ip_secured_lending_button_container"
     />
   );
 }

 export function RussianPatentGrantButton({ buttonVariants }) {
   return (
     <motion.div
       variants={buttonVariants}
       initial="hidden"
       id="russian_patent_grant_button"
       className="russian_patent_grant_button_container"
     />
   );
 }

 export function ForeignPatentGrantButton({ buttonVariants }) {
   return (
     <motion.div
       variants={buttonVariants}
       initial="hidden"
       id="foreign_patent_grant_button"
       className="foreign_patent_grant_button_container"
     />
   );
 }

 //Третий билборд кнопки
 export function PilotTestingProgramButton({ buttonVariants }) {
   return (
     <>
       <motion.div
         variants={buttonVariants}
         initial="hidden"
         id="pilot_testing_program_button"
         className="pilot_testing_program_button_container"
       />
     </>
   );
 }

 export function IntersectoralClustersButton({ buttonVariants }) {
   return (
     <>
       <motion.div
         variants={buttonVariants}
         initial="hidden"
         id="intersectoral_clusters_button"
         className="intersectoral_clusters_button_container"
       />
     </>
   );
 }

 // четвертый билборд кнопки
 export const HitechEmploymentButton = forwardRef((props, ref) => {

  const handleClick = (e) => {
    if (props['onClick']) {
      props['onClick'](e);
    }
  };

   return (
     <>
       <div onClick={handleClick}  id="hitech_employment_button" className="gloabal_button_style">
          <h3>ТРУДОУСТРОЙСТВО В ВЫСОКОТЕХ</h3>
       </div>
     </>
   );

 })


 export function EntrepreneurshipPromotionButton() {
   return (
     <>
       <div id="entrepreneurship_promotion_button" className="gloabal_button_style">
        <h3>ПОПУЛЯРИЗАЦИЯ ПРЕДПРИНИМАТЕЛЬСТВА</h3>
       </div>
     </>
   );
 }

 export function EducationAndSelfRealizationButton() {
   return (
     <>
       <div id="education_self_realization_button" className="gloabal_button_style">
        <h3>ОБУЧЕНИЕ И САМОРЕАЛИЗАЦИЯ</h3>
       </div>
     </>
   );
 }


 export function GloballButtonsFour({id_button, nameButton}){
    return(
      <>
        <div className='gloabal_button_style' id={id_button}>
            <h3 >{nameButton}</h3>
         </div>
      </>
    )
 }


 export function QualificationExam({onClickx}) {
  return (
    <>
      <div onClick = {onClickx}  id="qualification exam" className="gloabal_button_style">
       <h3>Добровольный квалификационный экзамен</h3>
      </div>
    </>
  );
}


export function StartInMoscow({onClickx}) {
  return (
    <>
      <div onClick = {onClickx}  id="qualification exam" className="gloabal_button_style">
       <h3>Start in Moscow</h3>
      </div>
    </>
  );
}
