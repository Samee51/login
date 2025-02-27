import React from 'react';
import './loginSuccessful.css'
import video from '../assets/Animation - 1740653464573.webm'


const LoginSuccessful = () => {


    return (
        <div className="position-fixed container-fluid z-3">
            <div className="loginSuccessful container-fluid  justify-content-center row align-items-center  ">
                <div className="col-lg-4 col-md-6 col-sm-8 col-10 bg-light py-4 px-5  text-center ">
                    <div className="row">
                        <h3> Login Successfull </h3>
                        <video src={video} autoPlay muted loop></video>
                    </div>
                </div>
            </div>
        </div>


    )
};

export default LoginSuccessful;