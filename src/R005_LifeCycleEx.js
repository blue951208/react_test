import React, { Component } from "react";

class R005_LifeCycleEx extends Component {
    // constructor 함수중 가장 먼저 실행, 처음 한번만 실행된다.
    constructor(props) {
        super(props);
        this.state = {};
        console.log('R005 > 1. constructor Call');
    }

    render() {
        console.log('R005 > 3. render Call');
        return (
            <h2>[ THIS IS CONSTRUCTOR FUNCTION ]</h2>
        )
    }
}

export default R005_LifeCycleEx;