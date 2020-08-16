import React, { Component } from "react";

class Score extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cookiesEaten: 0,
    };

    props.unityContent.on("CookieEatenEvent", () => {
      this.setState((prevState) => ({
        cookiesEaten: prevState.cookiesEaten + 1,
      }));
    });
  }

  render() {
    return (
      <div className="Panel-score">
        <p>Cookies Eaten 🍪😋</p>
        <p>{this.state.cookiesEaten}</p>
      </div>
    );
  }
}

export default Score;
