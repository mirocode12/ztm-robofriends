import React from "react";
import ReactDOM from "react-dom/client";
import "./input.css";
import Card from "./Card";
import { robots } from "./robots";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
      {robots.map((user, i) => {
        return (<Card
          id={robots[i].id}
          name={robots[i].name}
          username={robots[i].username}
          email={robots[i].email}
        />
      )})}
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
