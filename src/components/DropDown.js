// icone ou image = chevron fA react FA
// utiliser const false ou true sur ustate pour voir s'il est open ou non 

import React, { useState } from "react";
import ArrowTop from '../assets/ArrowTop.png';
import ArrowDown from '../assets/ArrowDown.png';

function DropDown({ info, title, txtArray }) {
    const [dpOpen, dpClosed] = useState(false);

    /*const chevronUp = <FontAwesomeIcon icon={faChevronUp} />
    const chevronDown = <FontAwesomeIcon icon={faChevronDown} />

    ReactDOM.render(chevronUp, chevronDown, document.body)

    // à modifier plus = JS 18 non compatible */

    return dpOpen ? (
        <div>
            <button
                className="dropdown__button"
                type="button"
                onClick={() => dpClosed(false)}
            >
                <span>{title}</span>
                <img src={ArrowTop} alt="flèche du haut" />
            </button>
            {txtArray ? (
                <div className="dropdown__array">
                    {txtArray.map((info, e) => (
                        <p className="dropdown__array__p" key={e}>
                            {info}
                        </p>
                    ))}
                </div>
            ) : (
                <p className="dropdown__p">{info}</p>
            )}
        </div>
    ) : (
        <button
            className="dropdown__button"
            type="button"
            onClick={() => dpClosed(true)}
        >
            <span>{title}</span>
            <img src={ArrowDown} alt="flèche du bas" />
        </button>
    );
}

export default DropDown