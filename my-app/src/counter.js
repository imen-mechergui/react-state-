import React from "react";
import foto from "./foto.jpg";
class Counter extends React.Component {
  constructor() {
    console.log("constructor()");
    super();
    this.state = {
          timer: 0,
      intervall: null
    };
  }

  componentDidMount() {
    console.log("Component did Mount()");
    // console.log(this.state.isVisible);
    // console.log(this.state.counter);
    this.setState({
      intervall: setInterval(
        () => this.setState({ timer: this.state.timer + 1 }),
        300
      )
    });
  }

  componentDidUpdate() {
    console.log("Component did Update() ");
    // console.log(this.state.isVisible);
    // console.log(this.state.counter);
  }

  componentWillUnmount() {
    console.log("Component will unMount()");
    clearInterval(this.state.intervall);
  }


  render() {
    console.log("render()");
    return (
      <div>
        <h1>Information</h1>
        <h2>Imen Mechergui</h2> 
       <ul> 
           <li> Age:32</li>
           <li> single </li>
           <li> E-mail:mecherguiimen20@gmail.com</li>
       </ul>
       <h3>Physics Teacher</h3>
      <img src={foto} className="foto" />
       
        <p> {this.state.timer} </p>
      </div>
    );
  }
}

export default Counter;
