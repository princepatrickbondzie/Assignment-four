import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import "./index.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import AboutPage from "./Pages/AboutPage";
import Header from "./Component/Header";
import ProtectedPage from "./Pages/ProtectedPage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import ProtectedRoute from "./Component/ProtectedRoute";
import UserContextProvider from "./context/UserContext";
import AuthContextProvider from "./context/AuthContext";

let isLoggedIn = false;

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <UserContextProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignupPage} />
            <ProtectedRoute
              path="/protected"
              component={ProtectedPage}
              isLoggedIn={isLoggedIn}
            />
          </Switch>
        </BrowserRouter>
      </UserContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
