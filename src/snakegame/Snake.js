import React, { Component } from 'react'


class Snake extends Component {

    constructor(props) {
        super(props);
        this.state = {
            snake: [{ Xpos: 1, Ypos: 1 }, { Xpos: 1, Ypos: 2 }, { Xpos: 2, Ypos: 2 }],
            apple: { Xpos: 4, Ypos: 4 },
            width: 400,
            height: 400,
            xDirect: 0,
            yDirect: 0,
            blockWidth: 40,
            blockHeight: 40,
            snakeColor: 'red',
            gameLoopTimeout: 50,
            directionChanged: false,
            direction: 'right'
        }

        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleKeyDown(event) {
        console.log("keycode:", event.keyCode);
        switch (event.keyCode) {
            case 37: {
                this.moveLeft();
                break;
            }
            case 38: {
                this.moveUp();
                break;
            }
            case 39: {
                this.moveRight();
                break;
            }
            case 40: {
                this.moveDown();
                break;
            }

        }
    }

    moveLeft = () => {
        var leng = this.state.snake.length;
        var temA = [];
        let headerX = this.state.snake[0].Xpos;
        let headerY = this.state.snake[0].Ypos;
        headerX = headerX - 1;

        if ((headerX === this.state.apple.Xpos) && (headerY === this.state.apple.Ypos)){console.log("this.hể")
            temA.push({ Xpos: headerX, Ypos: headerY });
            for (let i = 0; i < leng; i++) {
                temA.push(this.state.snake[i]);
            }
        } else {
            temA.push({ Xpos: headerX, Ypos: headerY });
            for (let i = 0; i < leng-1; i++) {
                temA.push(this.state.snake[i]);
            }
        }
        this.setState({ snake: temA });
        this.setState({ direction: 'left' });
        return;
    }
    moveRight = () => {
        var leng = this.state.snake.length;
        console.log(this.state.snake);
        console.log("a1:", this.state.snake[1])
        var temA = [];
        let headerX = this.state.snake[0].Xpos;
        let headerY = this.state.snake[0].Ypos;
        headerX = headerX + 1;

        if ((headerX === this.state.apple.Xpos) && (headerY === this.state.apple.Ypos)){console.log("this.hể")
            temA.push({ Xpos: headerX, Ypos: headerY });
            for (let i = 0; i < leng; i++) {
                temA.push(this.state.snake[i]);
            }
        } else {
            temA.push({ Xpos: headerX, Ypos: headerY });
            for (let i = 0; i < leng-1; i++) {
                temA.push(this.state.snake[i]);
            }
        }
        console.log("temA:", temA)
        this.setState({ snake: temA });
        this.setState({ direction: 'right' });
        return;
    }
    moveUp = () => {
        var leng = this.state.snake.length;
        var temA = [];
        let headerX = this.state.snake[0].Xpos;
        let headerY = this.state.snake[0].Ypos;
        headerY = headerY - 1;

        if ((headerX === this.state.apple.Xpos) && (headerY === this.state.apple.Ypos)) {
            console.log("this.hê")
            temA.push({ Xpos: headerX, Ypos: headerY });
            for (let i = 0; i < leng; i++) {
                temA.push(this.state.snake[i]);
            }
        } else {

            temA.push({ Xpos: headerX, Ypos: headerY });
            for (let i = 0; i < leng-1; i++) {
                temA.push(this.state.snake[i]);
            }
        }
        this.setState({ snake: temA });
        this.setState({ direction: 'up' });
        return;
    }
    moveDown = () => {
        var leng = this.state.snake.length;
        var temA = [];
        let headerX = this.state.snake[0].Xpos;
        let headerY = this.state.snake[0].Ypos;
        headerY = headerY + 1;

        if ((headerX === this.state.apple.Xpos) && (headerY === this.state.apple.Ypos)) {
            console.log("this.hê")
            temA.push({ Xpos: headerX, Ypos: headerY });
            for (let i = 0; i < leng; i++) {
                temA.push(this.state.snake[i]);
            }
        } else {

            temA.push({ Xpos: headerX, Ypos: headerY });
            for (let i = 0; i < leng-1; i++) {
                temA.push(this.state.snake[i]);
            }
        }

        this.setState({ snake: temA });
        this.setState({ direction: 'down' });
        return;
    }


    handleClick = id => {
        console.log(id);
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
        this.gameLoop();
    }

    gameLoop() {
        setTimeout(() => {
            this.moveSnake()
            this.setState({ directionChanged: false })
            this.gameLoop();
        }, 1000);
    }

    moveSnake() {

        switch (this.state.direction) {
            case 'left': { this.moveLeft(); break; }
            case 'right': { this.moveRight(); break; }
            case 'up': { this.moveUp(); break; }
            case 'down': { this.moveDown(); break; }
        }
        // this.moveRight();

        // this.moveDown();
        // this.moveLeft();
        // this.moveUp();
    }

    initGame() {

    }

    // moved head
    moveHead() {
        switch (this.state.direction) {
            case 'left':
                this.moveHeadLeft()
                break
            case 'up':
                this.moveHeadUp()
                break
            case 'right':
                this.moveHeadRight()
                break
            default:
                this.moveHeadDown()
        }
    }

    drawHeadSnake = () => {
        const canvas = this.refs.canvas;
        console.log("context:", canvas.getContext("2d"));
        var ctx = canvas.getContext("2d");
        return (
            ctx.fillRect(9 * 40, 1 * 40, 40, 40)
        )
    }

    render() {
        return (
            <div
                id='GameBoard'
                style={{
                    width: this.state.width,
                    height: this.state.height,
                    borderWidth: this.state.width / 50,
                    border: 'solid'
                }}
            >
                {this.state.snake.map((snakePart, index) => {
                    return (
                        <div
                            key={index}
                            className='Block'
                            style={{
                                width: this.state.blockWidth,
                                height: this.state.blockHeight,
                                left: snakePart.Xpos * 40,
                                top: snakePart.Ypos * 40,
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
                        left: this.state.apple.Xpos * 40,
                        top: this.state.apple.Ypos * 40,
                        background: 'green',
                    }}
                />
                    )


            </div>
        )
    }
}

export default Snake;