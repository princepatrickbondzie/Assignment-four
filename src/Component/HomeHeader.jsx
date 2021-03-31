import React from "react";
import "./HomeHeader.css";

const HomeHeader = () => {
  return (
    <div classname="home-page">
      <div className="head">
        <div className="textfor">
          <h1>LET US TAKE YOU TO YOUR</h1>
          <p>
            <h1>DREAM DESTINATION</h1>
          </p>
        </div>
        <br />
        <form className="search">
          <input list="sel1" className="inn" placeholder="Select Region" />
          <datalist id="sel1">
            <option value="Central" />
            <option value="Greater Accra" />
            <option value="Ashanti" />
            <option value="Eastern" />
            <option value="Western" />
            <option value="Upper West" />
            <option value="Upper East" />
            <option value="Northern" />
          </datalist>
          <input list="sel2" className="inn" placeholder="Destination" />
          <datalist id="sel2">
            <option value="Cape Coast Castle" />
            <option value="Elmina Castle" />
            <option value="Kakum Nat'l Park" />
            <option value="Fort" />
          </datalist>
          <input list="sel3" className="inn" placeholder="Budget (GHC)" />
          <datalist id="sel3">
            <option value=" GHc1000" />
            <option value="GHc2000" />
            <option value="GHc3000" />
            <option value="GHc4000" />
          </datalist>
          <button type="submit" id="sel4">
            FIND YOUR TOUR
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomeHeader;
