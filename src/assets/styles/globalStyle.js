import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;1,100;1,200;1,400&family=Mr+Dafoe&family=Trocchi&display=swap');

/* 
font-family: 'Montserrat', sans-serif;
font-family: 'Mr Dafoe', cursive;
font-family: 'Trocchi', serif; 
*/

/* 
cinza
color:#98918C

Rosa
color:#E50B8A

Roxo
color:#B3298D
color:#C80677 
*/

  *{
    box-sizing:border-box;
  }
  body{
    background-color:#FFF;
  }
  .root {
    background-color:#FFF;
    display:flex;
    flex-direction:column;
    align-items:center;
    font-family: 'Trocchi', serif; 
  }

  .root button, input {
    font-family: 'Trocchi', serif; 
  }
  
`;

export default GlobalStyle;
