import { ReactDOM } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarSharp } from '@fortawesome/free-solid-svg-icons';

function Rate(rating) {
    const range = [1, 2, 3, 4, 5];

    const star = <FontAwesomeIcon icon={faStarSharp} />
    ReactDOM.render(star, document.body)
}
