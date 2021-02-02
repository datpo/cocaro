import React, { Component } from 'react'
// import aBoard from 'BoardData'
import { connect} from 'react-redux'
import io from 'socket.io-client';

class Cell extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // status:true,
            // display:" ",
            // player:1
            check: 0,
            player: 1
        }
        this.socket = null;
    }

//  // if(this.state.status){
//     if(this.state.player === 1){
//         this.setState({display:"X",
//                        player:2})

//      }else{
//         this.setState({display:"O",
//                        player:1})
//      }
//  //    this.setState({status:false});
//  //}

componentDidMount() {
    this.socket = io('localhost:6969');

    // this.socket.on('id', res => this.setState({user: res})) // lắng nghe event có tên 'id'
    this.socket.on('newMessage', (response) => { this.newMessage(response) }); //lắng nghe event 'newMessage' và gọi hàm newMessage khi có event



}
//   Khi có tin nhắn mới, sẽ push tin nhắn vào state mesgages, và nó sẽ được render ra màn hình
newMessage(m) {
    console.log("message: ", m.data);
    this.setState({
        arrayMessage: {
            players: m.data.players,
            row: m.data.row,
            col: m.data.col
        }
    });
    this.props.tasks[m.data.row][m.data.col] = m.data.players;

}

    onClickFuck = () => {
        // console.log("e: ", e);
        let col = this.props.col;
        let row = this.props.row;
        console.log("fuckyouyyL: ", this.props.player);
        let player = this.props.player;
        if (this.props.tasks[this.props.row][this.props.col] === 0) {
            if (this.props.player == 1) {
                this.setState({ check: 1 })
            } else {
                this.setState({ check: 2 })
            }
            // this.props
        }else return;
        this.props.onClickFuck(row, col, player)
        // call server
        console.log("palyer: ", player)
        this.props.sendMessage({players:player, row:row,col:col});

        // 

        // // nhan data
        // this.socket = io('localhost:6969');
       
        // // this.socket.on('id', res => this.setState({user: res})) // lắng nghe event có tên 'id'
        //  this.socket.on('newMessage', (response) => {this.newMessage(response)}); //lắng nghe event 'newMessage' và gọi hàm newMessage khi có event
    }


    // newMessage(m) {
    //     console.log("message: ", m.data);
    //     this.setState({arrayMessage:{players:m.data.players,
    //                                  row:m.data.row,
    //                                 col:m.data.col                    }});
    //     this.props.tasks[m.data.row][m.data.col] = m.data.players;                               
    // }

    tem = (row,col) => {
                   
                if (this.props.tasks[row][col] === 0) return " ";
                else {
                    if (this.props.tasks[row][col] === 1) return "X";
                    else return "O";   }                
       
    }

    render() {
        
        let quan = this.tem(this.props.row, this.props.col);
        console.log("Cell: ", this.props.tasks[1][1]);
        return (
            <button type="button" class="btn btn-danger"
                onClick={this.onClickFuck}
                style={{ width: 30, height: 30 }}
            >
                {quan}
            </button>
        )
    }
}

const mapStateToProp = (state) => {
    return {
        tasks: state.tasks
    }
}


export default connect(mapStateToProp,null)(Cell);