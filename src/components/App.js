import React from "react";
import Card from "./Card";
import "./Card.css";
class App extends React.Component {
  componentDidMount = () => {};
  render() {
    return (
      <div className="ui container">
        <Card />
      </div>
    );
  }
}
export default App;
