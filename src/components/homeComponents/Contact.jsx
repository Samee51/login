import { Contact } from 'lucide-react';
import React from 'react';


const Contacts = () => {

    return (<>
        <div className="toggle box feature col-12 d-flex flex-column pt-5 pe-5 pb-5 mt-5  justify-content-center align-items-center">
            <div className=' shadow-lg bg-light p-4 border border-3 rounded col-5 ' style={{backgroundColor:"#7886C7"}}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Your Message" rows="5"></textarea>
                </div>
            </div>
        </div>
    </>);
}


export default Contacts;