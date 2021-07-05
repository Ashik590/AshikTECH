import React,{useState} from 'react';
import { Route,Switch,Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Service from './Service';
import About from './About';
import Contact from './Contact';

const App = () => {
  const [on, setOn] = useState(false);
  const [mode,setMode] = useState("Dark");
  return (
    <>
        <Navbar/>
        <Switch>
          <Route exact path="/" render={()=><Home on={on}/>}/>
          <Route exact path="/service" component={Service}/>
          <Route exact path="/about" render={()=> <About on={on}/>}/>
          <Route exact path="/contact" component={Contact}/>
          <Redirect to="/"/>
        </Switch>
        <div className="mode">
          <input onChange={(e)=>{
              if(e.target.checked){
                setOn(true)
                setMode("Light")
                document.body.classList.add("dark");
              }else{
                setOn(false)
                setMode("Dark")
                document.body.classList.remove("dark");
              }
          }} type="checkbox" id="check"/>
          <label htmlFor="check" className="label">{mode}</label>
        </div>
    </>
  );
}

export default App;
