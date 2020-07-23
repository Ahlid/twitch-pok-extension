import React, {useEffect, useState} from 'react'

import './index.css'

export default function WildPokemonEvent() {

    const [visible, setVisible] = useState(false);

    const pokemon = {
        name: 'Mew',
        level: 70,
        type: ['Psychic'],
        image: 'https://github.com/fanzeyi/pokemon.json/blob/master/images/151.png?raw=true',
        stats: {
            "HP": 45,
            "Attack": 49,
            "Defense": 49,
            "Sp. Attack": 65,
            "Sp. Defense": 65,
            "Speed": 45
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setVisible(true);
        }, 100)
    }, [visible]);

    return (
        <div className={'wild-wrapper' + (visible ? " visible" : "")}>
            <h3 style={{color: 'white'}}>A wild pokemon appeard!</h3>
            <div className={"wild-pokemon"}>
                <div className={"wild-pokemon-image-container"}>
                    <img src={pokemon.image}/>
                </div>
                <div className={"wild-pokemon-info"}>
                    <div className={"wild-pokemon-info-content"}>
                        <h3 className={"wild-pokemon-name"}>
                            {pokemon.name} {pokemon.level} - {pokemon.type.join("/")}
                        </h3>
                        <div className={"wild-pokemon-stats"}>
                            {Object.keys(pokemon.stats).map(stat => (
                                <div className={"wild-pokemon-stat"}><p>{stat}: {pokemon.stats[stat]}</p></div>
                            ))}
                        </div>
                    </div>
                    <div className={"wild-pokemon-info-actions"}>
                        <button className={"wild-pokemon-info-action-button"}>Throw Pokeball (x5)</button>
                        <button className={"wild-pokemon-info-action-button"}>Throw Greatball (x1)</button>
                    </div>
                </div>
            </div>
        </div>
    )
}