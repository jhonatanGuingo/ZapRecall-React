import styled from 'styled-components';
import Flashcard from './Flashcard';
import logo from '../assets/logo.png'
import Deck from './Deck';
import { useState } from 'react';


export default function Body(props){
    const {cards, play, setPlay, buscaID, setBuscaID} = props;
    const [contador, setContador] = useState(0);
 
    console.log(cards, 'estou no body')
    return (
        <SCbody>
            <SClogo>
                <img src={logo}/>
                <h1>ZapRecall</h1>
            </SClogo>
             
            <Deck 
            contador = {contador}
            setContador = {setContador}
            cards = {cards} 
            play = {play} 
            setPlay = {setPlay} 
            buscaID = {buscaID}
            setBuscaID = {setBuscaID}
            />
            
            <SCfooter><p>{contador}/8 CONCLUIDOS</p></SCfooter>
        </SCbody>
    )
}


const SCbody = styled.div`
    background: #FB6B6B;
    border: 1px solid #DBDBDB;
    width: 375px;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: relative;

`
const SClogo = styled.div`
    display: flex;
    margin: auto;
    h1{
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: -0.012em;
        color: #FFFFFF;
        transform: rotate(0.58deg);
    }
    img {
        margin-top: 12px;
        width: 52px;
        height: 60px;
    }

`
const SCfooter = styled.div `
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 375px;
    height: 70px;
    background: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    display: flex;
    p{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        /* identical to box height */


        color: #333333;
        margin: auto;
    }
`