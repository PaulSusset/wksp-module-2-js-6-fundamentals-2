// Exercise 1.2
// ----------

// STEP 1
// Reimplement the functionality of 1.1 (Try to NOT look at your previous solution)
// button one disappears
// button two turns 'crimson'
// button three turns 'lightblue'
// button four starts shaking... (animation provided in styles.css)

// STEP 2
// This time the buttons should toggle.
// Meaning if the user clicks on them a second time, it should go back to initial state.
// initial button color is 'gold'

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Hint:
// create a toggleColor function
// Because we are now going to work with the opacity and background of the buttons,
// they need to be set here. So that they are referencable via the the style attribute.
// initialize the background color for all of the buttons in here. (for loop)
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
    }
}


window.addEventListener('click', go)