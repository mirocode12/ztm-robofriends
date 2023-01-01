import React from "react";
import { useLocation } from "react-router-dom";
import "./InfoRobots.css";

const InfoRobots = () => {
  const location = useLocation();
  const { robotInfo } = location.state;
  console.log(robotInfo)
  return (
    <div>
      <div className="text-center">
        <h2 className="mb-1 info-name">{robotInfo.name} info</h2>
      </div>
      <div className="borderLine"></div>
      <div className="text-center">
        <img
          className="border-2 border-blue-200 rounded-xl info-img"
          alt="robot"
          src={`https://robohash.org/${robotInfo.id}?100x100`}
        />
         <div className="robot-info">
            <h3>Username: {robotInfo.username}</h3>
            <h3>Email: {robotInfo.email}</h3>
            <h3>Phone: {robotInfo.phone}</h3>
            <h3>Website: {robotInfo.website}</h3>
            <button id="btn-posts" type="button">Posts</button>
         </div>
      </div>
    </div>
  );
};

export default InfoRobots;
