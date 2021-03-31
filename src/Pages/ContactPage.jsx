import React from 'react'
import { useContext } from 'react'
import { UserContext } from "../context/UserContext";

const ContactPage = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <div>
      <h1>Contact Page</h1>
      <h3>
        <strong>Current User</strong>: {user}
      </h3>
      <button onClick={() => setUser("Contact")}></button>
    </div>
  );
};

export default ContactPage;
