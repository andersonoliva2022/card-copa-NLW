/*
function change() {

    var event = document.querySelector('.card');

    if (event.style.backgroundImage === 'url(./assets/bg-ignit.svg)') {
        event.style.backgroundImage = 'url(./assets/bg-explorer.svg)'
    } else {
        event.style.backgroundImage = 'url(./assets/bg-ignit.svg)'
    }

}
*/
 //ignit = 'url(./assets/bg-ignit.svg)';
//explorer = 'url(./assets/bg-explorer.svg)';

let explorer = true;
function change() {

    const event = document.querySelector('.card');
    const backgroundImage = explorer? 'url(./assets/green.svg)': 'url(./assets/blue.svg)' 
    explorer = !explorer; // valor "false" difere de "!explorer"

    event.style.backgroundImage = backgroundImage;
}