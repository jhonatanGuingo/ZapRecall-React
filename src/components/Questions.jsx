import styled from 'styled-components';
import Flashcard from './Flashcard';
import { useState } from 'react';

export default function Questions(props){
    const {id} = props;
    const {play, setPlay} = props;
    const {buscaID, setBuscaID} = props;
    const [display, setDisplay] = useState('none')
    const [displayQuestion, setDisplayQuestion] = useState('flex')

   
    console.log(buscaID, 'estou no questions')
    
    
    function minhaFuncao(p) {
      
      //setPlay(true);
     // setBuscaID({id});
     setDisplay('flex')
     setDisplayQuestion('none')

      //console.log(p.id)
      //console.log(buscaID, 'estou no questions')
      //alteraDisplay()
   }




    return (
        <>
       <SCcontainerQuestions display = {displayQuestion}>
            <p> Pergunta {id} </p>
            <button onClick = {()  => minhaFuncao(props)} ><ion-icon name="play-outline"></ion-icon></button>
        </SCcontainerQuestions>
        <Flashcard 
        play = {play} 
        setPlay = {setPlay} 
        buscaID = {buscaID}
        setBuscaID = {setBuscaID}
        display = {display}
        setDisplay = {setDisplay}/>
        </>
    )
}

const SCcontainerQuestions = styled.div`
    width: 300px;
    height: 65px;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 10px;
    margin-left: 37px;
    display: ${props => props.display};
    justify-content: space-between;
    box-sizing: border-box;
    padding: 20px;
    align-items: center;
    button {
        box-shadow: none;
        border: none;
        background-color: inherit;
        cursor: pointer;
    }
    ion-icon{
        width: 20px;
        height: 23px;
        color: #333333;
    }
`