import React, { Component } from "react";
import "../containers/App.css";
import Home from "../components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InfoRobots from "../components/InfoRobots";

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

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return (
      <Router>
        <div className="text-center">
          <h1 className="text-neutral-700">ROBOFRIENDS</h1>{" "}
        </div>
        <Routes>
          <Route
            path="/ztm-robofriends"
            element={
              <Home
                searchChange={this.onSearchChange}
                robots={filteredRobots}
              />
            }
          />
          <Route
            path="/ztm-robofriends/inforobot"
            element={<InfoRobots robot />}
          />
        </Routes>
      </Router>
    );
  }
}

export default App;
