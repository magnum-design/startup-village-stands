import './StartPage.css';
import background_video from '../Videos/fon.mp4';
import logo from '../Img/LogoMIK.png';
import { color, motion } from "framer-motion";

import { useLocation } from "react-router-dom";


const contentMap = {
    board_one: (
      <>
        <h1 className="title">Привлечение</h1>
        <h1 className="title2">финансирования</h1>
      </>
    ),
    board_two: (
      <>
        <h1 className="title">Поддержка</h1>
        <h1 className="title2">разработок </h1>
      </>
    ),
    board_three: (
      <>
        <h1 className="title">Внедрение инновационной продукции заказчикам</h1>
       
      </>
    ),
    board_four: (
        
          <h1 className="title">Развитие человеческого капитала</h1>
    
      ),
  };
  


export default function StartPage( ){
  
    const location = useLocation();

    

    const locationPath = location.pathname.split('/')[1]
    return (
        <>
            <div id='start_container' className='start_container'> 
                <video className='video_fon' 
                    controls = {false} 
                    loop 
                    muted  
                    autoPlay
                    playsInline>
                <source src={background_video} type="video/webm" />
                </video> 
                <div id='content' className='content'>

                    {contentMap[locationPath] || null}
                    
                    {/* <motion.h1 style={{ display: "flex", color: 'white' }}>
                        {words.map((word, wordIndex) => (
                            <motion.div key={wordIndex} style={{ display: 'flex' }}>
                                {word.split('').map((letter, letterIndex) => (
                                <motion.span
                                    key={`${wordIndex}-${letterIndex}`}
                                    className="title"
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{
                                    repeat: Infinity,
                                    duration: 2,
                                    delay: (wordIndex * word.length + letterIndex) * 0.1, // Задержка учитывает индекс слова и буквы
                                    }}
                                >
                                    {letter}
                                </motion.span>
                                ))}
                            </motion.div>
                            ))}
                    </motion.h1> */}
                    <img src={logo} alt="Logo" class="logo"/>
                </div>
            </div>
        </>
    )
}