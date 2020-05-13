import React from "react";
import "./Card.css";
//import Encrption from "./Encryption/Encryption";
import SearcBar from "./SearchBar";
import OutputBox from "./OutputBox";
import WebWorkerEnabler from "./Encryption/WebWorkerEnabler.js";
import WebWorker from "./Encryption/WebWorker.js";

class Card extends React.Component {
  state = { output: "", input: "", worker: null };
  workerInstance = new WebWorkerEnabler(WebWorker);
  onInputChange = (text) => {
    this.setState({ input: text });
    console.log(text);
  };

  onPressEncrypt = (event) => {
    if (this.state.input.trim() === "") {
      this.setState({ output: "" });
      return;
    }
    this.workerInstance.postMessage(this.state.input);
  };

  onPressDecrypt = (text) => {};

  componentDidMount = () => {
    this.workerInstance.addEventListener(
      "message",
      (e) => {
        this.setState({ ouput: e.data });
      },
      false
    );
  };

  render() {
    return (
      <div
        className="ui massive card "
        style={{ width: "50%", height: "300px" }}
      >
        <div className="content">
          <SearcBar
            onInputChange={this.onInputChange}
            placeholder="Enter encrypted or decrypted text here"
            className="ui search"
          />
          <OutputBox value={this.state.output} />
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            <div
              onClick={this.onPressEncrypt}
              className="ui basic green button"
            >
              Encrypt
            </div>
            <div onClick={this.onPressDecrypt} className="ui basic red button">
              Decrypt
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
