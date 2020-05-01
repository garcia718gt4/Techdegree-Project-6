
// Global variables 
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btnReset = document.querySelector('a.btn__reset');
const overlay = document.getElementById('overlay');
const ul = document.querySelector('ul');

const missed = 0; 

const phrases = [
    'beat around the bush',
    'working hard or hardly working', 
    'better late than never',
    'break a leg',
    'so far so good',
]; 

/* ==============================
        Project Functions 
 ================================ */

/** 
* Returns a random phrase from an array.
* @param {array} arr - an array of phrases.
* @returns {string} a random string from the array. 
*/
const getRandomPhrasesAsArray = arr => {
    let randomNum = Math.floor(Math.random() * arr.length);
    return arr[randomNum];
}
// call the function and the return value in a variable; 
const randomPhrase = getRandomPhrasesAsArray(phrases);

// adds the individual letters of a string  
// as list items to the display
const addPhraseToDisplay = phrase => {
    for(let i = 0; i < phrase.length; i++){
        let li = document.createElement('li');
        li.textContent = phrase[i]; 
        ul.appendChild(li);
        if(li.textContent !== " ") {
            li.className = 'letter';
        } else {
            li.className = 'space';
        } 
    }
}
// call the function 
addPhraseToDisplay(randomPhrase);


// check if a letter is in the phrase 
const checkLetter = button => {
    let li = ul.children; 
    let match = null;
    for (let i = 0; i < li.length; i++) {
        if (li[i].className === 'letter') {
            if (li[i].textContent === button){ 
                li[i].className = 'show'; 
                match = li[i]; 
            }
        } 
    } 
    return match; 
}


// check if the game has been won or lost
const checkWin = () => {

}

// listen for the start game button to be pressed
btnReset.addEventListener('click', () => {
    overlay.style.display = 'none';  
}); 

// listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', e => {
    let button = e.target; 
    if (button.tagName === 'BUTTON') {
        let char = button.textContent; 
        button.className = 'chosen';
        button.setAttribute('disabled', 'true');
    }
    
}); 