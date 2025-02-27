import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import './Login.css'
import Alert from './Alert';

const Signup = ({ login }) => {

    const [formData, setFormData] = useState({ User_name: "", phoneNumber: "", password: "", confirmPassword: "" });
    const [alertToggle, setAlertToggle] = useState("");
    const [alert, setAlert] = useState("true")

    const emailElement = useRef(0);
    const mobileElement = useRef(0);
    const passwordElement = useRef(0);
    const confirmPasswordElement = useRef(0);
    const elementToggle = useRef(null);


    useEffect(() => {

        if (elementToggle.current) {

            setTimeout(() => {
                elementToggle.current.classList.remove("toggleDown");
                elementToggle.current.classList.add("toggleUp");
            }, 2000)
        }
    }, [alert]);


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

        setAlert(preValue => (!preValue));
        

        
        formData.User_name === "" && emailElement.current.classList.add("border-danger-subtle");
        formData.phoneNumber === "" && mobileElement.current.classList.add("border-danger-subtle")
        formData.password === "" && passwordElement.current.classList.add("border-danger-subtle")
        formData.confirmPassword === "" && confirmPasswordElement.current.classList.add("border-danger-subtle")


        if (formData.password !== formData.confirmPassword) {

            setAlertToggle("passwordNotMatch");
            elementToggle.current.classList.remove("toggleUp");
            elementToggle.current.classList.add("toggleDown");

        }


        else if (formData.User_name !== "" && formData.phoneNumber !== "" && formData.confirmPassword !== "" && formData.password !== "") {

            const email = formData.User_name;
            const phoneNumber = formData.phoneNumber;


            if (!localStorage.getItem(email)) {

                if (!localStorage.getItem(phoneNumber)) {

                    localStorage.setItem(email, JSON.stringify(formData));
                    localStorage.setItem(phoneNumber, JSON.stringify(formData));
                    login();
                    navigate("/");

                } else {
                    setAlertToggle("phoneNumberExist");
                    elementToggle.current.classList.remove("toggleUp");
                    elementToggle.current.classList.add("toggleDown");
                }

            } else {
                setAlertToggle("emailExist");
                elementToggle.current.classList.remove("toggleUp");
                elementToggle.current.classList.add("toggleDown");
            }

        }

        // passwordNotMatch
        // phoneNumberExist
        // emailExist
        // fieldsEmpty


    }

    return (
        <div className="signup login container-fluid  ">
            <div className="row  justify-content-center">
                <div className='col-lg-4 col-md-6 col-10 loginForm   '>

                    {/* toggle Alert  */}
                    <div className="row">

                        {
                            alertToggle === "passwordNotMatch"
                                ?
                                <Alert ref={elementToggle} message="Password did not match" />
                                :
                                alertToggle === "phoneNumberExist"
                                    ?
                                    <Alert ref={elementToggle} message="Phone number already Exist try another one ." />
                                    :
                                    alertToggle === "emailExist"
                                        ?
                                        <Alert ref={elementToggle} message="Email already Exist try another one." />
                                        :
                                        <Alert ref={elementToggle} message="Everything is good." />
                        }
                    </div>

                    <div className="row">
                        <form className=' mb-2  rounded bg-light shadow-lg py-4  px-5' onSubmit={handleSubmit}>
                            <div className='mb-3'>
                                <h2 className='mb-5 text-center text-light'>
                                    Signup
                                </h2>
                            </div>
                            <div className='signForm'>
                                <div className=" mt-4 ">

                                    <input ref={emailElement} onChange={handleChange} value={formData.User_name} type="email" className="form-control border-0 border-bottom  border-2 py-2 mt-2 shadow-none rounded-0 my-4 text-light fw-bold font-monospace ps-3" name='User_name' placeholder='Email' />

                                </div>
                                <div className=" mt-3 ">

                                    <input ref={mobileElement} type="number" onChange={handleChange} value={formData.phoneNumber} className="form-control border-0 border-bottom py-2 border-2  shadow-none rounded-0 my-4  mt-2 text-light fw-bold font-monospace ps-3" name='phoneNumber' placeholder='Mobile' />


                                </div>

                                <div className="mt-3 ">

                                    <input ref={passwordElement} type="password" onChange={handleChange} value={formData.password} className="form-control border-0 border-bottom   rounded-0 my-4 border-2 shadow-none py-2 mt-2 text-light fw-bold ps-3" name='password' placeholder='password' />

                                </div>
                                <div className="mt-3 ">

                                    <input ref={confirmPasswordElement} type="password" onChange={handleChange} value={formData.confirmPassword} className="form-control border-0 border-bottom  mt-2 py-2  rounded-0 my-4 border-2 shadow-none text-light fw-bold ps-3" name='confirmPassword' placeholder='Confirm Password' />

                                </div>
                            </div>
                            <div className='formBtn mt-5'>
                                <button className="btn bg-light shadow-lg border-2 w-100 fw-bold my-3 hoverZoom">SIGNUP</button>
                                <span className=' text-light  fw-normal '>Already have an Account ?&nbsp;<Link className="text-warning p-0 m-0 border-0 btn text-decoration-underline fw-normal  " to="/login">Login</Link></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>



        </div>
    );

};

export default Signup;