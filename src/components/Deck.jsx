
import Flashcard from './Flashcard';


export default function Deck(props){
    const {id} = props;
    const {play, setPlay} = props;
    const {buscaID, setBuscaID} = props;
    const {contador, setContador} = props;
    const {cards} = props;

    return (
        <>
         {cards.map( card => <Flashcard 
        key = {id}
        contador = {contador}
        setContador = {setContador}
        play = {play} 
        setPlay = {setPlay} 
        buscaID = {buscaID}
        setBuscaID = {setBuscaID}
        cards = {card}/> )}
        </>
    )
}

