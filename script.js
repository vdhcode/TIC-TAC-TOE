console.log("Welcome to Tic Toc Toe");

let music = new Audio("music.mp3");
let nextTurn = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");
let turn = 'X'; // Initially turn will be 'X'
let isGameOver = false;

// Function to change the turn
const changeTurn = () => {
    return turn === 'X' ? 'O' : 'X';
}

// Function to check for Win
// Write all the winning combination
const checkWin = () => {
    let boxTexts = document.getElementsByClassName("boxText"); // Get all the boxes with class name 'boxText'
    let wins = [
        [0, 1, 2, 0, 5, 0],
        [3, 4, 5, 0, 15, 0],
        [6, 7, 8, 0, 25, 0],
        [0, 3, 6, -10, 15, 90],
        [1, 4, 7, 0, 15, 90],
        [2, 5, 8, 10, 15, 90],
        [0, 4, 8, 0, 15, 45],
        [2, 4, 6, 0, 15, 135]
    ];
    // Loop through each element of winning combination array
    wins.forEach(e => {
        if ((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[1]].innerText === boxTexts[e[2]].innerText) && (boxTexts[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxTexts[e[0]].innerText + " Won";
            isGameOver = true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "99px";
            document.querySelector('.line').style.width = "30vw";
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            // gameOver.play();
        }
    })
}

// Game Logic
let boxes = document.getElementsByClassName("box"); // Consider all the boxes whose class name matches "box".

// 1. Consider all the elements in "boxes" and loop thorugh them to perform specified operation(enter text based on whose turn it is) on whichever the element is selected.
// 2. Check if the selected box is empty or not. If it is empty, enter text based on its turn.
// 3. Chnage the Turn.
// 4. Play the next turn sound.
// 5. Check for win after every turn.
// 6. Show whose turn is next.
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector(".boxText"); // consider the box selected and add event listeners
    element.addEventListener("click", () => {
        if (isGameOver) {
            alert("Game is over. Please press the reset button to start again.");
        } else {
            if (boxText.innerText === "") {
                boxText.innerText = turn;
                turn = changeTurn();
                //nextTurn.play();
                checkWin();
                if (!isGameOver) {
                    document.getElementsByClassName("info")[0].innerText = " Turn for " + turn;
                }
            } else {
                alert("Select any empty box.");
            }
        }
    })
})

// Add onClick handler to reset the boxText field
reset.addEventListener("click", () => {
    let boxTexts = document.querySelectorAll('.boxText');
    Array.from(boxTexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    isGameOver = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector('.line').style.width = "0vw";
})

