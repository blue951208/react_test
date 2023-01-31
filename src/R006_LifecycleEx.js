import React, { Component } from "react";

class R006_LifecycleEx extends Component {
    // 생명주기 함수에서 constructor() 다음으로 실행되는 함수
    static getDerivedStateFromProps(props, state) {
        console.log('R006_LifecycleEx > 2. getDerivedStateFromProps Call : '+props.prop_value);
        return {};
    }
    constructor(props) {
        super(props);
        this.state = {};
        console.log('R006_LifecycleEx > 1. constructor Call');
    }

    render() {
        console.log('R006_LifecycleEx > 3. render Call');
        return (
            <h2>[ THIS IS CONSTRUCTOR FUNCTION ]</h2>
        )
    }
}

export default R006_LifecycleEx;