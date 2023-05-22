
import { useState } from 'react';
import styled, { useTheme } from 'styled-components';
export default function Flashcard(props){
    const {cards}=props;
    const {contador, setContador} = props;
    const [traco, setTraco] = useState('none')
    const [displayQuestion, setDisplayQuestion] = useState('none')
    const [displayDeck, setDisplayDeck] = useState('flex')
    const [displayAnswer, setDisplayAnswer] = useState('none')
    const [answered, setAnswered] = useState(false)
    const [color, setColor] = useState('black')
    const [icon, setIcon] = useState("play-outline")
    const [dataTest, setDataTest] = useState('')
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

      function verificarResposta(num){
        const id = num;
        setDisplayQuestion('none')
        setDisplayDeck('flex')
        setDisplayAnswer('none')
        setTraco('line-through')
        setAnswered(true)
        setContador(contador + 1)
        console.log(answered, 'estou no flash')
       if (id === 1){
            setColor('red')
            setIcon("close-circle")
            setDataTest('no-icon')
            console.log(color, 'color test')
        }else if  (id === 2) {
            setColor('orange')
            setIcon("help-circle")
            setDataTest('partial-icon')
            console.log(color, 'color test')
        }else if  (id === 3) {
            setColor('green')
            setIcon("checkmark-circle")
            setDataTest('zap-icon')
            console.log(color, 'color test')
        }
      }

    return (
        <>
        <SCcontainerQuestions data-test="flashcard" display = {displayDeck} color = {color} traco = {traco}>
            <p data-test="flashcard-text"> Pergunta {cards.id} </p>
            <button  disabled = {answered} data-test="play-btn" onClick = {()  => viraPergunta(props)} ><ion-icon data-test ={dataTest} name={icon}></ion-icon></button>
        </SCcontainerQuestions>

        <SCflashCard display = {displayQuestion}>
           <p data-test="flashcard-text"> {cards.question} </p>
            <button data-test="turn=btn" onClick = {()  => viraResposta(props)}><ion-icon name="repeat-outline"></ion-icon></button>
        </SCflashCard>

        <SCFlashAnswer display = {displayAnswer}>
            <p data-test="flashcard-text">{cards.answer}</p>
            <SCDivContainer>
                <button data-test = "no-btn" onClick = {()  => verificarResposta(1)}><SCDivNot><p>Não lembrei!</p></SCDivNot></button>
                <button data-test = "partial-btn" onClick = {()  => verificarResposta(2)}><SCDivAlso><p>Quase não lembrei!</p></SCDivAlso></button>
                <button data-test = "zap-btn" onClick = {()  => verificarResposta(3)}><SCDivZap><p>Zap!</p></SCDivZap></button>
            </SCDivContainer>
        </SCFlashAnswer>
        </>

    )
}
const SCcontainerQuestions = styled.div`
    width: 300px;
    height: 65px;
    background: #FFFFFF;
    color: ${props => props.color};
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
    p{
        text-decoration-line: ${props => props.traco};
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
    }
    ion-icon{
        width: 20px;
        height: 23px;
        color:${props => props.color};
        
    }
`
const SCFlashAnswer = styled.div`
    display: ${props => props.display};
    flex-direction: column;
    width: 299px;
    height: auto;
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
    button {
        box-shadow: none;
        border: none;
        background-color: inherit;
        cursor: pointer;
    }

`
const SCDivNot = styled.div`
    width: 85.17px;
    height: 37.17px;
    background: #FF3030;
    border-radius: 5px;
    display: flex;
    button {
        box-shadow: none;
        border: none;
        background-color: inherit;
        cursor: pointer;
    }
    p {
        margin: auto;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #FFFFFF;
    }
`
const SCDivAlso = styled.div`
    width: 85.17px;
    height: 37.17px;
    background: #FF922E;
    border-radius: 5px;
    display: flex;
    button {
        box-shadow: none;
        border: none;
        background-color: inherit;
        cursor: pointer;
    }
    p {
        margin: auto;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #FFFFFF;
    }
`

const SCDivZap = styled.div`
    width: 85.17px;
    height: 37.17px;
    background: #2FBE34;
    border-radius: 5px;
    display: flex;
    p {
        margin: auto;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #FFFFFF;
    }
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