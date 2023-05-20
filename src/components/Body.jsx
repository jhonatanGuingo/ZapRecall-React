import styled from 'styled-components';
import Flashcard from './Flashcard';
import Questions from './Questions';
import logo from '../assets/logo.png'


export default function Body(props){
    const {cards, play, setPlay, buscaID, setBuscaID} = props;
    
    console.log(play)
    console.log(cards)
    return (
        <SCbody>
            <SClogo>
                <img src={logo}/>
                <h1>ZapRecall</h1>
            </SClogo>
            {cards.map( card =>  
            <Questions 
            id = {card.id} 
            cards = {cards} 
            play = {play} 
            setPlay = {setPlay} 
            buscaID = {buscaID}
            setBuscaID = {setBuscaID}
            />)}
            <Flashcard/>
            <SCfooter><p>0/8 CONCLUIDOS</p></SCfooter>
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
        margin: auto;
    }
`