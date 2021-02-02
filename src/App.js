import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Snake from './snakegame/Snake';
import CallBackFunc from './components/reacthook/CallBackFunc';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      check: true
    }
  }


  componentWillMount() {
    // alert("i am po");
  }

  componentDidMount() {
    // alert("component just finished mounting!");
  }

  onClick = () => {
    let tem = this.state.check;
    tem = tem === true ? false : true;
    this.setState({ check: tem })
    //  alert("you are clicking!");
    console.log("click");
  }



  render() {
    // setTimeout(alert("fuckyou"), 3000);

    return (
      <div className="App">
        <h1>I Love U</h1>
        <button onClick={this.onClick}>Click</button>

        <Snake />
        {/* <CallBackFunc /> */}
      </div>
    );
  }
}
export default App;
