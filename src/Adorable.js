import React, { Component } from 'react';

class Adorable extends Component {
    render() {
        return (
            <div className="col-md d-flex justify-content-center">
                <img className="rounded" height="200" width="200" role="presentation" src={"https://api.adorable.io/avatars/face/eyes1/nose2/mouth1/" + this.props.color.slice(1)} />
            </div>
        );
    }
}

export default Adorable;