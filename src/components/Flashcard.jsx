
import styled from 'styled-components';
export default function Flashcard(props){
    const {play, setPlay} = props;
    const {buscaID, setBuscaID} = props;
    const {display, setDisplay} = props;
    console.log('estou no flash', display)
    return (
        <SCflashCard display = {display}>
            O que é JSX?
        </SCflashCard>
    )
}

const SCflashCard = styled.div`
    display: ${props => props.display};
    width: 299px;
    height: 131px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 10px;
    margin-left: 37px;
`