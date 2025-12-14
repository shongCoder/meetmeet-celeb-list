import React from 'react';
import './Header.css'
import Logo from '/img/logo.svg'
import Back from '/img/icon/back.svg'

function Header({isOpen, onClose}) {
    return (
        <>
            <header>
                {isOpen && (
                    <button onClick={onClose}>
                        <img src={Back} alt="뒤로가기" />
                    </button>
                )}
                <img src={Logo} alt="logo" />
            </header>
        </>
    );
}

export default Header;