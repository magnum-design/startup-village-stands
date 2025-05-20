import './Buttons.css';
import {motion, scale} from 'framer-motion';
import {animate} from 'motion'
import { useRef, onClick, useImperativeHandle, forwardRef } from "react";



export function BackButton() {
    return (
      <>
         <motion.div initial={{ scale: 0 }} id='back_button' className="back_button_container">
         </motion.div>
      </>
    )
 }

 export function HomeButton({onclickFunc}) {
    return (
      <>
         <motion.div whileTap="tapped" onClick={onclickFunc} id='home_button' className="home_button_container">
         </motion.div>
      </>
    )
 }

 export function NextButton() {
    return (
      <>
         <motion.div initial={{ scale: 0 }}  id='next_button' className="next_button_container">
         </motion.div>
      </>
    )
 }


 export const MenuButton = forwardRef((props, ref) => {
     const  componentRef = useRef(null);
     function showAnimate(delay){
         if (componentRef.current){
             animate(componentRef.current, { opacity: 1, y:20}, { duration: 0.5, delay : delay} )
         }
     };
     function hideAnimate(delay){
         if (componentRef.current){
             animate(componentRef.current, { opacity: 0, y:0}, { duration: 0.5, delay : delay} )
         }
     };

     useImperativeHandle(ref, () => ({
         showAnimate,
         hideAnimate,
     }));
     const id_button = props['id_button']
     const nameButton = props['nameButton']
     const onclickFunc = props['onclickFunc']

      return (
        <>
         <div onClick={onclickFunc} className='menu_button' id={id_button} ref={componentRef}>
            <h3 >{nameButton}</h3>
         </div>
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
 export function HitechEmploymentButton() {
   return (
     <>
       <div id="hitech_employment_button" className="hitech_employment_button_container">
       </div>
     </>
   );
 }

 export function EntrepreneurshipPromotionButton() {
   return (
     <>
       <div id="entrepreneurship_promotion_button" className="entrepreneurship_promotion_button_container">
       </div>
     </>
   );
 }

 export function EducationAndSelfRealizationButton() {
   return (
     <>
       <div id="education_self_realization_button" className="education_self_realization_button_container">
       </div>
     </>
   );
 }
