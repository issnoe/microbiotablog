import React from 'react';
import styled from '@emotion/styled';



export const ButtonToggle = styled.button`
  position: fixed;
  z-index:10000;
  margin-top: 10px;
  font-size: 22px;
  font-weight: 700;
  display: block;
    padding: 4px 10px;
    margin: 10px 0 0 10px;
    border: #fff 1px solid;
    color: #fff;
    line-height: 1em;
    border-radius: 10px;
    opacity: 0.8;
    background: #191b1f;
`;

export const TextAreaEdit = styled.textarea`
position: relative;

color: black;
width: 100%;
z-index: 1000;
bottom: 10;
height: 100vh;
@media (max-width: 700px) {
  margin-top: 14%;

}

`;


