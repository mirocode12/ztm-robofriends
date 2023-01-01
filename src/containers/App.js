import React, { Component } from "react";
import "../containers/App.css";
import Home from "../components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InfoRobots from "../components/InfoRobots";
import RobotPosts from "../components/RobotPosts";

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
      <div className="w-4/5 m-auto">
      <Router>
        <div className="text-center">
          <h1 id="title" className="text-neutral-700">ROBOFRIENDS</h1>{" "}
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
          >
          </Route>
          <Route path="/ztm-robofriends/posts" element={<RobotPosts />} />
        </Routes>
      </Router>
      </div>
    );
  }
}

export default App;
