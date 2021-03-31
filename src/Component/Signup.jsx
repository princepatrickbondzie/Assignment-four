import React from "react";
import "./Signup.css";
import "./Login.css";

import { NavLink } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <div className="login-container">
        <div className="log-card">
          <h1>Welcome!</h1>
          <h1>Please signup to explore more..</h1>
          <br />
          <div class="in2">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="fullname"
              name="fullname"
              id="fullname"
              placeholder="Enter your fullname..."
            />
            <hr />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email..."
            />
            <hr />
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password..."
            />
            <div class="pass">
              <p className="p">
                Do you have an accout?
                <h4>
                  <NavLink to="/login">Login</NavLink>
                </h4>
              </p>
              <input type="button" value="Signup"  id="bt"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
