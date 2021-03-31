import React from "react";
// import { useState } from "react";
// import { useHistory } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
import { NavLink } from "react-router-dom";
import "../Component/Login.css";

// import { useContext } from "react";
const Login = () => {
  //   const [email, setEmail] = useState("");
  //   const [password, setpassword] = useState("");
  //   const [setAuth] = useContext(AuthContext);
  //   const history = useHistory();

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     if (email === "prince" && password === "password") {
  //       setAuth(true);
  //       history.push("/protected");
  //     } else {
  //       history.push("/login");
  //     }
  //   };
  return (
    <div className="login-container">
      <div className="log-card">
        <h1>Welcome!</h1>
        <h1>Please login to your account</h1>
        <br />
        <div class="in">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            //  vlaue={email}
            //   onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email..."
          />
          <hr />
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            //   value={password}
            //   onChange={(e) => setpassword(e.target.value)}
            placeholder="Enter your password..."
          />
          {/* <br /> */}
          <div class="pass">
            <h3>
              <NavLink to="/signu">Forget password?</NavLink>
            </h3>
            <input type="button" value="Login" id="bt"/>
          </div>
          <br />
          <div class="pass1">
            <p>Do you have an accout?</p>
            <h3><NavLink to="/signup">SignUp</NavLink></h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
