import React from 'react';
import '../style/components/Banner.css';
import logo from '../assets/logo.png';
import { link } from 'react-router-dom';


function Banner() {
    return (
        <div className='headerContainer'>
            <nav>
                <img src={logo} alt='Kasa' className='headerLogo' />
                <ul>
                    <li>
                        <link className='headerLink'>Accueil</link>
                    </li>
                    <li>
                        <link className='headerLink'>A propos</link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Banner