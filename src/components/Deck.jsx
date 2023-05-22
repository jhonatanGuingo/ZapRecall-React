
import Flashcard from './Flashcard';
import { useState } from 'react';

export default function Deck(props){
    const {id} = props;
    const {play, setPlay} = props;
    const {buscaID, setBuscaID} = props;
  
    const {cards} = props;

    return (
        <>
         {cards.map( card => <Flashcard 
        play = {play} 
        setPlay = {setPlay} 
        buscaID = {buscaID}
        setBuscaID = {setBuscaID}
        cards = {card}/> )}
        </>
    )
}

