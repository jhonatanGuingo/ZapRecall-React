
import { useState } from 'react';
import styled from 'styled-components';
export default function Flashcard(props){
    const {cards}=props;
    const {play, setPlay} = props;
    const {buscaID, setBuscaID} = props;
    const [displayQuestion, setDisplayQuestion] = useState('none')
    const [displayDeck, setDisplayDeck] = useState('flex')
    const [displayAnswer, setDisplayAnswer] = useState('none')
    console.log('estou no flash', cards)
    function viraPergunta(p) {
      
       setDisplayQuestion('flex')
       setDisplayDeck('none')
     }

     function viraResposta(p) {
      
        setDisplayQuestion('none')
        setDisplayDeck('none')
        setDisplayAnswer('flex')

      }

    return (
        <>
        <SCcontainerQuestions display = {displayDeck}>
            <p> Pergunta {cards.id} </p>
            <button onClick = {()  => viraPergunta(props)} ><ion-icon name="play-outline"></ion-icon></button>
        </SCcontainerQuestions>

        <SCflashCard display = {displayQuestion}>
           <p> {cards.question} </p>
            <button onClick = {()  => viraResposta(props)}><ion-icon name="repeat-outline"></ion-icon></button>
        </SCflashCard>

        <SCFlashAnswer display = {displayAnswer}>
            <p>{cards.answer}</p>
            <SCDivContainer>
                <SCDivNot>Não lembrei!</SCDivNot>
                <SCDivAlso>Quase não lembrei!</SCDivAlso>
                <SCDivZap>Zap!</SCDivZap>
            </SCDivContainer>
        </SCFlashAnswer>
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
const SCFlashAnswer = styled.div`
    display: ${props => props.display};
    flex-direction: column;
    width: 299px;
    height: 131px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 10px;
    margin-left: 37px;
    position: relative;
    p {
        display: flex;
        font-family: 'Recursive', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        margin-left: 15px;       
    }
`
const SCDivContainer = styled.div`
    display: flex;
    justify-content: space-around;
`
const SCDivNot = styled.div`
    width: 85.17px;
    height: 37.17px;
    background: #FF3030;
    border-radius: 5px;
`
const SCDivAlso = styled.div`
    width: 85.17px;
    height: 37.17px;
    background: #FF922E;
    border-radius: 5px;
`

const SCDivZap = styled.div`
    width: 85.17px;
    height: 37.17px;
    background: #2FBE34;
    border-radius: 5px;
`

const SCflashCard = styled.div`
    display: ${props => props.display};
    width: 299px;
    height: 131px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 10px;
    margin-left: 37px;
    position: relative;
    p {
        display: flex;
        font-family: 'Recursive', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        margin-left: 15px;
    }
    button {
        box-shadow: none;
        border: none;
        background-color: inherit;
        cursor: pointer;
    }
    ion-icon{
        position: absolute;
        bottom: 10px;
        right: 10px;
        width: 30px;
        height: 30px;
        color: #333333;
    }
`