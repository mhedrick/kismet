import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Adorable from './Adorable';
import Switch from './Switch';

//

class App extends Component {
  constructor() {
    super();
    this.state = {
      eyes: 0,
      nose: 0,
      mouth: 0,
      color: '#ffff00',
      face: {
        eyes: [],
        nose: [],
        mouth: []
    }};

    this.changeColor = this.changeColor.bind(this);
    this.goDown = this.goDown.bind(this)
    this.goUp = this.goUp.bind(this)
  }
  componentDidMount() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.adorable.io/avatars/list');
    xhr.onreadystatechange = () => {//Call a function when the state changes.
      if (xhr.readyState === XMLHttpRequest.DONE) {
        this.setState(JSON.parse(xhr.responseText));
      }
    }
    xhr.send();
  }
  changeColor(event) {
    this.setState({ color: event.target.value });
  }
  goUp(prop){
    let obj = {};
    let index = this.state[prop];
    let max = this.state.face[prop].length-1;
    
      if (index === max)
          obj[prop] = 0;
      else
          obj[prop] = index + 1;

      this.setState(obj);
  }
  goDown(prop){
    let obj = {};
    let index = this.state[prop];
    let max = this.state.face[prop].length-1;
    
      if (index !== 0)
          obj[prop] = index - 1;
      else
          obj[prop] = max;

      this.setState(obj);
  }
  render() {
    return (
      <div className="App">
        <Navbar inverse color="inverse">
          <NavbarBrand href="/">kismet</NavbarBrand>
        </Navbar>
        <div className="mt-3 container justify-content-md-center">
          <div className="row justify-content-md-center">
            <Adorable color={this.state.color} eyes={this.state.face.eyes[this.state.eyes]} nose={this.state.face.nose[this.state.nose]} mouth={this.state.face.mouth[this.state.mouth]}  />
          </div>
          <div className="row justify-content-md-center mt-1">
            <input className="form-control" type="color" value={this.state.color} onChange={this.changeColor} />
          </div>
          <div className="row justify-content-md-center mt-1">
            <Switch name={'eyes'} goDown={this.goDown} goUp={this.goUp} />
          </div>
          <div className="row justify-content-md-center mt-1">
            <Switch name={'nose'} goDown={this.goDown} goUp={this.goUp} />
          </div>
          <div className="row justify-content-md-center mt-1">
            <Switch name={'mouth'} goDown={this.goDown} goUp={this.goUp} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
