import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onHitEnter = (event) => {
    event.preventDefault();
  };
  //controll the input to set in upperCasesss
  onInputChange = (event) => {
    this.setState({ term: event.target.value.toUpperCase() });
    this.props.onInputChange(event.target.value.toUpperCase());
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onHitEnter}>
          <div className="field">
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
              placeholder={this.props.placeholder}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
