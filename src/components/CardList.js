import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div className="inline-block text-center">
      {robots.map((user, i) => {
        return <Card key={i} robotInfo={user} />;
      })}
    </div>
  );
};

export default CardList;
