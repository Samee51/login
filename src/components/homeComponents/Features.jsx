import React from 'react';
import {Link} from 'react-router-dom';
import {motion } from 'framer-motion'

const Features = ({ isVisible }) => {
    return (<>
      
        {isVisible && (
        <motion.ul 
          initial={{y:-30}}
          animate={{y:-10}}
          // exit={{y:-45}}
          transition={{duration:0.3 , ease:"easeInOut"}}
        className="nav  navBar d-flex flex-column justify-content-center trans  align-items-center gap-3 py-3 ms-3 fw-light ">
                <li className="nav-item p-0">
                   <Link  to="/feature1" aria-disabled="true" className='text-decoration-none border-bottom border-2 pb-1  text-light'>feature 1</Link>
                </li>
                <li className="nav-item p-0">
                <Link  to="feature2" aria-disabled="true" className='text-decoration-none  text-light border-bottom border-2 pb-1'>feature 2</Link>
                </li>
                <li className="nav-item p-0">
                <Link  to="feature3" aria-disabled="true" className='text-decoration-none text-light border-bottom border-2 pb-1'>feature 3</Link>
                </li>

            </motion.ul>)}
            </>
    );
}


export default Features;