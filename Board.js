import React, { Component } from 'react'
import {Row, Col} from 'antd'
import Cell from './Cell';

class Board extends Component {

    constructor(props){
        super(props);
        this.state = {
            check:0,
            aBoard: [[1,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0]
            ,[0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0]]
        }
    }

    onClick = (i,j)=>{
        // console.log("efuck: ",e);
        let temA = this.state.aBoard;
        temA[j][i] = 1;
        this.setState({aBoard:temA});
        console.log("temA: ",this.state.aBoard);
        if(this.isWinner(i,j)){
            alert("fuckyouuuuuuuuuuuu");
        }
       
        
    }

    isWinner = (row,col) =>{
        let count = this.count(row,col);
        // kiem tra theo chieu doc
        if(this.count(row,col) >= 5){
            return true;
        }
        // // kiem tra theo chieu ngang
        // if(this.countNgang(row,col) >= 5){
        //     return true;
        // }
        // // kiem tra theo duong cheo chinh
        // if(this.countCheoChinh(row,col) >= 5){
        //     return true;
        // }
        // // kiem tra theo duong cheo phu
        // if(this.countCheoPhu(row,col) >= 5){
        //     return true;
        // }
         return false;
    }
    count = (row, col) =>{
      let count = 1;
      debugger
      console.log("abour:",this.state.aBoard)
      
      let a = row-1;
      while(a >= 0 && this.state.aBoard[a][col] === 1){          
          count = count + 1;
          a = a -1;
      }
      let d = row + 1;
      while(d <= 9 && this.state.aBoard[d][col] === 1){        
          count = count + 1;
          d = d+1;
      }
      return count;
    }

    countNgang = (row,col) =>{
        let count = 1;
        let a = col-1;
        while(a >= 0 && this.state.aBoard[row][a] === 1){          
            count = count + 1;
            a = a -1;
        }
        let d = row + 1;
        while(d <= 9 && this.state.aBoard[row][d] === 1){        
            count = count + 1;
            d = d+1;
        }
        return count;
        
    }
    countCheoChinh = (row,col) =>{
        let count = 1;
        let ar = row-1;
        let ac = col -1;
        while(ar >= 0 && ac >=0 && this.state.aBoard[ar][ac] === 1){
            count = count + 1;
            ar--;
            ac--;
        }
        let dr = row +1;
        let dc = col+1;
        while(dr >= 0 && dc >=0 && this.state.aBoard[dr][dc] === 1){
            count = count + 1;
            dr++;
            dc++;
        }
        return count;
    }
    countCheoPhu = (row, col) => {
        let count = 1;
        let ar = row+1;
        let ac = col -1;
        while(ar >= 0 && ac >=0 && this.state.aBoard[ar][ac] === 1){
            count = count + 1;
            ar++;
            ac--;
        }
        let dr = row -1;
        let dc = col+1;
        while(dr >= 0 && dc >=0 && this.state.aBoard[dr][dc] === 1){
            count = count + 1;
            dr--;
            dc++;
        }
        return count;
    }

    qu = () => {
        for(let i = 1; i < 10; i ++){
            for(let j = 1; j < 10; j++){
                return <Cell quanco="X" onClickFuck = {this.onClick} row = {i} col = {j}/> ;
            }
        }
    }

    render() {
        // console.log("f1:",this.qu)
        // let qu = this.qu;
        console.log("abc: ",this.count(4,0));
        var board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        var temp = board.map((item, index) => {
            return (               
                <Cell quanco="X" onClickFuck = {this.onClick} />            
            )
        })
        var column = board.map((item, index1) => {
            return (
                <div>{
                    board.map((item, index2) => {
                        return (               
                            <Cell quanco="X" onClickFuck = {this.onClick} row={index1} col={index2} aBoard={this.state.aBoard}/>            
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

export default Board;