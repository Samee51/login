import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import './Login.css'

const Login = ({ login }) => {

    const [formData, setFormData] = useState({ phone: "", password: "" });
    const [alertToggle, setAlertToggle] = useState(false);
    const [alert, setAlert] = useState("true")

    const elementPhone = useRef(0);
    const elementPassword = useRef(0);
    const elementToggle = useRef(null);

    useEffect(() => {

        if (elementToggle.current) {

            setTimeout(() => { elementToggle.current.classList.remove("toggleDown"); elementToggle.current.classList.add("toggleUp") }, 2000)
        }
    }, [alert]);


    const navigate = useNavigate();


    const handleChange = (e) => {

        let { name, value } = e.target;

        name === "phone" && value.length > 10 ? value = value.substring(0, 10) : null;

        setFormData(preValue => ({

            ...preValue,
            [name]: value,
        }));
    }

    const handleSubmit = async (e) => {

        e.preventDefault();

        setAlert(preValue => (!preValue));



        formData.phone === "" && elementPhone.current.classList.add("border-danger", "border-2");
        formData.password == "" && elementPassword.current.classList.add("border-danger", "border-2");

        if (formData.phone !== "" && formData.password !== "") {

            const response = JSON.parse(localStorage.getItem(formData.phone));

            if (response) {

                if (response.phoneNumber === formData.phone && response.password === formData.password) {

                    login();
                    navigate("/");

                } else {

                    setAlertToggle(true);
                    if (elementToggle.current) elementToggle.current.classList.remove("toggleUp") && elementToggle.current.classList.add("toggleDown");
                    console.log(elementToggle);


                }



            } else {

                setAlertToggle(true);
                if (elementToggle.current) elementToggle.current.classList.remove("toggleUp") && elementToggle.current.classList.add("toggleDown");

                console.log(elementToggle.current)

                
            }
        }


    }


    return (
        <div className="login container-fluid row  ">
            <div className="row  justify-content-center">
                <div className='col-lg-3 col-md-6 col-9 loginForm   '>
                    <div className='row'>
                        {alertToggle
                            ?
                            <div ref={elementToggle} className="alert toggle toggleUp text-center alert-danger alert-dismissible border-top-0 fade show" role="alert" >
                                <strong >Wrong Credentials</strong>
                            </div>
                            :
                            <div className="alert alert-danger alert-dismissible fade hide" role="alert">
                                <strong>Wrong Credentials</strong>
                            </div>}

                    </div>

                    <div className='row'>

                        <form className=' mb-2  rounded bg-light shadow-lg py-4  px-5' onSubmit={handleSubmit}>
                            <div className='mb-3'>
                                <h2 className='mb-4 text-center text-light'>
                                    LOGIN
                                </h2>
                            </div>

                            <div>
                                <div className="mt-5">
                                    <input ref={elementPhone} onChange={handleChange} value={formData.phone} type="number" className="form-control border-0 border-bottom rounded-0 border-1  shadow-none  text-light fw-bold font-monospace ps-3 py-1 mb-3 mt-4" placeholder="Phone" name='phone' />

                                </div>

                                <div className=" my-5">
                                    <input ref={elementPassword} type="password" onChange={handleChange} value={formData.password} className="form-control border-0 border-bottom rounded-0  border-1 shadow-none text-light fw-bold ps-3 py-1 mb-4" placeholder="Password" name='password' />

                                </div>
                            </div>
                            <div className="form-check mt-2">
                                <input className="form-check-input shadow-none border-light border-2" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label text-light btn p-0 border-0  fw-normal" htmlFor="flexCheckDefault">
                                    Remember me
                                </label>
                            </div>
                            <div className='formBtn mt-3'>
                                <button className="btn bg-light shadow-lg border-2 w-100 fw-bold my-3 hoverZoom">LOGIN</button>
                                <span className=' text-light  fw-normal '>Heven't Signed up yet ?&nbsp;<Link className="text-warning p-0 m-0 border-0 btn text-decoration-underline fw-normal " to="/signup">Sign up </Link> .</span>
                            </div>
                        </form>
                    </div>


                </div>
            </div>



        </div>
    );

};

export default Login;