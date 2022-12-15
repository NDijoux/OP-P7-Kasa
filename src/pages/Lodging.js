import React, { useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import Rate from '../components/Rate';
import DropDown from '../components/DropDown';
//import Slider from '../components/DropDown';
import Data from '../data/Data.json';
//import '../style/pages/Lodging.css';

function Lodging() {
    const params = useParams();
    
    const navigate = useNavigate();
    useEffect(() => {
        let rental = Data.find((rental) => params.id === rental.id);
        if (!rental) {
            navigate('/notfound');
        }
    });

    //return
    // en attente de la fin du Slider 
}