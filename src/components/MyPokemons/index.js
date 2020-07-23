import React, {useState} from 'react';
import './index.css'

export default function MyPokemons() {

    const pokemons = [
        {
            name: 'Charmander',
            type: ['Fire'],
            image: 'https://github.com/fanzeyi/pokemon.json/blob/master/images/004.png?raw=true',
            stats: {
                "HP": 45,
                "Attack": 49,
                "Defense": 49,
                "Sp. Attack": 65,
                "Sp. Defense": 65,
                "Speed": 45
            }
        },

        {
            name: 'Bulbasaur',
            type: ['Grass', 'Poison'],
            image: 'https://github.com/fanzeyi/pokemon.json/blob/master/images/001.png?raw=true',
            stats: {
                "HP": 45,
                "Attack": 49,
                "Defense": 49,
                "Sp. Attack": 65,
                "Sp. Defense": 65,
                "Speed": 45
            }
        },

        {
            name: 'Squirtle',
            type: ['Water'],
            image: 'https://github.com/fanzeyi/pokemon.json/blob/master/images/007.png?raw=true',
            stats: {
                "HP": 45,
                "Attack": 49,
                "Defense": 49,
                "Sp. Attack": 65,
                "Sp. Defense": 65,
                "Speed": 45
            }
        }
    ]

    return (
        <div className={"my-pokemons"}>
            {pokemons.map(pokemon => (
                <div className={"my-pokemon"}>
                    <div className={"my-pokemon-image-container"}>
                        <img src={pokemon.image}/>
                    </div>
                    <div className={"my-pokemon-info"}>
                        <div className={"my-pokemon-info-content"}>
                            <h3 className={"my-pokemon-name"}>
                                {pokemon.name} - {pokemon.type.join("/")}
                            </h3>
                            <div className={"my-pokemon-stats"}>
                                {Object.keys(pokemon.stats).map(stat => (
                                    <div className={"my-pokemon-stat"}><p>{stat}: {pokemon.stats[stat]}</p></div>
                                ))}
                            </div>
                        </div>
                        <div className={"my-pokemon-info-actions"}>
                            <button className={"my-pokemon-info-action-button"}>release</button>
                            <button className={"my-pokemon-info-action-button"}>trade</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}