

const inputElement = document.querySelector('.inputBox');
const buttonElement = document.querySelector('.button');
const formElement = document.getElementById('form');
const clickedElement = document.getElementById('clicked');
const showResultElement = document.getElementById('showRsult');
const correctGuesseCountElement = document.getElementById('correctGuesseCount');
const wrongGuesseCountElement = document.getElementById('wrongGuesseCount');
const resetButton = document.getElementById('reset');
const gameOverElement = document.getElementById('gameOver')

let clicked = 0;
let correctGuese = 0;
let wrongGuese = 0;
clickedElement.textContent = clicked;
correctGuesseCountElement.textContent = correctGuese;
wrongGuesseCountElement.textContent = wrongGuese;


formElement.addEventListener('submit', (e) => {
    e.preventDefault()
    const guessingNumber = Math.floor(Math.random() * 10)
    let guesed = +(inputElement.value);
   
    console.log(guessingNumber, guesed)

    let liNode = document.createElement('li')
    let rightText = document.createTextNode('Your answer is right! ' + 'Right Number was ' + guessingNumber + ' Your number was ' + guesed);
    let wrongText = document.createTextNode('Your answer is wrong! ' + 'Right Number was ' + guessingNumber + ' Your number was ' + guesed);
    inputElement.value = '';
    
    if (guesed === '' || guesed >= 10) {
        alert('Please Enter number between 0-9')
    }else if (guessingNumber == guesed) {
        liNode.classList.add('success')
        liNode.appendChild(rightText);
        showResultElement.appendChild(liNode);
        clicked += 1;
        clickedElement.textContent = clicked;
        correctGuese += 1;
        correctGuesseCountElement.textContent = correctGuese;

        if (clicked == 5) {
            clicked = 0;
            gameOverElement.classList.add('success')
            gameOverElement.innerHTML = 'Game is over You have own the game'
            // alert('Game is over');
            clickedElement.textContent = clicked;
            correctGuese = 0;
            wrongGuese = 0;
            correctGuesseCountElement.textContent = correctGuese;
            showResultElement.innerHTML = '';
            setTimeout(() => {
                gameOverElement.innerHTML = ''
                gameOverElement.classList.remove('success');
            }, 3000);
        }
    } else {
        liNode.classList.add('danger')
        liNode.appendChild(wrongText);
        showResultElement.appendChild(liNode);
        clicked += 1;
        clickedElement.textContent = clicked;
        wrongGuese += 1;
        wrongGuesseCountElement.textContent = wrongGuese;
        if (clicked == 5) {
            clicked = 0;
            gameOverElement.classList.add('danger')
            gameOverElement.innerHTML = 'Game is over You have lost the game'
            // alert('Game is over');
            clickedElement.textContent = clicked;
            correctGuese = 0;
            wrongGuese = 0;
            wrongGuesseCountElement.textContent = wrongGuese;
            showResultElement.innerHTML = '';
            setTimeout(() => {
                gameOverElement.innerHTML = ''
                gameOverElement.classList.remove('danger');
            }, 3000);
        }
    }



    resetButton.addEventListener('click', (event) => {
        clicked = 0;
        correctGuese = 0;
        wrongGuese = 0;
        clickedElement.textContent = clicked;
        correctGuesseCountElement.textContent = correctGuese;
        wrongGuesseCountElement.textContent = wrongGuese;
        showResultElement.innerHTML = '';
   })  
})

