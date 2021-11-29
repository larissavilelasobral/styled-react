import styled from 'styled-components';
import Button from '@material-ui/core/Button';
// import { style } from '@material-ui/system';
// import styled from '@emotion/styled'
import { buttonStyleNormal } from './mixins';

export const Container = styled.div`
  background-color: gray;
  padding: 50px;
`;

export const Btn = styled.button`
  background-color: pink;

  /* se tiver essa palavra ele altera o tema */
  ${props => props.sucesso &&
    buttonStyleNormal(props.theme.colors.red, props.theme.colors.green, props.theme.colors.blue)
  }

${props => props.erro &&
    buttonStyleNormal("white","red","red")
  }
  
`;

export const Header = styled.header`
background-color: ${props => props.theme.colors.blue};
margin: 10px;
`;

// só funciona com o import do UI
export const NossoBotao = styled(Button)`
  background: green;
`;
