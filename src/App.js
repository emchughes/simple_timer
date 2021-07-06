import "./styles.css";
import ReactDOM from "react-dom";

const React = require("react");
const ms = require("pretty-ms");

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      start: 0,
      isOn: false
    };
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }
  startTimer() {
    this.setState({
      time: this.state.time,
      start: Date.now() - this.state.time,
      isOn: true
    });
    this.timer = setInterval(
      () =>
        this.setState({
          time: Date.now() - this.state.start
        }),
      1000
    );
    console.log("start");
  }
  stopTimer() {
    this.setState({
      isOn: false
    });
    clearInterval(this.timer);
    console.log("stop");
  }
  resetTimer() {
    this.setState({ time: 0 });
    console.log("reset");
  }

  render() {
    let start =
      this.state.time === 0 ? (
        <button onClick={this.startTimer}>start</button>
      ) : null;
    let stop = this.state.isOn ? (
      <button onClick={this.stopTimer}>stop</button>
    ) : null;
    let reset =
      this.state.time !== 0 && !this.state.isOn ? (
        <button onClick={this.resetTimer}>reset</button>
      ) : null;
    let resume =
      this.state.time !== 0 && !this.state.isOn ? (
        <button onClick={this.startTimer}>resume</button>
      ) : null;
    return (
      <div>
        <h3>timer: {ms(this.state.time)}</h3>
        {start}
        {resume}
        {stop}
        {reset}
      </div>
    );
  }
}
module.exports = Timer;

ReactDOM.render(<Timer />, document.getElementById("root"));
