
import '../InsidePage/InsidePage.css'


export function Triplet({specialWords}){
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
    } else {
        smallLeft = specialWords[0]
        bigCenter = specialWords[1]
        smallRight = specialWords[2]
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
    console.log(Object.keys(blockData)[0])
    return (
        <>
            <div className='for_statistic '>
                <div className='circle'></div>
                <Triplet specialWords = {specialWords} />
              
                <p>{blockData[Object.keys(blockData)]}</p>
            </div>
        </>
    )
}

export default function StatisticFourBlock({data}){

    const oneBlock = data[0]
    const twoBlock = data[1]
    const threeBlock = data[2]
    const fourBlock = data[3]
    console.log(Object.keys(twoBlock)[0])
    return (
        <>
            <div className='bottom_container_four'>
                <div className='bottom_container_vertical'>
                    <SquareBlock blockData = { oneBlock }/>
                    <SquareBlock blockData = { twoBlock }/>
                </div>
                <div className='bottom_container_vertical'>
                    <SquareBlock blockData = { threeBlock }/>
                    <SquareBlock blockData = { fourBlock }/>
                </div>

            </div>
        </>
    )
}
