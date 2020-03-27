import React from 'react';
import './NeedHelp.css'
const NeedHelp = () => {
    return (
        <div>
            <div className="container">
                <div className="need-help">
                    
                        <div className="need-help-outer">
                            <div className="need-help-inner">
                                <div className=" d-flex justify-content-center align-items-center">
                                    <div>
                                        <img src="images/questionMark.svg" alt="" />
                                    </div>
                                    <div>
                                        <h1>Need help on your project?</h1>
                                    </div>
                                    <div>
                                        <button className="btn btn-primary btn-lg">CONTACT US</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                </div>
            </div>
        </div>
    );
};

export default NeedHelp;