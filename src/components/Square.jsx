import React from "react";

const styles = {
  square: {
    WebkitAppearance: "none",
    fontSize: "40px",
    fontWeight: "bolder",
    backgroundColor: "#EEE",
    border: "1px solid #ccc",
    cursor: "pointer"
  }
};

/* export default class Square extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <button style={{ ...styles.square }} onClick={() => this.props.onClick()}>{this.props.value}</button>;
  }
}
 */
export default function Square(props) {
  return (
    <button style={{ ...styles.square }} onClick={props.onClick}>
      {props.value}
    </button>
  );
}
