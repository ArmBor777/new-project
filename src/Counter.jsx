import React, {Component} from "react";

class Counter extends Component{
    constructor(props){
        super(props);
        this.value = 0;
        this.state = {
            value: 0
        };
    }

    handleClickPlus = () => {
        this.setState({
            value: this.state.value + 1
        })
        // this.state.value += 1;
    }

    render(){

        return(
            <div>
            Hello from Counter
            <p>The default value is {this.props.defaultValue}</p>

            <h3>{this.state.value}</h3>
            <button
            onClick = {() => {
                this.setState({
                    value: this.state.value - 1
                });
            }}
            >
                Count -
            </button>
            <button
            onClick = {this.handleClickPlus}
            >
                Count +
            </button>
            </div>
        )
    };
}

export {Counter};