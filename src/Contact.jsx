import React from 'react';
import { NavLink } from 'react-router-dom';

const Contact = () => {
    return (
        <>
            <section className="container">
                <div className="row">
                    <div className="col-10 m-auto">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <h1 className="text-center mb-5 und_ln"><span>Contact Us</span></h1>
                                <form>
                                    <label htmlFor="name" className="label mb-1">Name</label>
                                    <input id="name" type="text" className="form-control mb-3" placeholder="Enter your name"/>
                                    <label htmlFor="email" className="label mb-1">Email</label>
                                    <input type="Email" id="email" className="form-control mb-3" placeholder="Enter your email address"/>
                                    <label htmlFor="mobile" className="label mb-1">Mobile Number</label>
                                    <input className="form-control mb-3" type="Mobile" id="mobile" placeholder="Enter your mobile number"/>
                                    <label htmlFor="msg" className="label mb-1">Message</label>
                                    <textarea id="msg" className="form-control" placeholder="Type your valuable message"></textarea>
                                    <NavLink to="/" className="btns mt-3"><span>SUBMIT</span></NavLink>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
