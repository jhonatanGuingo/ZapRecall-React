import styled from 'styled-components';
import Flashcard from './Flashcard';

export default function Body(){
    return (
        <SCbody>
            <SClogo>
                <img src='./assets/logo.png'/>
                <h1>ZapRecall</h1>
            </SClogo>
            <Flashcard/>
            <SCfooter><p>0/4 CONCLUIDOS</p></SCfooter>
        </SCbody>
    )
}


const SCbody = styled.div`
    background: #FB6B6B;
    border: 1px solid #DBDBDB;
    width: 375px;
    height: 667px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: relative;

`
const SClogo = styled.div`
    display: flex;
    margin: 40px auto;
    
    img {
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