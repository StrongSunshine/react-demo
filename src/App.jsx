import React from "react";

import Board from "./components/Board";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xIsNext: true,
      lines: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ],
      history: [Array(9).fill(null)]
    };
  }

  handleClick(i) {
    let history = this.state.history;
    let current = Array.from(history[history.length - 1]);
    if (current[i]) return;
    let next = this.state.xIsNext ? "x" : "o";
    current[i] = next;
    this.setState({
      history: history.concat([current]),
      xIsNext: !this.state.xIsNext
    });
    let winner = this.handleWinner(current);
    if (winner) {
      alert("获胜者是" + winner);
      this.jump(0)
      return null;
    }
  }

  handleWinner(squares) {
    let lines = this.state.lines;
    for (let i = 0; i < lines.length; i++) {
      let [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  jump(i) {
    let history = this.state.history.slice(0)
    history.splice(i + 1)
    console.log(history)
    this.setState({
      history,
      xIsNext: i % 2 === 0
    });
  }

  moves() {
    return this.state.history.map((item, index) => {
      let desc = index ? "返回第" + index + "步" : "重新开始";
      return (
        <li key={index}>
          <button onClick={() => this.jump(index)}>{desc}</button>
        </li>
      );
    });
  }

  render() {
    let history = this.state.history;

    let current = history[history.length - 1];

    let step = history.length - 1;

    const netxIs = "next Player is " + (this.state.xIsNext ? "x" : "o");

    return (
      <div className='App'>
        <img
          src={require("./assets/img/logo.svg")}
          className='logo'
          alt='logo'
        />
        <h1>连字游戏</h1>
        <p className='player'>{netxIs}</p>
        <div className='game_box'>
          <Board
            squares={current}
            xIsNext={this.state.xIsNext}
            onClick={i => this.handleClick(i)}
          />
          <div className='history'>
            <p className='info'>当前是第{step}步</p>
            <ol>{this.moves()}</ol>
          </div>
        </div>
      </div>
    );
  }
}
