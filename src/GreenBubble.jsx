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
                pageText[0][0]  === '*' ? (
                    <ul><li><b><ParseJSON htmlString={pageText[0].slice(1)} /></b></li></ul>
                ) : (
                    <p><ParseJSON htmlString={pageText[0]} /></p>
                )
            ) : (
                
                    pageText.map((item, index) => {
                        return (
                            item[0] !== '*' ? (
                                <ul>
                                    <li key={index}><b><ParseJSON htmlString={item} /></b></li>
                                </ul>
                            ) : (
                                <p key={index}><b><ParseJSON htmlString={item.slice(1)} /></b></p>
                            )
                        );
                    })
                
            )}
        </motion.div>
        </>
    )
}

export {GreenBubble};
