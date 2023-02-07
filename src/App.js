import React from "react";
import "./styles/App.css";
import Penguin from "../src/img/penguin.png";
import Counter from "./components/Counter.jsx";

export default class App extends React.Component {
  state = {
    username: "",
    password: "",
  };

  word = "World";


  onChange = (e) => {
    console.log(e.target.value);
    //update the state
    this.setState({ [e.target.name]: e.target.value });
    // instead of hardcoding the property that I wanna update
    // we use the square brackets so that it identifies
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log("onsubmit event being fired");
    this.setState({ username: "", password: "" });
  };

  render() {
    const { username, password } = this.state;
    return (
      <>
        <div className="App">
          <header className="App-header">
            <img src={Penguin} className="penguin" alt="logo" />
            <p>Hello, {this.word}!</p>
          </header>

          <div className="containerForm">
            <h1>Username: {username}</h1>
            <h1>Password: {password}</h1>

            <form onSubmit={this.onSubmit}>
              <input
                type="text"
                value={username}
                onChange={this.onChange}
                name="username"
              />
              <input
                type="text"
                value={password}
                onChange={this.onChange}
                name="password"
              />
              <button type="submit">Submit</button>
            </form>
          </div>

          <div>
            <Counter />
          </div>
        </div>
      </>
    );
  }
}

