import React,{ useState,useEffect}from "react";
import Navbar from "./navbar";
import Header from "./Header";
import About from './About';
import Contact from './Contact';
import Services from './Services';
import Signup from './Signup';
import Login from './Login';
import {Switch, Route , Redirect,BrowserRouter} from 'react-router-dom';
import {auth} from './firebase'

const App = () => {
  const [user,setUser] =useState(null)
useEffect(() => {
auth.onAuthStateChanged(user=>{
  if(user) setUser(user)
  else setUser(null)

  
})
},[])

  return (
    <>
    <BrowserRouter >
      <Navbar user={user} /> 
      <Switch>
        
        <Route exact path="/" component ={Header} user={user} />
        <Route exact path="/about" component ={About} />
        <Route exact path="/services" component ={Services} />
        <Route exact path="/contact" component ={Contact} />
        <Route exact path="/Signup" component ={Signup} />
        <Route exact path="/Login" component ={Login} />
    
        <Redirect to="/" />
       
      </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
