import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = (props) => {
    return (
        <>
            <div className="col-lg-4 col-md-6">
                <div className="card m-auto" style={{width: "18rem"}}>
                    <img src={props.imgsrc} className="card-img-top" alt="Service Item"/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink className="btns" to="/"><span>GET STARTED</span></NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
