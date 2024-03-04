import './style.css';
import { templateWelcomeHtml } from './templates/welcome';

function renderWelcomeHtml () {
    document.getElementById('content').innerHTML += templateWelcomeHtml()
}

renderWelcomeHtml();