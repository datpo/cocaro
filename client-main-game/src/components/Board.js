// import { Button } from 'antd';
import React, { Component } from 'react'
import { connect} from 'react-redux'


import Cell from './Cell';

class Board extends Component {

    constructor(props){
        super(props);
        this.state = {
            check:0,
            player:1,         
        }
    }

    onClick = (i,j, player)=>{
        debugger
        console.log("this.message: ", this.props.message.row);
        let players = 0;
        let row = 0;
        let col = 0;
        
        players = this.props.message.players;
        row = this.props.message.row;
        col = this.props.message.col;
        

        // temA[i][j] = player;
        // temA[row][col] = players;

        console.log("temA: ",this.props.tasks);
        // check win
        if(this.isWinner(i,j, player)){
            alert("fuckyouuuuuuuuuuuu");
        }
        
        // changing player
        let playerTem = player;
        playerTem = playerTem === 1? 2 : 1;
        this.setState({player:playerTem});      
        //  this.props.onAddTask("abc");
        // nhan message
        
    }

    isWinner = (row,col, player) =>{
        let count = this.count(row,col);
        // kiem tra theo chieu doc
        if(this.count(row,col,player) >= 5){
            return true;
        }
        // kiem tra theo chieu ngang
        if(this.countNgang(row,col,player) >= 5){
            return true;
        }
        // kiem tra theo duong cheo chinh
        if(this.countCheoChinh(row,col,player) >= 5){
            return true;
        }
        // kiem tra theo duong cheo phu
        if(this.countCheoPhu(row,col,player) >= 5){
            return true;
        }
          return false;
    }
    count = (row, col, player) =>{
      let count = 1;
      
      console.log("abour:",this.props.tasks)
      
      let a = row-1;
      while(a >= 0 && this.props.tasks[a][col] == player){          
          count = count + 1;
          a = a -1;
      }
      let d = row + 1;
      while(d <= 9 && this.props.tasks[d][col] == player){        
          count = count + 1;
          d = d+1;
      }
      return count;
    }

    countNgang = (row,col, player) =>{
        // debugger;
        let count = 1;
        let a = col-1;
        while(a >= 0 && this.props.tasks[row][a] == player){          
            count = count + 1;
            a = a -1;
        }
        let d = col + 1;
        while(d <= 9 && this.props.tasks[row][d] == player){        
            count = count + 1;
            d = d+1;
        }
        return count;
        
    }
    countCheoChinh = (row,col, player) =>{
        let count = 1;
        let ar = row-1;
        let ac = col -1;
        while(ar >= 0 && ac >=0 && this.props.tasks[ar][ac] == player){
            count = count + 1;
            ar--;
            ac--;
        }
        let dr = row +1;
        let dc = col+1;
        while(dr >= 0 && dc >=0 && this.props.tasks[dr][dc] == player){
            count = count + 1;
            dr++;
            dc++;
        }
        return count;
    }
    countCheoPhu = (row, col, player) => {
        let count = 1;
        let ar = row+1;
        let ac = col -1;
        while(ar >= 0 && ac >=0 && this.props.tasks[ar][ac] == player){
            count = count + 1;
            ar++;
            ac--;
        }
        let dr = row -1;
        let dc = col+1;
        while(dr >= 0 && dc >=0 && this.props.tasks[dr][dc] == player){
            count = count + 1;
            dr--;
            dc++;
        }
        return count;
    }

    // test loop for with two demention array
    qu = () => {
        for(let i = 1; i < 10; i ++){
            for(let j = 1; j < 10; j++){
                return <Cell quanco="X"  onClickFuck = {this.onClick} row = {i} col = {j}/> ;
            }
        }
    }

    render() {
       
        console.log("task: ", this.props.tasks);

        var board = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
        
        var column = board.map((item, index1) => {
            return (
                <div>{
                    board.map((item, index2) => {
                        return (               
                            <Cell quanco="X" player={this.state.player} onClickFuck = {this.onClick} row={index1} col={index2} sendMessage = {this.props.sendMessage}/>            
                        )
                    })}
            
                </div>
            )
        })       
            
        return (
            <div>
             {column}       
           </div>
        )
        
    }
}

const mapStateToProp = (state) => {
    return {
        tasks: state.tasks
    }
}

const mapDispatcherToProp = (dispatch, props) =>{
    return {
        // onAddTask : (task) =>{
        //     dispatch();
        // }
    }
}


export default connect(mapStateToProp, mapDispatcherToProp)(Board);