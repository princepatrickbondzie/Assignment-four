import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const About = () => {
   const [user, setUser] = useContext(UserContext);
  return (
    <section>
      <h1>About Page</h1>

      <h3>
        <strong>Current User</strong>: {user}
      </h3>
      <button onClick={() => setUser("About")}></button>
    </section>
  );
};

export default About;
