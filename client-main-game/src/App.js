import React from 'react';
import $ from 'jquery';
import Messages from './message-list';
import Input from './input';
import _map from 'lodash/map';
import io from 'socket.io-client';
import { connect } from 'react-redux'

import './App.css';
import Board from './components/Board';

class App extends React.Component {
    constructor(props) {
        super(props);
        //Khởi tạo state,
        this.state = {
            messages: [
                // {id: 1, userId: 0, message: 'Hello'}
            ],
            user: null,
            arrayMessage: { players: 0, row: 0, col: 0 },
            status: true,
            display: " ",
            player: 1
        }
        this.socket = null;

    }

    

    //   Connetct với server nodejs, thông qua socket.io
    componentWillMount() {
        this.socket = io('localhost:6969');

        // this.socket.on('id', res => this.setState({user: res})) // lắng nghe event có tên 'id'
        //this.socket.on('newMessage', (response) => { this.newMessage(response) }); //lắng nghe event 'newMessage' và gọi hàm newMessage khi có event



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

        // const messages = this.state.messages;
        // let ids = _map(messages, 'id');
        // let max = Math.max(...ids);
        // messages.push({
        //     id: max+1,
        //     userId: m.id,
        //     message: m.data
        // });

        // let objMessage = $('.messages');
        // if (objMessage[0].scrollHeight - objMessage[0].scrollTop === objMessage[0].clientHeight ) {
        //     this.setState({messages});
        //     objMessage.animate({ scrollTop: objMessage.prop('scrollHeight') }, 300); //tạo hiệu ứng cuộn khi có tin nhắn mới

        // } else {
        //     this.setState({messages});
        //     if (m.id === this.state.user) {
        //         objMessage.animate({ scrollTop: objMessage.prop('scrollHeight') }, 300);
        //     }
        // }
    }
    //Gửi event socket newMessage với dữ liệu là nội dung tin nhắn
    sendnewMessage(m) {
        if (m) {
            this.socket.emit("newMessage", m); //gửi event về server
            // m.value = ""; 
        }
    }

    onClickTest = () => {
        // if(this.state.status){
        if (this.state.player === 1) {
            this.setState({
                display: "X",
                player: 2
            })

        } else {
            this.setState({
                display: "O",
                player: 1
            })
        }
        //    this.setState({status:false});
        //}
    }

    render() {
        console.log("app: ", this.state.arrayMessage);


        // return (
        //    <div className="app__content">
        //       <h1>chat box</h1>
        //       <div className="chat_window">
        //           <Messages user={this.state.user} messages={this.state.messages} typing={this.state.typing}/>
        //           <Input sendMessage={this.sendnewMessage.bind(this)}/>
        //       </div>
        //     </div>
        // )

        var canvas = () => {
            return (
                <div
                id='GameBoard'
                style={{
                  width: 400,
                  height: 400,
                  borderWidth: 400/ 50,
                }}>
                {/* {this.state.snake.map((snakePart, index) => {
                  return (
                    <div
                      key={index}
                      className='Block'
                      style={{
                        width: this.state.blockWidth,
                        height: this.state.blockHeight,
                        left: snakePart.Xpos,
                        top: snakePart.Ypos,
                        background: this.state.snakeColor,
                      }}
                    />
                  )
                })}
                <div
                  className='Block'
                  style={{
                    width: this.state.blockWidth,
                    height: this.state.blockHeight,
                    left: this.state.apple.Xpos,
                    top: this.state.apple.Ypos,
                    background: this.state.appleColor,
                  }}
                />
                <div id='Score' style={{ fontSize: this.state.width / 20 }}>
                  HIGH-SCORE: {this.state.highScore}&ensp;&ensp;&ensp;&ensp;SCORE:{' '}
                  {this.state.score}
                </div> */}
              </div>
            )
        }
        // var ctx = canvas.getContext();
        console.log("canvas:",canvas);

        return (
            <div className="app_content">
                <Board sendMessage={this.sendnewMessage.bind(this)} message={this.state.arrayMessage} receiveMessage={this.newMessage.bind(this)}></Board>

                <h1>TEsststtttttttt</h1>
                <button type="button" class="btn btn-danger"
                    onClick={this.onClickTest}
                    style={{ width: 30, height: 30 }}
                >
                    {this.state.display}
                </button>
                <h1>game snake</h1>
               {canvas}

            </div>
        )
    }
}

const mapStateToProp = (state) => {
    return {
        tasks: state.tasks
    }
}

const mapDispatcherToProp = (dispatch, props) => {
    return {
        // onAddTask : (task) =>{
        //     dispatch();
        // }
    }
}

export default connect(mapStateToProp, null)(App);
