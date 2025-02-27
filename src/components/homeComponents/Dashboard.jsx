import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {ChevronDown , ChevronUp} from 'lucide-react'
import Features from './Features';
import {AnimatePresence ,motion } from 'framer-motion'

const Dasboard = () => {

    const [arrow , setArrow] = useState(true);
    const [features , setFeatures] = useState(false);
    const handleClick = () =>{
        if(window.innerWidth < 1000){

            document.getElementById("dBoard")[0].classList.toggle("dboardTransition");
        }

        
    };

    const handleFeatures = () => {

        setArrow(!arrow);
        setFeatures(!features);
       
    }

    return (
        

        <div className='dBoard position-fixed mt-0 col-2 border-bottom border-2  shadow-lg z-1 ' >
           
            <div className="container  mt-5 pt-5 ">
            <ul className="nav navBar d-flex flex-column justify-content-center gap-2  align-items-start ps-3 pt-3 ">
            <li className="nav-item">
                    <Link onClick={handleClick}  to="/" className='text-decoration-none nav-link text-light'>Home</Link>
                </li>
                <li className="nav-item" >
                    <a role="button" onClick={handleFeatures} className="nav-link text-light d-flex justify-content-center align-items-center gap-1 " >Features { arrow ? <ChevronDown size={20}/>: <ChevronUp size={20}/>} </a>
                    <AnimatePresence>
                    {features && <Features isVisible={features} />}
                    </AnimatePresence>
                </li>
                <li className="nav-item">
                   <Link onClick={handleClick}  to="/pricing" className='text-decoration-none nav-link text-light'>Pricing</Link>
                </li>
                <li className="nav-item">
                <Link onClick={handleClick}  to="/contact" className='text-decoration-none nav-link text-light'>Contact</Link>
                </li>
                <li className="nav-item">
                <Link onClick={handleClick}  to="/services" className='text-decoration-none nav-link text-light'>Services</Link>
                </li>

            </ul>
            </div>
        </div>
    );
}

export default Dasboard;