let canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d')
let img = document.getElementById('img')
let gameData = document.getElementById('game-data')
//window.devicePixelRatio=1; //Blury Text
window.devicePixelRatio = 2;      //Clear Text
//(CSS pixels).
//Display Size
var size = 500;
canvas.style.width = size + "px";
canvas.style.height = size + "px";

var scale = 1;

canvas.width = Math.floor(size * scale);
canvas.height = Math.floor(size * scale);


const canvasH = canvas.height;
const canvasW = canvas.width;

let score = 0
let rightPressed = false
let leftPressed = false
let x, y, dx, dy, interval
let bricks = []
let paddleW, paddleX, paddleY, radius
let brickW = 41
let brickH = 10
let brickOffset = 7

setVariables()
drawBall()
drawPaddle()
startGame()

paddleNavigation()
createBrickArray()
drawScore()


function drawScore() {
    ctx.beginPath()
    ctx.font = "13px Arial";
    ctx.fillStyle = "#E58E3D"
    ctx.fillText("Score" + score, 10, 12,)
    ctx.closePath()
    gameData.textContent = score;
}

function createBrickArray() {

    for (let j = 0; j < 5; j++) {
        bricks[j] = []
        for (let i = 0; i < 10; i++) {
            bricks[j][i] = { x: 0, y: 0, isVisible: true }

        }
    }
}
function drawBricks() {

    for (let j = 0; j < 5; j++) {

        for (let i = 0; i < 10; i++) {
            if (bricks[j][i].isVisible) {
                const brickX = 10 + i * (brickW + brickOffset)
                const brickY = (12 + brickOffset) * (j + 1)
                bricks[j][i].x = brickX
                bricks[j][i].y = brickY
                ctx.beginPath()
                ctx.rect(brickX, brickY, brickW, 10)
                ctx.fillStyle = "#181C1D"
                ctx.fill()
                ctx.closePath()
            }
        }

    }

}

function paddleNavigation() {
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)

    function handleKeyDown(e) {
        if (e.key === "ArrowRight") {
            rightPressed = true
        }
        if (e.key === "ArrowLeft") {
            leftPressed = true
        }
    }
    function handleKeyUp(e) {
        if (e.key === "ArrowRight") {
            rightPressed = false
        }
        if (e.key === "ArrowLeft") {
            leftPressed = false
        }
    }
}


function setVariables() {
    // Ball Position Variables
    x = canvasW / 2
    y = canvasH - 20
    dx = 1
    dy = -1
    // Paddle Position variables
    paddleW = 70
    paddleX = canvasW / 2 - paddleW / 2
    paddleY = canvasH - 5
    radius = 5
}

function detectCollision() {

    if (x + dx >= canvasW || x + dx < 0) {
        dx = -dx
    }
    if (y + dy > canvasH - radius) {
        if (x + dx > paddleX && x + dx < (paddleX + paddleW)) {
            dy = -dy
        }
    }
    if (y + dy < 0) {
        dy = -dy
    }
    for (let b = 0; b < bricks.length; b++) {
        for (let i = 0; i < bricks[b].length; i++) {
            const brick = bricks[b][i]
            if (brick.isVisible) {
                if (x > brick.x && x < (brick.x + brickW) && y > brick.y && y < brick.y + brickH) {
                    bricks[b][i].isVisible = false
                    dy = -dy
                    score++
                    if (score === 50) {
                        alert("You have won the game");
                        document.location.reload();
                    }
                }
            }

        }

    }
}

function startGame() {
    interval = false
    if (!interval) {
        interval = setInterval(() => {
            if (rightPressed) {
                paddleX += 2;
            }
            if (leftPressed) {
                paddleX -= 2;
            }
            ctx.clearRect(0, 0, canvasW, canvasH)
            detectCollision()
            x = x + dx
            y = y + dy
            checkGameOver()
            drawBall()
            drawPaddle()
            drawBricks()
            drawScore()
        }, 6);
    }

}

function checkGameOver() {
    if (y === canvasH) {
        alert("Oops! Game over")
        clearInterval(interval)
        setVariables();


    }
}

function drawBall() {
    ctx.beginPath()
    ctx.arc(x, y, 8, 0, 2 * Math.PI, false)
    ctx.stroke();
    ctx.fill()
    ctx.closePath()
}
function drawPaddle() {
    ctx.beginPath()
    ctx.rect(paddleX, paddleY, paddleW, 40)
    ctx.fillStyle = "#E58E3D"
    ctx.fill()

    ctx.closePath()
}