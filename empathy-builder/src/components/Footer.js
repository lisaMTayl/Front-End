import React from 'react';
import '../App.css';
import styled from "styled-components";


const FooterDiv = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%; padding: 1rem;
  background: #F9BBB1;
`;

export default function Footer() {

  return (
    <FooterDiv>
      <div>Another amazing app by your friendly Lambda Development team!</div>
      <div>For educational purposes only</div>
    </FooterDiv>
  );
}