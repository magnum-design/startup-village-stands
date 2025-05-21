import '../InsidePage/InsidePage.css'



export default function StatisticFourBlock({data}){
    
    const oneBlock = data[0]
    const twoBlock = data[1]
    const threeBlock = data[2]
    const fourBlock = data[3]

    return (
        <>  
            <div className='bottom_container_four'>
                <div className='bottom_container_vertical'>
                    <div className='for_statistic '>
                        <div className='circle'></div>     
                        <h3 className='indicator_size'>{Object.keys(oneBlock)}</h3>
                        <p>{oneBlock[Object.keys(oneBlock)]}</p>
                    </div>
                    <div className='for_statistic'>
                        <div className='circle'></div>
                        <h3 className='indicator_size'>{Object.keys(twoBlock)}</h3>
                        <p>{twoBlock[Object.keys(twoBlock)]}</p>
                    </div>                                             
                </div>
                <div className='bottom_container_vertical'>
                    <div className='for_statistic '>
                        <div className='circle'></div>     
                        <h3 className='indicator_size'>{Object.keys(threeBlock)}</h3>
                        <p>{threeBlock[Object.keys(threeBlock)]}</p>
                    </div>
                    <div className='for_statistic'>
                        <div className='circle'></div>
                        <h3 className='indicator_size'>{Object.keys(fourBlock)}</h3>
                        <p>{fourBlock[Object.keys(fourBlock)]}</p>
                    </div>                                   
                </div>
               
            </div>    
        </>            
    )
}

 {/* {data.map((item, index) => {
                    const [key, value] = Object.entries(item)[0];
                    return (
                            <>  

                                {/* <div className='circle'></div>   */}
                                {/* <div className='for_statistic' key={index}>
                                        <h3 className='indicator_size'>{key}</h3>
                                        <p>{value}</p>
                                </div>
                                
                            </>
                            );
                    })
                } }*/}