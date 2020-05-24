import React from "react";
import ReactDom from "react-dom";
import Quotes from "./Quotes";

import "./styles.sass";

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Quotes />
      </div>
    );
  }
}
ReactDom.render(<MyApp />, document.getElementById("root"));
