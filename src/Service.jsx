import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

const Service = () => {
    return (
        <>
            <section className="container" id="service">
                <div className="row gy-lg-5 gy-4 gy-md-3">
                    <h1 className="text-center mb-4 und_ln"><span>Our Services</span></h1>
                    {Sdata.map(function(value,index){
                        return <Card key={index} title={value.title} imgsrc={value.imgsrc}/>
                    })}
                </div>
            </section>
        </>
    );
}

export default Service;
