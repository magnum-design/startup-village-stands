import './StartPage.css';
import background_video from '../Videos/fon.mp4';
import logo from '../Img/LogoMIK.png';
import { color, motion } from "framer-motion";


const text = "Привлечение\nфинансирования";
const words = text.split("\n");


export default function StartPage(){
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
                    <h1 className='title'>
                        Привлечение
                    </h1> 
                    <h1 className='title2'>     
                        финансирования
                    </h1>
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