import styled from 'styled-components';
export default function Questions(props){
    const {id} = props;
    return (
       <SCcontainerQuestions>
            <p> Pergunta {id} </p>
            <button><ion-icon name="play-outline"></ion-icon></button>
        </SCcontainerQuestions>
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
    display: flex;
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