import { Contact } from 'lucide-react';
import React from 'react';


const Pricing = () => {

    return (<>
        <div className="toggle box feature col-12 d-flex flex-column pt-5 pe-5 pb-5 mt-5  justify-content-center align-items-center">
            <div className="col-4">
                <div className="">
                    <div className="card mb-4 rounded-3 shadow-sm">
                        <div className="card-header py-3">
                            <h4 className="my-0 fw-normal">Plan</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">$15<small className="text-body-secondary fw-light">/mo</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>20 users included</li>
                                <li>10 GB of storage</li>
                                <li>Priority email support</li>
                                <li>Help center access</li>
                            </ul>
                            <button type="button" className="w-100 btn btn-lg btn-primary">Get started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}


export default Pricing;