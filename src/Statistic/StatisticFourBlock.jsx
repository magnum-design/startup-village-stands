import '../InsidePage/InsidePage.css';
import qr from '../Img/qr-kod.png';
import {motion} from 'framer-motion'

function startsWithNumber(str) {
    return /^\d/.test(str);
}
export function Triplet({specialWords}){
    // I'm sorry for this abomination, but time is ticking
    let smallLeft = '';
    let bigCenter = '';
    let smallRight = '';
    if (specialWords.length == 1) {
        bigCenter = specialWords[0]
    } else if (specialWords.length == 2){
        if (specialWords[0] == 'до'){
            smallLeft = specialWords[0]
            bigCenter = specialWords[1]
        } else {
            bigCenter = specialWords[0]
            smallRight = specialWords[1]
        }
    } else if (specialWords.length == 3){
        if (startsWithNumber(specialWords[0])){
            bigCenter = specialWords[0]
            smallRight = specialWords[1] + ' ' + specialWords[2]
        }
        if (startsWithNumber(specialWords[1])){
            smallLeft = specialWords[0]
            bigCenter = specialWords[1]
            smallRight = specialWords[2]
        }
        if (startsWithNumber(specialWords[2])){
            smallLeft = specialWords[0] + ' ' + specialWords[1]
            bigCenter = specialWords[2]
        }
    } else if (specialWords.length == 4){
        if (startsWithNumber(specialWords[0])){
            bigCenter = specialWords[0]
            smallRight = specialWords[1] + ' ' + specialWords[2] + ' ' + specialWords[3]
        }
        if (startsWithNumber(specialWords[1])){
            smallLeft = specialWords[0]
            bigCenter = specialWords[1]
            smallRight = specialWords[2] + ' ' + specialWords[3]
        }
        if (startsWithNumber(specialWords[2])){
            smallLeft = specialWords[0] + ' ' + specialWords[1]
            bigCenter = specialWords[2]
            smallRight = specialWords[3]
        }
        if (startsWithNumber(specialWords[4])){
            smallLeft = specialWords[0] + ' ' + specialWords[1] + ' ' + specialWords[2]
            bigCenter = specialWords[3]
        }
    }
    return (
        <>
        <div className='horizont'>
            <p className='down'>{ smallLeft } </p>
            <h3 className='indicator_size'>{ bigCenter }</h3>
            <p className='down'>{ smallRight }</p>
        </div>
        </>
    )
}

function SquareBlock({ blockData }){
    let specialWords = Object.keys(blockData)[0].split(" ")
    // console.log(Object.keys(blockData)[0])
    return (
        <>
            <div className='circle'></div>
            <div className='for_statistic '>
                <Triplet specialWords = {specialWords} />
                <p style={{fontSize:'28pt'}}>{blockData[Object.keys(blockData)]}</p>
            </div>
        </>
    )
}

function TriangleBlock({ blockData }){
    let specialWords = Object.keys(blockData)[0].split(" ")

    return (
        <>
            <div className='circle'></div>
            <div className='for_statistic_row'>
                <Triplet specialWords = {specialWords} />
                <div className='for_p'>
                    <p style={{fontSize:'28pt', lineHeight: '42px'}}> {blockData[Object.keys(blockData)]}</p>
                </div>
            </div>
        </>
    )
}

export function StatisticFourBlock({data}){

    let oneBlock, twoBlock, threeBlock, fourBlock;
    if (data) {
        oneBlock = data[0];
        twoBlock = data[1];
        threeBlock = data[2];
        fourBlock = data[3];
    } else {
        oneBlock = "10";
        twoBlock = "10";
        threeBlock = "10";
        fourBlock = "10";
    }

    console.log(Object.keys(twoBlock)[0])
    return (
        <>
            <div className='bottom_container_four'>
                <div className='bottom_container_vertical'>
                    <motion.div initial={{y:-100, opacity : 0}} animate={{y: 0, opacity : 1, transition:{delay: 1.5}}}className="for_statistic_wrapper">
                        <SquareBlock blockData = { oneBlock }/>
                    </motion.div>
                    <motion.div initial={{ x:-100, opacity : 0}} animate={{ x:0, opacity : 1, transition:{delay: 1.5}}}className="for_statistic_wrapper">
                        <SquareBlock blockData = { twoBlock }/>
                    </motion.div>
                </div>
                <div className='bottom_container_vertical'>
                    <motion.div initial={{y:-100, opacity : 0}} animate={{y: 0, opacity : 1, transition:{delay: 1.7}}}className="for_statistic_wrapper">
                        <SquareBlock blockData = { threeBlock }/>
                    </motion.div>
                    <motion.div initial={{y:-100, opacity : 0}} animate={{y:0, opacity : 1, transition:{delay: 1.8}}}className="for_statistic_wrapper">
                        <SquareBlock blockData = { fourBlock }/>
                    </motion.div>
                </div>

            </div>
        </>
    )
}

