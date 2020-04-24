import React from "react";

import Square from "./Square";

const styles = {
  board: {
    width: "360px",
    height: "360px",
    float: "left",
    display: "grid",
    gridTemplateColumns: "repeat(3, 33.333%)",
    gridTemplateRows: "repeat(3, 33.333%)"
  },
  row: {
    height: "120px"
  }
};

export default class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        key={i}
        onClick={() => this.props.onClick(i)}
      />
    );
  }
  render() {
    return (
      <div style={{ ...styles.board }}>
        {this.props.squares.map((item, index) => {
          return this.renderSquare(index);
        })}
      </div>
    );
  }
}
