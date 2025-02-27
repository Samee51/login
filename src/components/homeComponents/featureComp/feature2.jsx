import React from 'react';


const Feature2 = () => {

    return (<>
        <div className="toggle box feature col-12 d-flex flex-column pt-5 pe-5 pb-5 mt-5 gap-5  justify-content-around align-items-center">
                <div className=" col-5 mt-4">
                    <h3 className="fs-2 text-body-emphasis">Featured 2</h3>
                    <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    <a href="#" className="icon-link">
                        Call to action
                        <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
                    </a>
                </div>
        </div>
    </>);
}


export default Feature2;