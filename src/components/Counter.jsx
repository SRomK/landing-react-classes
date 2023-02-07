import React from "react";

export default class Counter extends React.Component {
  
    state = {
        counter: 0,

    }
//     constructor(props) {
//       console.log('Constructor');
//     super(props);

//     this.state
//   }
    handleClick = () =>{
        let counter = this.state.counter;
        counter = this.state.counter + 1;
        this.setState({ counter });
    }
  render() {
    console.log("Render");

    return (
      <div>
        <span>{this.state.counter}</span>
        <div onClick={this.handleClick} className="counter">Counter: {0}</div>
      </div>
    );
  }
}
