'use strict';

import { Pokemon } from './pokemon'

let pokemonOfAsh: Pokemon[] = initializePokemon();

// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.

// Ash has a few pokemon.
// A wild pokemon appeared!

let wildPokemon: Pokemon = new Pokemon('Oddish', 'leaf', 'water');


function initializePokemon(): Pokemon[] {
    return [
        new Pokemon('Balbasaur', 'leaf', 'water'),
        new Pokemon('Pikachu', 'electric', 'water'),
        new Pokemon('Charizard', 'fire', 'leaf'),
        new Pokemon('Squirtle', 'water', 'fire'),
        new Pokemon('Kingler', 'water', 'fire')
    ];
}

// Which pokemon should Ash use?
for (let i = 1; i < pokemonOfAsh.length; i++) {
    if (pokemonOfAsh[i].effectiveAgainst == wildPokemon.type) {
        console.log('I choose you, ' + pokemonOfAsh[i].name);
    }
}

