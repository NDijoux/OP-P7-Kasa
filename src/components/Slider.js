// traitement possible en css ou framework  = code sois même via css recommandé 

import React from 'react';
import { useState, useEffect } from 'react';
import ArrowRight from '../assets/ArrowRight.png';
import ArrowLeft from '../assets/ArrowLeft.png';

function Slider(rental) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [right, setRight] = useState(true);
    const slides = rental.data;

    useEffect(() => {
        slides.forEach((image) => {
            new Image().src = image;
        });
    });

    const previous = () => {
        setRight(false);
        const firstSlide = currentIndex === 0;
        const newIndex = firstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const next = () => {
        setRight(true);
        const lastSlide = currentIndex === slides.length - 1 ;
        const newIndex = lastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }
}

//export default Slider;

// LTD : gestion une image ou plusieurs + incorporation ou non des fleches actives. 
