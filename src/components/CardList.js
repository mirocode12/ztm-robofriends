import React from "react";
import Card from "./Card";

const CardList = ({ robots, onCardClick }) => {
  
  return (
    <div className="inline-block text-center">
      {robots.map((user, i) => {
        return (
          <Card
            onCardClick={onCardClick}
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            username={robots[i].username}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
