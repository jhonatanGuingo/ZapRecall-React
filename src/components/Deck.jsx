
import styled from 'styled-components';
import Flashcard from './Flashcard';


export default function Deck(props){
    const {id} = props;
    const {play, setPlay} = props;
    const {buscaID, setBuscaID} = props;
    const {contador, setContador} = props;
    const {cards} = props;

    return (
        <SCBody>
         {cards.map( card => <Flashcard 
        key = {id}
        contador = {contador}
        setContador = {setContador}
        play = {play} 
        setPlay = {setPlay} 
        buscaID = {buscaID}
        setBuscaID = {setBuscaID}
        cards = {card}/> )}
        </SCBody>
    )
}

const SCBody = styled.div`
 display:flex;
 flex-direction: column;
 margin-top: 10px;
 margin-bottom: 70px;
 justify-content: center;
 `

