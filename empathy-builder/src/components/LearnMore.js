import React from 'react';
import Footer from "./Footer";

import styled from "styled-components";
import Container from '@material-ui/core/Container';




const H1 = styled.h1`
    font-size: 3rem;
`

export default function LearnMore() {

  return (
    <Container>
     <H1>Resources</H1>
      <Footer/>
    </Container>
  )

}