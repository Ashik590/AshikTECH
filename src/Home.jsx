import React from 'react';
import Common from './Common';
import HomeSvg from './HomeSvg';
import HomeSvg2 from "./HomeSvg2";

const Home = (props) => {
    return (
        <>
          <Common 
            classes="container"
            heading="Grow your business with"
            btn = "START NOW"
            img ={props.on ? <HomeSvg2/> : <HomeSvg/>}
           />
        </>
    );
}

export default Home;
