import React, { Component } from "react";
// import { Component } from "react";

class ToggleStatus extends Component {

    state = { status: true };

    turnOnStatus = () => {
        this.setState({ status: true })
    }
    turnOffStatus = () => {
        this.setState({ status: false })

    }

    render() {

        const { status } = this.state;
        return (
            <div className="app">
                <h1>{status ? "ON" : "OFF"}</h1>
                <button onClick={this.turnOffStatus}>OFF</button>
                <button onClick={this.turnOnStatus}>ON</button>
            </div>
        )
    }

};

export default ToggleStatus;