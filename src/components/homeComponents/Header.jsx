import React from 'react';
import Burger from './Burger';
import logo from '../logo.png'
import { useNavigate } from 'react-router-dom';


const Header = ({logout}) => {

    const navigate = useNavigate();

    const handleClick = (e) => {

        e.preventDefault();
        logout();
        navigate("/login");

    }

    return (
        <div className='shadow-lg py-2  col-12  navBox position-fixed d-flex justify-content-between align-items-center  border-bottom border-2 z-2'>
             <div className='d-flex flex-column justify-content-center align-items-center col-2   ' >
                <img src={logo} height={50} alt="Logo"  className='bg-secondary-subtle rounded-pill p-1' />   
            </div>
            <div className="d-flex justify-content-center align-items-center col-2">
                <button onClick={handleClick} className="btn logoutBtn btn-outline-light border-2 fw-bold shadow-lg hoverZoom">
                    Logout
                </button>
            </div>
            <Burger/>
        </div>
    );
}

export default Header;