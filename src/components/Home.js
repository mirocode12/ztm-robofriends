import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";

const Home = ({ robots, searchChange }) => {
  return (
    <div className="text-center">
      <SearchBox searchChange={searchChange} />
      <Scroll>
        <CardList className="inline-block" robots={robots} />
      </Scroll>
    </div>
  );
};

export default Home;
