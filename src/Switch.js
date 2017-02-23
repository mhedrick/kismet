import React, { Component } from 'react';

class Switch extends Component {
    constructor(){
        super();

        this.goDown = this.goDown.bind(this)
        this.goUp = this.goUp.bind(this)
    }
    goUp(){
        this.props.goUp(this.props.name);
    }
    goDown(){
        this.props.goDown(this.props.name);
    }
    render() {
        return (
            <div className="col-md d-flex justify-content-center align-items-baseline">
              <button type="button" className="btn btn-outline-primary btn-sm" onClick={this.goDown}><i className="fa fa-chevron-left"></i></button>
              <span className="h2 align-self-center mx-4">{this.props.name}</span>
              <button type="button" className="btn btn-outline-primary btn-sm" onClick={this.goUp}><i className="fa fa-chevron-right"></i></button>
            </div>
        );
    }
}

export default Switch;