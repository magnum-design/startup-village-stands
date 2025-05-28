import {motion} from 'framer-motion'

function ParseJSON({ htmlString }) {
    console.log('Parse', htmlString);
    return <span dangerouslySetInnerHTML={{ __html: htmlString }} />;
}

const GreenBubble = ({flag, pageTitle, pageText, delay }) => {
    // console.log('AAA', pageTitle);
    // console.log('AAA', pageText);
    
    if (!pageText){
        return (<></>)
    }
    return (
        <>
        <motion.div animate={{x:0, opacity:1, transition:{delay: delay/2}}} initial={{ opacity:0,x: -100}} className='for_whom'>
            {flag && pageTitle ? (
                <p>{pageTitle}</p>
                ) : (
                <>
                    <h6>{pageTitle}</h6> <br></br>
                </>
            )}
            {pageText.length === 1 ? (
                pageText[0][1] === 's' ? (
                    <ul><li><b><ParseJSON htmlString={pageText[0]} /></b></li></ul>
                ) : (
                    <p><ParseJSON htmlString={pageText[0]} /></p>
                )
            ) : (
                <ul>
                    {pageText.map((item, index) => {
                        return (
                            item[1] !== 's' ? (
                                <li key={index}><b><ParseJSON htmlString={item} /></b></li>
                            ) : (
                                <p key={index}><b><ParseJSON htmlString={item} /></b></p>
                            )
                        );
                    })}
                </ul>
            )}
        </motion.div>
        </>
    )
}

export {GreenBubble};
