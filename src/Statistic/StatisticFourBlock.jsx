import '../InsidePage/InsidePage.css'

function MyComponent({ htmlContent }) {
    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  }

export default function StatisticFourBlock({data}){
    
    const oneBlock = data[0]
    const twoBlock = data[1]
    const threeBlock = data[2]
    const fourBlock = data[3]
    console.log(Object.keys(twoBlock)[0]) 
    // console.log(Object.keys(twoBlock)[0].includes("млн.₽"))
    return (
        <>  
            <div className='bottom_container_four'>
                <div className='bottom_container_vertical'>
                    <div className='for_statistic '>
                        <div className='circle'></div>     
                        {Object.keys(oneBlock)[0].includes("до") && Object.keys(oneBlock)[0].includes("млн.₽") ? (
                            <>
                            <div className='horizont'>
                                <p className='down'>ДО</p>
                                <h3 className='indicator_size'>{Object.keys(oneBlock)[0].split(" ")[1]}</h3> 
                                <p className='down'>МЛН.₽</p>
                            </div>
                            <p>{oneBlock[Object.keys(oneBlock)]}</p>
                            </>
                        ) : Object.keys(oneBlock)[0].includes("тыс.") ? (
                            <>
                                <div className='horizont'>
                                    <h3 className='indicator_size'>{Object.keys(oneBlock)[0].split(" ")[0]}</h3>
                                    <p className='down'>ТЫС.</p> 
                                </div>
                                <p>{oneBlock[Object.keys(oneBlock)]}</p>
                            </>
                        ) : Object.keys(oneBlock)[0].includes("млн.₽") ? (
                            <>
                            <div className='horizont'>
                                <h3 className='indicator_size'>{Object.keys(oneBlock)[0].split(" ")[0]}</h3>
                                <p className='down'>МЛН.₽</p> 
                            </div>
                            <p>{oneBlock[Object.keys(oneBlock)]}</p>
                            </>
                        ) : (
                            <>
                            <h3 className='indicator_size'>{Object.keys(oneBlock)}</h3>
                            <p>{oneBlock[Object.keys(oneBlock)]}</p>
                            </>
                        )}
                        {/* <h3 className='indicator_size'>{Object.keys(oneBlock)}</h3>
                        <p>{oneBlock[Object.keys(oneBlock)]}</p> */}
                    </div>
                    <div className='for_statistic'>
                        <MyComponent htmlContent={Object.keys(twoBlock)}></MyComponent>
                        <p>{twoBlock[Object.keys(twoBlock)]}</p>
                        {/* <div className='circle'></div>
                        {Object.keys(twoBlock)[0].includes("до") && Object.keys(twoBlock)[0].includes("млн.₽") ? (
                            <>
                            <div className='horizont'>
                                <p className='down'>ДО</p>
                                <h3 className='indicator_size'>{Object.keys(twoBlock)[0].split(" ")[1]}</h3> 
                                <p className='down'>МЛН.₽</p>
                            </div>
                            <p>{twoBlock[Object.keys(twoBlock)]}</p>
                            </>
                        ) : Object.keys(twoBlock)[0].includes("тыс.") ? (
                            <>
                                <div className='horizont'>
                                    <h3 className='indicator_size'>{Object.keys(twoBlock)[0].split(" ")[0]}</h3>
                                    <p className='down'>ТЫС.</p> 
                                </div>
                                <p>{oneBlock[Object.keys(twoBlock)]}</p>
                            </>
                        ) : Object.keys(twoBlock)[0].includes("млн.₽") ? (
                            <>
                            <div className='horizont'>
                                <h3 className='indicator_size'>{Object.keys(twoBlock)[0].split(" ")[0]}</h3>
                                <p className='down'>МЛН.₽</p> 
                            </div>
                            <p>{twoBlock[Object.keys(twoBlock)]}</p>
                            </>
                        ) : (
                            <>
                            <h3 className='indicator_size'>{Object.keys(twoBlock)}</h3>
                            <p>{twoBlock[Object.keys(twoBlock)]}</p>
                            </>
                        )} */}
                    </div>                                             
                </div>
                <div className='bottom_container_vertical'>
                    <div className='for_statistic '>
                        <div className='circle'></div>     
                        {Object.keys(threeBlock)[0].includes("до") && Object.keys(threeBlock)[0].includes("млн.₽") ? (
                            <>
                            <div className='horizont'>
                                <p className='down'>ДО</p>
                                <h3 className='indicator_size'>{Object.keys(threeBlock)[0].split(" ")[1]}</h3> 
                                <p className='down'>МЛН.₽</p>
                            </div>
                            <p>{threeBlock[Object.keys(threeBlock)]}</p>
                            </>
                        ) : Object.keys(threeBlock)[0].includes("тыс.") ? (
                            <>
                                <div className='horizont'>
                                    <h3 className='indicator_size'>{Object.keys(threeBlock)[0].split(" ")[0]}</h3>
                                    <p className='down'>ТЫС.</p> 
                                </div>
                                <p>{threeBlock[Object.keys(threeBlock)]}</p>
                            </>
                        ) : Object.keys(threeBlock)[0].includes("млн.₽") ? (
                            <>
                            <div className='horizont'>
                                <h3 className='indicator_size'>{Object.keys(threeBlock)[0].split(" ")[0]}</h3>
                                <p className='down'>МЛН.₽</p> 
                            </div>
                            <p>{threeBlock[Object.keys(threeBlock)]}</p>
                            </>
                        ) : (
                            <>
                            <h3 className='indicator_size'>{Object.keys(threeBlock)}</h3>
                            <p>{threeBlock[Object.keys(threeBlock)]}</p>
                            </>
                        )}
                    </div>
                    <div className='for_statistic'>
                        <div className='circle'></div>
                        {Object.keys(fourBlock)[0].includes("до") && Object.keys(fourBlock)[0].includes("млн.₽") ? (
                            <>
                            <div className='horizont'>
                                <p className='down'>ДО</p>
                                <h3 className='indicator_size'>{Object.keys(fourBlock)[0].split(" ")[1]}</h3> 
                                <p className='down'>МЛН.₽</p>
                            </div>
                            <p>{fourBlock[Object.keys(fourBlock)]}</p>
                            </>
                        ) : Object.keys(fourBlock)[0].includes("тыс.") ? (
                            <>
                                <div className='horizont'>
                                    <h3 className='indicator_size'>{Object.keys(fourBlock)[0].split(" ")[0]}</h3>
                                    <p className='down'>ТЫС.</p> 
                                </div>
                                <p>{fourBlock[Object.keys(fourBlock)]}</p>
                            </>
                        ) : Object.keys(fourBlock)[0].includes("млн.₽") ? (
                            <>
                            <div className='horizont'>
                                <h3 className='indicator_size'>{Object.keys(fourBlock)[0].split(" ")[0]}</h3>
                                <p className='down'>МЛН.₽</p> 
                            </div>
                            <p>{fourBlock[Object.keys(fourBlock)]}</p>
                            </>
                        ) : (
                            <>
                            <h3 className='indicator_size'>{Object.keys(fourBlock)}</h3>
                            <p>{fourBlock[Object.keys(fourBlock)]}</p>
                            </>
                        )}
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