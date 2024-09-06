import Header from "./Component/Header";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Balanced from "./Component/Balanced";
import Consistent from "./Component/Consistent";
import Determine from "./Component/Determine";
import Greeting from "./Component/Greeting";
import Innovation from "./Component/Innovation";
import Mentor from "./Component/Mentor";
import Motivation from "./Component/Motivation";
import Patience from "./Component/Patience";

function MyApp(){

  return(

    <>



<BrowserRouter> 


<Routes>
  

<Route path = '/' element = {<Header/>}/>
<Route path = '/Patience' element = {<Patience/>}/>
<Route path = '/Innovation' element = {<Innovation/>}/>
<Route path = '/Determine' element = {<Determine/>}/>
<Route path = '/Motivation' element = {<Motivation/>}/>
<Route path = '/Consistent' element = {<Consistent/>}/>
<Route path = '/Mentor' element = {<Mentor/>}/>
<Route path = '/Balanced' element = {<Balanced/>}/>
<Route path = '/Greeting' element = {<Greeting/>}/>
  
  
  
   </Routes>








</BrowserRouter>
    
    </>
  )
}

export default MyApp; 

