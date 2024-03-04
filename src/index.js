import './style.css';
import './fonts.css';
import { templateWelcomeHtml } from './templates/welcome';
import { templateAboutHtml } from './templates/about';



function renderAboutHtml () {
    let button = document.getElementById('about');
    button.addEventListener('click', () => {
        document.getElementById('content').innerHTML = '';
        document.getElementById('content').innerHTML += templateAboutHtml();
    });
}

function renderWelcomeHtml () {
    let button = document.getElementById('home');
    button.addEventListener('click', () => {
        document.getElementById('content').innerHTML = '';
        document.getElementById('content').innerHTML += templateWelcomeHtml();
    });
}

function main () {
    renderWelcomeHtml();
    renderAboutHtml();
}

document.getElementById('content').innerHTML += templateWelcomeHtml();
main();