import React, { useState } from "react";
import { Router, Route, Switch } from "react-router";
import { NavLink } from 'react-router-dom';
import './index.css';

const Navbar = ({user}) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container">
            <div className="logo">
            <a style={{color:'white',fontSize:18,fontWeight:'bold'}} className="navbar-brand" href="#">
            RatneshDevelopment
            </a>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
             

                <li className="nav-item">
                  <NavLink style={{color: 'white'}} exact className="nav-link " aria-current="page" to="/" >Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink style={{color: 'white'}} className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink style={{color: 'white'}} className="nav-link" to="/services">Services</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink style={{color: 'white'}} className="nav-link" to="/contact">Contact</NavLink>
                </li>
              </ul>

              <form className="d-flex">

              {
                  user?
                  <li className="nav-item">
                <NavLink  exact className="nav-link " aria-current="page" to="/">Home</NavLink>
                </li>:
                <NavLink className="nav-link" to="/Signup"> <button style={{color: 'white'}} class="btn  btn-style" type="submit">
                 Sign Up
               </button>
               </NavLink>

                }

                <NavLink className="nav-link" to="/Login">  <button style={{color: 'white'}} class="btn  btn-style btn-style-border" type="submit">
                  Log in
                </button>
                </NavLink>

              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
