import { update, goTown, goStore, goCave, buyHealth, buyWeapon, sellWeapon, fightSlime, fightBeast, fightDragon, goFight, attack, getMonsterAttackValue, isMonsterHit, dodge, defeatMonster, lose, winGame, restart, easterEgg, pickTwo, pickEight, pick } from './gameFunctions.js';
import { button1, button2, button3 } from './domElements.js';
import { locations } from './gameState.js';

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

goTown();