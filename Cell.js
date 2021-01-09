import React, { Component } from 'react'
// import aBoard from 'BoardData'

class Cell extends Component {

    constructor(props) {
        super(props);
        this.state = {
            check: 0
        }
    }

    onClickFuck = () => {
        // console.log("e: ", e);
        let i = this.props.col;
        let j = this.props.row;
        if (this.state.check === 0) {
            
            this.setState({ check: 1 })
            // this.props
        }
        this.props.onClickFuck(i,j)
    }

    tem = () => {
        console.log("fuckyou")
        if (this.state.check === 0) return " ";
        else if (this.state.check === 1) return "X";
        else return "O";
    }

    render() {
        let qu = this.props.quanco === "O" ? "X" : "O";
        let quan = this.tem();
        console.log("11:", qu, this.props.row, this.props.col);
        return (
            <button type="button" class="btn btn-danger"
                onClick={this.onClickFuck}

            >
                {/* {this.state.check === 1?"X":" "} */}
                <label>{quan}</label>
            </button>
        )
    }
}
export default Cell;