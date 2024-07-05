import{ COORDINATES8MAP, PLAYER, STEP_LENGHT }
from './constants.js';
const diceButtonElement = document.querySelector('#dice-btn');
const playerPiecesElements = {
    p1:
    document.querySelectorAll('[player-id="p1"].player-piece')
    p2:
    document.querySelectorAll('[player-id="p2"]')
}