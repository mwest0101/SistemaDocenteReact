import React from 'react';
import Menu from "./Menu";


const Header = () => {
    return (
        <>
            <header className="border-bottom" id="mainMenu">
                <div className="menuSep"></div>
                <div className="menuPerfil">
                    <div id="nameAndLastName"></div>
                    <Menu />
                </div>
            </header>
        </>
    );
}

export default Header;