export function StatisticSixBlock({data}){

    let oneBlock, twoBlock, threeBlock, fourBlock, fiveBlock, sixBlock;
    if (data) {
        oneBlock = data[0];
        twoBlock = data[1];
        threeBlock = data[2];
        fourBlock = data[3];
        fiveBlock = data[4];
        sixBlock = data[5];
    } else {
        oneBlock = "10";
        twoBlock = "10";
        threeBlock = "10";
        fourBlock = "10";
        fiveBlock = "10";
        sixBlock = "10";
    }

    console.log(Object.keys(twoBlock)[0])
    return (
        <>
            <div className='bottom_container_four'>
                <div className='bottom_container_vertical'>
                    <motion.div initial={{x:-100, opacity : 0}} animate={{x: 0, opacity : 1, transition:{delay: 1.5}}}className="for_statistic_wrapper">
                        <SquareBlock blockData = { oneBlock }/>
                    </motion.div>
                    <motion.div initial={{x:100, opacity : 0}} animate={{x: 0, opacity : 1, transition:{delay: 1.5}}}className="for_statistic_wrapper">
                        <SquareBlock blockData = { twoBlock }/>
                    </motion.div>
                </div>
                <div className='bottom_container_vertical'>
                    <motion.div initial={{x:-100, opacity : 0}} animate={{x: 0, opacity : 1, transition:{delay: 2}}}className="for_statistic_wrapper">
                        <SquareBlock blockData = { threeBlock }/>
                    </motion.div>
                    <motion.div initial={{x:100, opacity : 0}} animate={{x: 0, opacity : 1, transition:{delay: 2}}}className="for_statistic_wrapper">
                        <SquareBlock blockData = { fourBlock }/>
                    </motion.div>
                </div>
                <div className='bottom_container_vertical'>
                    <motion.div initial={{x:-100, opacity : 0}} animate={{x: 0, opacity : 1, transition:{delay: 2.5}}}className="for_statistic_wrapper">
                        <SquareBlock blockData = { fiveBlock }/>
                    </motion.div>
                    <motion.div initial={{x:100, opacity : 0}} animate={{x: 0, opacity : 1, transition:{delay: 2.5}}}className="for_statistic_wrapper">
                        <SquareBlock blockData = { sixBlock }/>
                    </motion.div>
                </div>

            </div>
        </>
    )
}


export function StatisticThreeBlock({titlePage, data}){
    const onePageTitle = [
        'Льготные займы на развитие',
        'Прямые инвестиции',
        'Образовательные программы по интеллектуальной собственности',
        'Кредитование под залог интеллектуальной собственности',
        'Грант на патентование изобретений и полезных моделей в Российской Федерации',
        'Грант на патентование изобретений и полезных моделей за рубежом',
        'Программа пилотного тестирования',
        'Льготные займы на масштабирование',
        'Пилотное тестирование инноваций',
        'Финансирование подготовки к IPO'

    ]
    // console.log(data[0])
    const oneBlock = data[0]
    const twoBlock = data[1]
    const threeBlock = data[2]
    // console.log(Object.keys(twoBlock)[0])
    // console.log(Object.keys(twoBlock)[0].includes("млн.₽"))
    return (
        <>
            <div className='bottom_container_four'>
                <div className='bottom_container_horizontal'>
                    <motion.div initial={{opacity : 0, x:100}} animate={{opacity : 1, x:0, transition:{delay:1.5}}}className="for_statistic_wrapper">
                        <TriangleBlock blockData = { oneBlock } />
                    </motion.div>
                    <motion.div initial={{opacity : 0, x:-100}} animate={{opacity : 1, x:0, transition:{delay:2}}}className="for_statistic_wrapper">
                        <TriangleBlock blockData = { twoBlock } />
                    </motion.div>

                    {onePageTitle.includes(titlePage) ?
                    (
                    <div className='bottom_container_vertical' style={{ margin: 0, width: '105%' }}>
                        <motion.div initial={{opacity : 0, x:100}} animate={{opacity: 1, x:0, transition:{delay:2.5}}} className="for_statistic_qr" >
                            <TriangleBlock blockData = { threeBlock } />
                            {/* <img src={qr} /> */}
                        </motion.div>
                        <QR delay={2.5}/>
                    </div>
                    ) : (
                    <motion.div initial={{opacity : 0, x:100}} animate={{x:0, opacity : 1, transition:{delay:2.5}}} className="for_statistic_wrapper">
                        <TriangleBlock blockData = { threeBlock } />
                    </motion.div>
                    )
                    }


                </div>
            </div>
        </>
    )
}

export function StatisticTwoBlock({titlePage, data}){
    // console.log('Йоу',data[1])
    const oneBlock = data[0]
    const twoBlock = data[1]
    const onePageTitle = [
        'Грант на патентование изобретений и полезных моделей за рубежом',

    ]


    console.log('условие', onePageTitle.includes(titlePage))
    // console.log(Object.keys(twoBlock)[0])
    // console.log(Object.keys(twoBlock)[0].includes("млн.₽"))
    return (
        <>
            <div className='bottom_container_four'>
                <div className='bottom_container_horizontal'>
                    <motion.div initial={{opacity : 0, y:-100}} animate={{opacity : 1, y:0, transition:{delay:1.5}}}className="for_statistic_wrapper">
                        <TriangleBlock blockData = { oneBlock } />
                    </motion.div>
                    <motion.div initial={{opacity : 0, y:-100}} animate={{opacity :1, y:0, transition:{delay:2}}}className="for_statistic_wrapper">
                        <TriangleBlock blockData = { twoBlock } />
                    </motion.div>

                    {onePageTitle.includes(titlePage) && <QR delay={2.5}/>}
                    {/* <QR/> */}



                </div>
            </div>
        </>
    )
}


export function QR({delay}){
    return(
        <>
            <motion.div initial={{opacity : 0, y:-100}} animate={{opacity : 1, y:0, transition:{delay:delay}}}className="for_statistic_wrapper">
                <div className='circle'></div>
                <div className='for_qr'>
                    <p>подать заявку</p>
                    <img src={qr} alt="Logo" className="logo_gr"/>
                </div>
            </motion.div>
        </>
    )
}
