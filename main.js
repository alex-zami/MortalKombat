

const player1 = {
	name: 'Scorpion',
	hp: 100,
	img: 'http://',
	weapon: ['chains', 'knife', 'sword'],
	
	attack: function() {
		console.log(player1.name + 'Fight...')
	},
};

const player2 = {
	name: 'Sub-Zero',
	hp: 100,
	img: 'http://',
	weapon: ['frost', 'knife', 'sword'],
	
	attack: function() {
		console.log(player2.name + 'Fight...')
	},
};


const $player = document.createElement('div');
    $player.classList.add(playerClass);

    const $arenas = document.querySelector('div.arenas');
    $arenas.appendChild($player);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');
    $player.appendChild($progressbar);

    const $character = document.createElement('div');
    $character.classList.add('character');
    $player.appendChild($character);

    const $life = document.createElement('div');
    $life.classList.add('life');
    $progressbar.appendChild($life);
    $life.innerText(hp);
    $life.style.width(100);

    const $name = document.createElement('div');
    $name.classList.add("name");
    $name.innerText(playerName);
    $progressbar.appendChild($name);

    const $img = document.createElement('img');
    $img.src = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';
    $character.appendChild($img);