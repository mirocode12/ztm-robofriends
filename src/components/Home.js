import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";

const Home = ({ robots, searchChange }) => {
  return !robots.length ? (
    <h1 className="text-center">LOADING</h1>
  ) : (
    <div className="text-center">
      <SearchBox searchChange={searchChange} />
      <Scroll>
        <CardList className="inline-block" robots={robots} />
      </Scroll>
    </div>
  );
};

export default Home;
