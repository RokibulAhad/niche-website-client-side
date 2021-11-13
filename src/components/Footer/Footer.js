import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import img from '../../images/logo.png'

const Footer = () => {
    return (
        <div className="footer ">
            <div className="container ">
                <div className="row  py-5 ">
                    <div className="col-md-4">
                    <img src={img} alt="" />
                    <p className="mt-2">We believe in Simple, Clean & Modern Watch Support. Browse the amazing work of our Site.</p>
                    <div className="contact-info">
                        <address>
                            <h4 className="footer_text">Headquarters:</h4>
                            <p>221 Jockey Hollow, Suite 600
                                Smithtown, NY 11787</p>
                        </address>
                        <div className="phn_fax">
                            <p><span className="footer_text"><b>Phone:</b></span> (91) 8974 56984</p>
                            <p><span className="footer_text"><b>Fax:</b></span>  (91) 66 8754 8978</p>
                            <p><span classname="footer_text"><b>Email:</b></span>  info@watchhouse.com</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4 form_style" >
                    <h3 className="section_title">Contact us</h3>
                    <form action="" >
                        <input type="text" name="name" className="form-control" placeholder="Full Name"/>
                        <input type="email" name="name" className="form-control" placeholder="Email address"/>
                        <textarea name="" id="" cols="30" rows="4" className="form-control" placeholder="Message..."></textarea>
                        <button className="info_btn2">send</button>
                    </form>
                    </div>
                    <div className="col-md-4 footer_menu">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">About</Link></li>
                            <li><Link to="/">Service</Link></li>
                            <li><Link to="/">Privacy & Policy</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;