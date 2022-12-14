import React from 'react';
import "bootstrap/dist/css/bootstrap.css";

function Weather(){
    // const { data } = props;

    //    const iconurl =
    // "http://openweathermap.org/img/wn/"+ `${data.weather[0].icon}` + "@2x.png";

    return (
        <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-12 col-md-4 col-sm-12 col-xs-12"> 
                   <div class="card p-4">    
                    
                       <div class="d-flex">
                           <h6 class="flex-grow-1">Sunny</h6>
                           <h6>16:08</h6>
                       </div>
                        
                       <div class="d-flex flex-column temp mt-5 mb-3">
                           <h1 class="mb-0 font-weight-bold" id="heading"> 13&deg; C </h1>
                           <span class="small grey">Stormy</span>
                       </div>
                       
                       <div class="d-flex">
                           <div class="temp-details flex-grow-1">
                                <p class="my-1">
                                    <img src="https://i.imgur.com/B9kqOzp.png" height="17px"/ >
            
                                   <span> 40 km/h  </span>
                                </p>

                                <p class="my-1"> 
                                   <i class="fa fa-tint mr-2" aria-hidden="true"></i>
                                   <span> 84% </span> 
                                </p>

                                <p class="my-1"> 
                                    <img src="https://i.imgur.com/wGSJ8C5.png" height="17px"/  >
                                    <span> 0.2h </span>
                                </p>
                           </div>
                           
                           {/* <div>
                               <img src={iconurl}width="100px" / >
                           </div> */}
                           
                           
                       </div>
                        
          
                    </div>
            </div>
        </div>


    </div>
    )
}
export default Weather;