import React from 'react';
import Banner from '../Banner/Banner';
import './Home.css'
import Watches from '../Watches/Watches';
import Reviews from '../Reviews/Reviews';


const Home = () => {
    return (
        <div>
            
            
            <Banner></Banner>
            <div className="container py-5 ">
                    
                    <h2 className="my-5 section_title">Tell Us About Your Choise</h2>
                    <div className="align-items-center d-flex justify-content-center">
                        <form className="row gy-2 gx-3  ">
                        <div className="col-auto">
                            <label className="visually-hidden" for="autoSizingInput">Name</label>
                            <input type="text" className="form-control" id="autoSizingInput" placeholder="Name"/>
                        </div>
                        <div className="col-auto">
                            <label className="visually-hidden" for="autoSizingInputGroup">Username</label>
                            <div className="input-group">
                            
                            <input type="text" className="form-control" id="autoSizingInputGroup" placeholder="Username"/>
                            </div>
                        </div>
                        <div className="col-auto">
                            <label className="visually-hidden" for="autoSizingSelect">Preference</label>
                            <select className="form-select" id="autoSizingSelect">
                            <option selected>Choose...</option>
                            <option value="1">Casio</option>
                            <option value="2">Rado</option>
                            <option value="3">First Track</option>
                            <option value="3">Rolex</option>
                            </select>
                        </div>
                        <div className="col-auto">
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="autoSizingCheck"/>
                            <label className="form-check-label" for="autoSizingCheck">
                                Remember me
                            </label>
                            </div>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="info_btn3">Submit</button>
                        </div>
                        </form>
                    </div>
                </div>
                <Watches></Watches>
                <Reviews></Reviews>
        </div>
    );
};

export default Home;