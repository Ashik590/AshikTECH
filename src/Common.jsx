import React from 'react';
import { NavLink } from 'react-router-dom';

const Common = (props) => {
    return (
        <>
             <section id="home" className={props.classes}>
                <div className="row">
                    <div className="col-11 m-auto">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1>{props.heading} <span>Ashik<b>TECH</b></span> </h1>
                                <p><span>AshikTECH</span> is an international highly recommended online platform where you can grow your business with your satisfaction. So don't be shy let's dive into it. <span>Cheers!</span></p>
                                <NavLink to="/service" className="btns mt-1"><span>{props.btn}</span></NavLink>
                            </div>
                            <div className="col-md-6">
                                {props.img}
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
        </>
    );
}

export default Common;
