import {motion} from 'framer-motion'

function ParseJSON({ htmlContent }) {
    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

const GreenBubble = ({ pageTitle, pageText, delay }) => {
    console.log('AAA', pageTitle);
    console.log('AAA', pageText);
    if (!pageText){
        return (<></>)
    }
    return (
        <>
        <motion.div animate={{x:0, opacity:1, transition:{delay: delay/2}}} initial={{ opacity:0,x: -100}} className='for_whom'>
            {pageTitle && <h3>{pageTitle}</h3>}
            {pageText.length === 1 ? ( <p>{pageText}</p>) : (
                <ul>
                {pageText.map((item, index) => (
                    <li key={index}><ParseJSON htmlContent = {item}/></li>
                ))}
                </ul>
            )}
        </motion.div>
        </>
    )
}

export {GreenBubble};
