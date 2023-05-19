import { useState } from 'react'
import styled from 'styled-components';
import Body from './components/Body';
import cards from './data';
function App() {


  return (
    <>
      <Body cards = {cards}/>
    </>
  )
}

export default App
