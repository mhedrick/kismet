import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Adorable from './Adorable';

//

class App extends Component {
  constructor() {
    super();
    this.state = {
      face: {
        eyes: [],
        nose: [],
        mouth: []
      },
      color: '#ffff00'
    };
    this.changeColor = this.changeColor.bind(this);
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
  render() {
    return (
      <div className="App">
        <Navbar inverse color="inverse">
          <NavbarBrand href="/">kismet</NavbarBrand>
        </Navbar>
        <div className="mt-3 container justify-content-md-center">
          <div className="row justify-content-md-center">
            <div className="col-md d-flex align-items-end justify-content-between flex-column">
              <button type="button" className="btn btn-primary btn-sm"><i className="fa fa-chevron-left"></i></button>
              <button type="button" className="btn btn-primary btn-sm"><i className="fa fa-chevron-left"></i></button>
              <button type="button" className="btn btn-primary btn-sm"><i className="fa fa-chevron-left"></i></button>
            </div>
            <Adorable color={this.state.color} />
            <div className="col-md d-flex align-items-start justify-content-between flex-column">
              <button type="button" className="btn btn-primary btn-sm"><i className="fa fa-chevron-right"></i></button>
              <button type="button" className="btn btn-primary btn-sm"><i className="fa fa-chevron-right"></i></button>
              <button type="button" className="btn btn-primary btn-sm"><i className="fa fa-chevron-right"></i></button>
            </div>
          </div>
          <div className="row justify-content-md-center mt-1">
            <input className="form-control" type="color" value={this.state.color} onChange={this.changeColor} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
