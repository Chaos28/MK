'use strict';

const player1 = {
	name: 'Scorpion',
	hp: 0,
	img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
	weapon: ['sword', 'spear'],
	attack() {
		console.log(this.name + ' Fight...')
	}
};

const player2 = {
	name: 'Subzero',
	hp: 0,
	img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
	weapon: ['hat', 'dagger'],
	attack() {
		console.log(this.name + ' Fight...')
	}
}

const createPlayer = function(className, playerData) {
	const playerClass = document.createElement('div');
	playerClass.classList.add(className);
	const progressBar = document.createElement('div');
	progressBar.classList.add('progressbar');
	const life = document.createElement('div');
	life.classList.add('life');
	life.style.width = '100%';
	const name = document.createElement('div');
	name.classList.add('name');
	name.innerText = playerData.name;

	const character = document.createElement('div');
	character.classList.add('character');
	const img = document.createElement('img');
	img.src = playerData.img

	const arena = document.querySelector('.root .arenas');
	arena.appendChild(playerClass);

	playerClass.appendChild(progressBar);
	progressBar.appendChild(life);
	progressBar.appendChild(name);

	playerClass.appendChild(character);
	character.appendChild(img)
}

createPlayer('player1', player1);
createPlayer('player2', player2);