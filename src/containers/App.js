import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "../containers/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  onShowUser = (event) => {
    console.log(event.target.parentNode.getAttribute("name"));
  };

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !robots.length ? 
      <h1 className="text-center">LOADING</h1>
     : (
      <div className="text-center">
        <h1 className="text-neutral-700">ROBOFRIENDS</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList showUser={this.onShowUser} className="inline-block" robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
