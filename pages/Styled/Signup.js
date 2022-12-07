import styled from "styled-components";
export const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;
  export const Wrapper = styled.section`
    max-width: 100%;
    padding: 4em;
  `;
 export const Input = styled.input`
    height: 50px;
    border-radius: 10%;
    font-size: 16px;
    padding: 10px;
    border:none;
    display: block;
    margin: 10px auto;
  `;

  export const Button = styled.button`
    width:20%;
    height:50px;
    border-radius:10%;
    cursor:pointer;
    background-color:blue;
    font-size:16px;
    font-weight:500;
    display: block;
    margin:10px auto;
    text-align;center;
    color:white;`;

   export const Select = styled.select`
   width: 20%;
   height: 50px;
    border-radius: 10%;
   background: white;
   color: gray;
   padding-left: 5px;
   font-size: 16px;
   border:none;
   margin-top:10px;
 
        option {
          color: black;
          background: white;
          font-weight: small;
          display: flex;
          white-space: pre;
          min-height: 20px;
          padding: 0px 2px 1px;
        }
 `;
 export const WrapForm = styled.div`
 display:flex;
 flex-wrap:wrap;
 border:1px solid black;
 box-shadow:1px 1px 1px 4px grey`;