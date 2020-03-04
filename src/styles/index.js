import styled from 'styled-components';
import img from './../img/wmp-background.jpg';
export const Nav = styled.div`
  
  display: flex;
  flex-direction: row;
  background: white;
  color: black;
  border: bottom 4px black;
  width:100%;
  justify-content:space-between;
  align-items:flex-end;
`;

export const Ss = styled.button`
  height: 30px;
  background: #008000;
  color: black;
  border: 0;
  margin: 20px 10px;
  padding:10px;
  height:50px;
  color:white;
  width:190px;
  font-family: 'Amatic SC', cursive;
  font-size:25px;
`;

export const Ii = styled.input`
  width: 200px;
  padding: 15px 22px;
  margin: 10px 5px;
  box-sizing: border-box;  
  border-radius: 4px;
  background-color:#ACFE9F;
  border: 1px solid #008000;
  `;

export const Ll = styled.label`
  margin-bottom: -12px;
  text-align: center;
  width: 200px;
  padding:10px;
  `;

export const Main = styled.div`
    background:url(${img}) no-repeat center center fixed;
    height:100%;
    background-size:cover;
   
`;

export const LinkDiv = styled.div`
display:flex;
justify-content:space-evenly;
padding:20px;
`;

// EXAMPLE
/*
export const MyStyle = styled.div`
  // STYLES HERE
`;

IMPORT NON-DEFAULT EXPORT INTO OTHER FILES THIS WAY:
  import { MyStyle } from './styles'; // BECAUSE THE FILE IS NAMED index, WE DON'T NEED TO INCLUDE THE FILE NAME IN THE PATH, BECAUSE THE index FILE WILL AUTOMATICALLY BE INCLUDED . . .
*/
