
// Global variables 
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btnReset = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
let hearts = document.querySelector('li img');


let missed = 0; 

let phrases = [
    'beat around the bush',
    'working hard or hardly working', 
    'better late than never',
    'break a leg',
    'so far so good',
]; 

/* ==============================
        Project Functions 
 ================================ */

// listen for the start game button to be pressed
btnReset.addEventListener('click', () => {
    overlay.style.display = 'none'  

    const randomPhrase = getRandomPhrasesAsArray(phrases);
    addPhraseToDisplay(randomPhrase);
}); 


function getRandomPhrasesAsArray (phrase) {
    let randomNum = Math.floor(Math.random() * phrase.length);
    let newPhrase = phrase[randomNum]; 
    let randomPhrase = newPhrase.split('');
    return randomPhrase; 
}


// adds the individual letters of a string  
// as list items to the display
function addPhraseToDisplay (arr){
    const ul = document.querySelector('#phrase ul');

    for (let i = 0; i < arr.length; i++) {  
        const li = document.createElement('li');
        li.textContent = arr[i]; 
        if(li.textContent !== " ") {
            li.className += ' letter';
        } else {
            li.className += ' space';
        } 
        ul.appendChild(li); 
    }
}



// check if a letter is in the phrase 
function checkLetter(button){  
    const lis = document.querySelectorAll('.letter');
    let match = null;  
    for (let i = 0; i < lis.length; i++) {
        const character = lis[i].textContent; 
         if (button.textContent === character){ 
                lis[i].className += ' show'; 
                match = character;
            }   
    } 
        if (match !== '') {
            return match; 
        } else {
            return null; 
        }
    
}


// listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', e => {
    let button_press = e.target; 
    if (button_press.tagName === 'BUTTON') {
        button_press.className += ' chosen';
        button_press.setAttribute('disabled', 'true'); 
        const letterFound = checkLetter(button_press);
        if (letterFound === null) {
            // remove a heart
            const hearts = document.querySelectorAll('#scoreboard img');
            const lostHeart = hearts[missed];
            lostHeart.setAttribute('src', 'images/lostHeart.png');
            missed += 1; 
         }
         checkWin();
    }  
   
}); 

// check if the game has been won or lost
function checkWin () {
    const li_show = document.querySelectorAll('#phrase .show');
    const li_letter = document.querySelectorAll('#phrase .letter'); 
    const message = document.querySelector('#overlay .title');

    function results () {
        phrase.style.display = 'none'
        overlay.style.display = 'flex'; 
        btnReset.style.display = 'none'; 
    }
        if (li_letter.length === li_show.length) {
            overlay.className = 'win';
            message.textContent = 'You won!'; 
            results();
        } else if (missed > 4) {
            overlay.className = 'lose'; 
            message.textContent = 'You lost :(';
            results(); 
         }

}




