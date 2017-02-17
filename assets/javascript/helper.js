var pokemon;            // Selected pokemon 
var pokeType;           // Selected type
var hitSound = "assets/sounds/hitsound.wav";
var error = "assets/sounds/error.mp3";
var runAway = "assets/sounds/runaway.mp3"

var electric = ["Thunderbolt", "Thunder", "Volt Switch", "Volt Tackle"];

var water = ["Surf", "Hydro Pump", "Water Gun", "Bubblebeam"];

var grass = ["Solar Beam", "Frenzy Plant", "Giga Drain", "Razor Leaf"];

var normal = ["Quick Attack", "Hyper Beam", "Body Slam", "Tackle"];

var flying = ["Aerial Ace", "Air Slash", "Drill Peck", "Peck"];

var fire = ["Fire Blast", "Ember", "Incinerate", "Flamethrower"];

var ground = ["Earthquake", "Mud Bomb", "Dig", "Fissure"];

var psychic = ["Psychic", "Confusion", "Future Sight", "Zen Headbutt"];

var bug = ["Bug Bite", "Fury Cutter", "Leech Life", "String Shot"];

var rock = ["Ancient Power", "Rock Blast", "Stone Edge", "Rollout"];

var ice = ["Ice Beam", "Blizzard", "Avalanche", "Aurora Veil"];

var poison = ["Poison Jab", "Cross Poison", "Acid Spray", "Sludge Bomb"];

var ghost = ["Curse", "Destiny Bond", "Shadow Ball", "Nightmare"];

var dark = ["Feint Attack", "Night Slash", "Sucker Punch", "Pursuit"];

var steel = ["Iron Tail", "Bullet Punch", "Metal Claw", "Magnet Bomb"];

var dragon = ["Dragon Claw", "Outrage", "Twister", "Dragon Pulse"];

var fairy = ["Fairy Wind", "Moonblast", "Dazzling Gleam", "Sweet Kiss"];
//ghost, psychic, dark,
		//	steel, dragon, fairy, fighting
 
var squirtle = {
	name: "Squirtle",
	type: water,
	img: "assets/images/squirtle.gif",
	cry: "assets/sounds/squirtle.mp3"
}

var arcanine = {
	name: "Arcanine",
	type: fire,
	img: "assets/images/arcanine.gif",
	cry: "assets/sounds/arcanine.mp3"
}

var bellossom = {
	name: "Bellossom",
	type: grass,
	img: "assets/images/bellossom.gif",
	cry: "assets/sounds/bellossom.mp3"
}

var pikachu = {
	name: "Pikachu",
	type: electric,
	img: "assets/images/pikachu.gif",
	cry: "assets/sounds/pikachu.mp3"
}

var wigglytuff = {
	name: "Wigglytuff",
	type: normal,
	img: "assets/images/wigglytuff.gif",
	cry: "assets/sounds/wigglytuff.mp3"
}

var gardevoir = {
	name: "Gardevoir",
	type: psychic,
	img: "assets/images/gardevoir.gif",
	cry: "assets/sounds/gardevoir.mp3"
}

var groudon = {
	name: "Groudon",
	type: ground,
	img: "assets/images/groudon.gif",
	cry: "assets/sounds/groudon.mp3"
}

var scyther = {
	name: "Scyther",
	type: bug,
	img: "assets/images/scyther.gif",
	cry: "assets/sounds/scyther.mp3"
}

pokemon = [squirtle, arcanine, bellossom, pikachu, wigglytuff, gardevoir, groudon, scyther];

pokeType = [water, fire, grass, electric, normal, psychic,
			bug, ground, rock, ice, poison, ghost, psychic, dark,
			steel, dragon, fairy, fighting];







