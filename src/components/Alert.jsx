import React  from 'react';

const Alert = ({ message , ref}) => {

    return (
        <div ref={ref} className="toggle toggleUp alert alert-warning alert-dismissible mb-2 fade show text-center rounded-top-0" role="alert">
            <strong>{message}</strong>
        </div>
    );
}

export default Alert;