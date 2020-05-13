import React from "react";

class OutputBox extends React.Component {
  state = { term: this.props.value };
  onHitEnter = (event) => {
    event.preventDefault();
  };
  onInputChange = (event) => {
    this.setState({ term: this.props.value });
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onHitEnter}>
          <div className="field">
            <input
              type="text"
              value={this.props.value}
              onChange={this.onInputChange}
              placeholder="OUTPUT"
            ></input>
          </div>
        </form>
      </div>
    );
  }
}
export default OutputBox;
