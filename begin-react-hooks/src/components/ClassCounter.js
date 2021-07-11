import React, { Component } from 'react'

export class ClassCounter extends Component {
    constructor(props){
        super(props);
        this.state = {
           count: 1
        }
    }
    incrementCount = () => {
        this.setState({
            count: this.state.count + 1,
        })
    }
    decrementCount = () => {
        this.setState({
            count: this.state.count - 1,
        })
    }
    render() {
        return (
            <>
                <h2>Class Component</h2>
                <button onClick={this.decrementCount}>Minus</button>
                {this.state.count}
                <button onClick={this.incrementCount}>Plus</button>
            </>
        )
    }
}

export default ClassCounter
