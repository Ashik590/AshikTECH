import React from 'react';
import Common from './Common';
import AboutSvg from './AboutSvg';
import AboutSvg2 from './AboutSvg2';

const About = (props) => {
    return (
        <>
            <Common
             classes="container mt-3"
             heading="Welcome to visit our About of"
             btn="LEARN MORE"
             img={props.on? <AboutSvg2/> : <AboutSvg/>}
            />
        </>
    );
}

export default About;
