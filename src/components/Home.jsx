import { useState  } from 'react'
import './Home.css'
import Dashboard from './homeComponents/Dashboard'
import Header from './homeComponents/Header'
import  Homee  from './homeComponents/Homee'
import { BrowserRouter as Router , Routes , Route  } from 'react-router-dom'
import Pricing from './homeComponents/Pricing';
import Contacts from './homeComponents/Contact';
import Services from './homeComponents/Services';
import Feature1 from './homeComponents/featureComp/feature1';
import Feature2 from './homeComponents/featureComp/feature2';
import Feature3 from './homeComponents/featureComp/feature3';







function Home({logout}) {


  return (

    
   
    <div className='d-flex flex-column col-12 main '>
        <Header logout={logout} />

        <div className='d-flex col-12 justify-content-between'>
          <Dashboard />
          
          <Routes>
            <Route path="/" element = {<Homee />} />
            <Route path="/pricing" element = {<Pricing />} />
            <Route path="/contact" element = {<Contacts />} />
            <Route path="/services" element = {<Services />} />
            <Route path="/feature1" element = {<Feature1 />} />
            <Route path="/feature2" element = {<Feature2 />} />
            <Route path="/feature3" element = {<Feature3 />} />
          </Routes>
        
        </div>
        
        
        
      </div>
     
   
  );
}

export default Home ;
