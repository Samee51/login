import React from 'react';

const Alert = ({ message , toggle }) => {


    const handleToggle = (e) => {

        e.preventDefault();
        toggle();
        
    }


    return (
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>{message}</strong>
            <button type="button" className="btn-close shadow-none" onClick={handleToggle} aria-label="Close"></button>
        </div>
    );
}

export default Alert;