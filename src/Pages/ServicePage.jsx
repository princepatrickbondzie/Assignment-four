import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const ServicePage = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <div>
      <h1>Service Page</h1>

      <h3>
        <strong>Current User</strong>: {user}
      </h3>
      <button onClick={() => setUser("Service")}></button>
    </div>
  );
};

export default ServicePage;
