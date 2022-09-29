'use strict';
import '../scss/main.scss';

const hamburguerButton = document.querySelector('.js-hamburguer');
const hamburguerMenu = document.querySelector('.js-menu_hamburguer');

function seeHamburgerMenu() {
  hamburguerMenu.classList.toggle('hidden');
}
hamburguerButton.addEventListener('click', seeHamburgerMenu);
