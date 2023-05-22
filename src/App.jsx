import { useState } from 'react'
import styled from 'styled-components';
import Body from './components/Body';
import cards from './data';

function App() {
  const [play, setPlay] = useState(false);
  const [buscaID, setBuscaID] = useState('');


  return (
    <>
      <Body 
      cards = {cards} 
      play = {play} 
      setPlay = {setPlay} 
      buscaID = {buscaID}
      setBuscaID = {setBuscaID}/>
    </>
  )
}

export default App
