import React, { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import './Login.css'
import Alert from './Alert';

const Signup = ({ login }) => {

    const [formData, setFormData] = useState({ User_name: "", phoneNumber: "", password: "", confirmPassword: "" });
    const [alertToggle, setAlertToggle] = useState("");

    const emailElement = useRef(0);
    const mobileElement = useRef(0);
    const passwordElement = useRef(0);
    const confirmPasswordElement = useRef(0);


    const navigate = useNavigate();

    const handleChange = (e) => {

        e.preventDefault();

        let { name, value } = e.target;

        if (name === "phoneNumber") {

            value = value.substring(0, 10);

        }

        setFormData(preValue => ({

            ...preValue,
            [name]: value,
        }));
    }

    const handleSubmit = async (e) => {

        e.preventDefault();


        if (formData.password !== formData.confirmPassword) setAlertToggle("passwordNotMatch")


        else if (formData.User_name !== "" && formData.phoneNumber !== "" && formData.confirmPassword !== "" && formData.password !== "") {

            const email = formData.User_name;
            const phoneNumber = formData.phoneNumber;


            if (!localStorage.getItem(email)) {

                if (!localStorage.getItem(phoneNumber)) {

                    localStorage.setItem(email, JSON.stringify(formData));
                    localStorage.setItem(phoneNumber, JSON.stringify(formData));
                    login();
                    navigate("/");

                } else setAlertToggle("phoneNumberExist");

            } else setAlertToggle("emailExist");

        }
        else {

            formData.User_name === "" && emailElement.current.classList.add("border-danger", "border-2");
            formData.phoneNumber === "" && mobileElement.current.classList.add("border-danger", "border-2")
            formData.password === "" && passwordElement.current.classList.add("border-danger", "border-2")
            formData.confirmPassword === "" && confirmPasswordElement.current.classList.add("border-danger", "border-2")
        }

        // passwordNotMatch
        // phoneNumberExist
        // emailExist
        // fieldsEmpty

    }

    const toggel = () => {

        setAlertToggle("");
    }

    return (
        <div className="signup login container-fluid row  ">
            <div className="row  justify-content-center">
                <div className='col-lg-4 col-md-6 col-10 loginForm   '>

                    {/* toggle Alert  */}

                    {
                        alertToggle === "fieldsEmpty"
                            ?
                            <Alert message="* Fields cannot be empty." toggle={toggel} />
                            :
                            alertToggle === "passwordNotMatch"
                                ?
                                <Alert message="Password did not match" toggle={toggel} />
                                :
                                alertToggle === "phoneNumberExist"
                                    ?
                                    <Alert message="Phone number already Exist try another one ." toggle={toggel} />
                                    :
                                    alertToggle === "emailExist"
                                        ?
                                        <Alert message="Email already Exist try another one." toggle={toggel} />
                                        :
                                        <div className="alert alert-danger alert-dismissible fade show invisible" role="alert">
                                            <strong>Wrong Credentials</strong>
                                            <button type="button" className="btn-close shadow-none" aria-label="Close"></button>
                                        </div>
                    }


                    <form className=' mb-2  rounded bg-light shadow-lg py-4  px-5' onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <h3 className='mb-4  text-light'>
                                Signup
                            </h3>
                        </div>
                        <div className='signForm'>
                            <div className=" mt-4 ">
                                
                                <input ref={emailElement} onChange={handleChange} value={formData.User_name} type="email" className="form-control border-0 border-bottom  border-1 py-1 mt-2 shadow-none rounded-0 my-4 text-light fw-bold font-monospace ps-3" name='User_name' placeholder='Email' />

                            </div>
                            <div className=" mt-2 ">
                                
                                <input ref={mobileElement} type="number" onChange={handleChange} value={formData.phoneNumber} className="form-control border-0 border-bottom py-1 border-1  shadow-none rounded-0 my-4  mt-2 text-light fw-bold font-monospace ps-3" name='phoneNumber' placeholder='Mobile' />


                            </div>

                            <div className="mt-2 ">
                               
                                <input ref={passwordElement} type="password" onChange={handleChange} value={formData.password} className="form-control border-0 border-bottom   rounded-0 my-4 border-1 shadow-none py-1 mt-2 text-light fw-bold ps-3" name='password' placeholder='password' />

                            </div>
                            <div className="mt-2 ">
                                
                                <input ref={confirmPasswordElement} type="password" onChange={handleChange} value={formData.confirmPassword} className="form-control border-0 border-bottom  mt-2 py-1  rounded-0 my-4 border-1 shadow-none text-light fw-bold ps-3" name='confirmPassword' placeholder='Confirm Password' />

                            </div>
                        </div>
                        <div className='formBtn mt-2'>
                            <button className="btn bg-light shadow-lg border-2 w-100 fw-bold my-3 hoverZoom">SIGNUP</button>
                            <span className=' text-light  fw-normal '>Already have an Account ?&nbsp;<Link className="text-warning p-0 m-0 border-0 btn text-decoration-underline fw-normal  " to="/login">Login</Link></span>
                        </div>
                    </form>
                </div>
            </div>



        </div>
    );

};

export default Signup;