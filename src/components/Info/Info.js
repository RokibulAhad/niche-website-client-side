import React from 'react';
import './Info.css'

const Info = () => {
    return (
        <div className='container p-5'>
            <h2 className="mb-4 info_title">NEED INFO?</h2>
            <div className="row">
                <div className="col-md-4 g-2 info_bg info_card text-start p-5">
                    <h2 className="info_card_title">1-800-600-380</h2>
                    <h5>EMERGENCY SERVICE</h5>
                    <p>Management of emergencies is an integral part of primary care. Being first contact care providers general practitioners may encounter any type of emergency. </p>
                    <button className="info_btn">See More</button>
                </div>
                <div className="col-md-4 g-2 info_bg_middle info_card text-start p-5">
                <i className="far fa-calendar-alt fa-3x mb-3"></i>
                    <h5>DO YOU WANT TO MAKE AN APPOINTMENT</h5>
                    <p>Find your doctor easily with a minimum of effort. We've kept everything organised for you.Ask for an appointment of the doctor quickly with almost a single click. We take care of the rest.</p>
                    <button className="info_btn">See More</button>
                </div>
                <div className="col-md-4 g-2 info_bg info_card text-start p-5">
                <i className="far fa-clock fa-3x mb-3"></i>
                    <h5>OPENING HOURS</h5>
                    <p>6am to 10pm </p>
                    <p>open every day</p>
                    <button className="info_btn">See More</button>
                </div>

            </div>
            
        </div>
    );
};

export default Info;