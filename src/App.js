import React from 'react';
import { useState, useEffect } from 'react';

import { ThemeProvider } from "styled-components";
import lightThema from "./themas/light";
import * as S from './styles';

function App() {
  return (
    <ThemeProvider theme={lightThema}>
      <S.Container className="App">
        <h1>ola</h1>
        <S.Header bg="red" className="oi">
          <p>soihdfaufhfnbe</p>
        </S.Header>

        <S.Btn sucesso > BOTAO NORMAL </S.Btn>
        <S.NossoBotao variant="contained">Contained</S.NossoBotao>
      </S.Container>
    </ThemeProvider>
  );
}


export default App;
