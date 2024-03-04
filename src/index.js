import './style.css';
import './fonts.css';

import { templateWelcomeHtml } from './templates/welcome';
import { templateAboutHtml } from './templates/about';
import { templateMenuHtml } from './templates/menu';



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

function renderMenuHtml () {
    let button = document.getElementById('menu');
    button.addEventListener('click', () => {
        document.getElementById('content').innerHTML = '';
        document.getElementById('content').innerHTML += templateMenuHtml();
    });
}

function main () {
    renderWelcomeHtml();
    renderAboutHtml();
    renderMenuHtml();
}

document.getElementById('content').innerHTML += templateWelcomeHtml();
main();