import React from "react";
import { useLocation } from "react-router-dom";

const InfoRobots = () => {
  const location = useLocation();
  const { robotInfo } = location.state;
  return (
    <div>
      <div className="text-center"> INFO ROBOTS PAGE </div>{" "}
      <div className="text-center">
        {robotInfo.name} email is {robotInfo.email}
      </div>
    </div>
  );
};

export default InfoRobots;
