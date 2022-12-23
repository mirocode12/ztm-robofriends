import React from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";

const App = () => {
  return (
    <div className="text-center">
      <h1>ROBOFRIENDS</h1>
      <SearchBox />
      <CardList classList=" inline-block" robots={robots} />
    </div>
  );
};

export default App;
