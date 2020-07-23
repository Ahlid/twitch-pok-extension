import React, {useState} from 'react';
import './index.css'
import Pokeball from '../../assets/images/pokemon-ball-icon-28.jpg';
import MyPokemons from "../MyPokemons";
import WildPokemonEvent from '../WildPokemonEvent';

const menu = {
    MAIN: 0,
    MY_POKEMONS: 1,
    SHOP: 2,
    BADGES: 3,
    BAG: 4
};

const menuComponents = {
    [menu.MY_POKEMONS]: <MyPokemons/>
};


const menuItems = [
    {
        name: 'Pokemons',
        image: Pokeball,
        menu: menu.MY_POKEMONS
    },
    {
        name: 'Shop',
        image: 'https://image.flaticon.com/icons/png/512/188/188926.png ',
        menu: menu.SHOP
    },
    {
        name: 'Badges',
        image: 'https://2img.net/h/cdn.bulbagarden.net/upload/7/78/Earth_Badge.png',
        menu: menu.BADGES
    },

    {
        name: 'Items',
        image: 'https://vignette.wikia.nocookie.net/pokemongo/images/3/3e/Pok%C3%A9_Balls.png/revision/latest/scale-to-width-down/340?cb=20171114123735',
        menu: menu.BAG
    },


];

export default function MainMenu() {

    const [currentMenuItemSelected, setCurrentMenuItemSelected] = useState(menu.MAIN);

    return (
        <div>
            <div className="main-menu">
                <div className="main-menu-content">
                    {
                        menuItems.map(item => (
                            <div
                                className={"main-menu-item" + (currentMenuItemSelected === item.menu ? ' main-menu-item-active' : '')}
                                onClick={() => {
                                    setCurrentMenuItemSelected(currentMenuItemSelected === item.menu ? menu.MAIN : item.menu)
                                }}>
                                <p>{item.name}</p>
                                <img src={item.image}/>
                            </div>
                        ))
                    }
                </div>
                {currentMenuItemSelected !== menu.MAIN ?
                    <div className={"menu-item-selected"}>
                        {menuComponents[currentMenuItemSelected]}
                    </div>
                    : null}

            </div>
            <WildPokemonEvent/>
        </div>)
}