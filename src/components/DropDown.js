// icone ou image = chevron fA react FA
// utiliser const false ou true sur ustate pour voir s'il est open ou non 

import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function DropDown({ txt, title, txtArray }) {
    const [dpOpen, dpClosed] = useState(false);

    const chevronUp = <FontAwesomeIcon icon={faChevronUp} />
    const chevronDown = <FontAwesomeIcon icon={faChevronDown} />

    ReactDOM.render(chevronUp, chevronDown, document.body)

    return dpOpen ? (
        <div>
            <button
                className="dropdown__button"
                type="button"
                onClick={() => dpClosed(false)}
            >
                <span>{title}</span>
                <i>{chevronUp}</i>
            </button>
            {txtArray ? (
                <div className="dropdown__array">
                    {txtArray.map((txte, e) => (
                        <p className="dropdown__array__p" key={e}>
                            {txte}
                        </p>
                    ))}
                </div>
            ) : (
                <p className="dropdown__p">{txt}</p>
            )}
        </div>
    ) : (
        <button
            className="dropdown__button"
            type="button"
            onClick={() => dpClosed(true)}
        >
            <span>{title}</span>
            <i>{chevronDown}</i>
        </button>
    );
}

export default DropDown