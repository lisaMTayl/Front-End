import React from 'react';
import Footer from "./Footer";

import styled from "styled-components";
import Container from '@material-ui/core/Container';
import { Phantom } from '../styled-components/index'

/*Styled Components*/
const H1 = styled.h1`
    font-size: 3rem;
`

export default function LearnMore() {

  return (
    <Container>
      <Phantom/>
     <H1>Resources</H1>
      <Footer/>
    </Container>
  )

}