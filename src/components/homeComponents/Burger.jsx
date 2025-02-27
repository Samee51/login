import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react'



const Burger = () => {

    const [isBurger, setIsBurger] = useState(true);

    const manageBurger = () => setIsBurger(!isBurger);

    useEffect(() => {
        console.log(isBurger);
    
        if (window.innerWidth < 1000) {
            const handleClick = () => {
                manageBurger((prev) => !prev); 
                console.log("Toggled isBurger:", !isBurger); 
                document.querySelector(".dBoard").classList.toggle("dBoardTransition");
                document.querySelector(".burgerMenu svg").classList.toggle("trans");
            };
    
            const contentElement = document.querySelector(".toggle");
    
            if (!isBurger) {
                contentElement.addEventListener("click", handleClick);
            } else {
                contentElement.removeEventListener("click", handleClick);
            }
    
            return () => {
                contentElement.removeEventListener("click", handleClick);
            };
        }
    }, [isBurger]);


    const handleDashboard = () => {

        setIsBurger(!isBurger);
        document.getElementsByClassName("dBoard")[0].classList.toggle("dBoardTransition");
        document.querySelector(".burgerMenu svg").classList.toggle("trans");

    };

    return (<div onClick={handleDashboard} className="burgerMenu d-flex justify-content-end align-items-center">
        {isBurger ? <Menu size={25} color='white' /> : < X size={25} color='white' />}
    </div>);

}

export default Burger;