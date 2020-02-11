// Exercise 1.3
// ----------

// STEP 1
// Reimplement the functionality of 1.1 and 1.2
// - button one disappears
// - button two turns 'crimson'
// - button three turns 'lightblue'
// - button four starts shaking... (animation provided in styles.css)
// - This time the buttons should toggle.
// - Meaning if the user clicks on them a second time, it should go back to initial state.
// - initial button color is 'gold'
// - initial opacity is '100'

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// STEP 2
// The new RESET button should reset all of the buttons to their original state.

// HINT:
// to remove the 'jitters' class, check the length of the classList.
for (i=1; i<5; i++){
    document.getElementById(`btn-${i}`).style.backgroundColor = 'gold';
};
function toggleColor(button, color){
    if (button.style.backgroundColor != 'gold'){
        button.style.backgroundColor = 'gold';
        console.log('red')
    } else {button.style.backgroundColor = color; console.log('blue')}
}

function go(event){
    let x = event.target.id;
    let buttonID = document.getElementById(x)
    switch (x) {
        case 'btn-1':
            if (document.getElementById('btn-1').style.opacity === '0'){
                document.getElementById('btn-1').style.opacity = '1';
            } else {document.getElementById('btn-1').style.opacity = '0'}
            break;
        case 'btn-2' :
            toggleColor(buttonID, 'crimson')
            break;
        case 'btn-3' :
            toggleColor(buttonID, 'lightblue')
            break;
        case 'btn-4' :
            document.getElementById('btn-4').classList.toggle('jitters');
            break;
        case 'reset' :
            document.getElementById('btn-1').style.opacity = '1';
            document.getElementById(`btn-2`).style.backgroundColor = 'gold'
            document.getElementById(`btn-3`).style.backgroundColor = 'gold'
            if (document.getElementById('btn-4').classList.length === 1){
                document.getElementById('btn-4').classList.remove('jitters')
            }
    }
}


window.addEventListener('click', go)