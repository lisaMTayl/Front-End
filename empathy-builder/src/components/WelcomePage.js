import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Login from './Login';
import SignUp from './SignUp';
import Calculator from "./Calculator";


import styled from "styled-components";
import {Button, H2, H3, H4, H5, P, Phantom} from '../styled-components/index'
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';


const Welcome = styled.div`
    padding-bottom: 5rem;
    background-color: white;
    
`;

const PageContainer = styled.div `
    padding-bottom: 0;
    margin-bottom: auto;
`;

const Image = styled.img`
background-color: white;
height: 60%;
`;

const Header = styled.div`
    padding: 2rem auto 1rem;
`;

// Import components into Welcome Page
export default function WelcomePage() {

  return (
    <PageContainer>
      <Welcome>

        <Header/>
          <div>
           <Hidden smDown><Image src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/reading_0re1.svg"
              alt="woman reading"/>
           </Hidden>
          </div>


        <div>
          <H3>Empathy Builder: A budgeting tool</H3>

        </div>

        <div>
          <P>Domestic violence is real. The cost to leave can be overwhelming, but we are here to help.</P>
          <P>Click one of the buttons below and we will estimate your monthly expenses and relocation costs.<br />

            (If you already have an account, you may <Link to={"Login"} className="link"> login</Link> at any time.)</P>
        </div>
        <div>
          <Button><Link to={"Calculator"} className="link">Anonymous Mode</Link></Button>
          <Button><Link to={"SignUp"} className="link">Account SignUp</Link></Button>>
        </div>

    </Welcome>
      <Footer/>
    </PageContainer>
  );
}