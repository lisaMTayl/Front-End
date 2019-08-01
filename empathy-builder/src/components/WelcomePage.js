import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Login from './Login';
import SignUp from './SignUp';



import styled from "styled-components";
import Calculator from "./Calculator";

/*phantom div to allocate layout space for the navbar*/
const phantom = {
  display: 'block',
  padding: '3rem',
  height: '60px',
  width: '100%',
};

const Welcome = styled.div`
    padding: 5rem;
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

const H1 = styled.h1`
    font-size: 3rem;

`;

const H3 =styled.h3`
    font-size: 2rem;
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
           <Image src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/reading_0re1.svg"
              alt="woman reading"/>
          </div>
        <div style={phantom}>

        </div>
        <div>
          <H3>Definition, thought and rise. Everything we do is connected with suffering: booda-hood, surrender,
          ascension, joy.
          </H3>
        </div>
        <div className='BtnGroup'>
          <button><Link to={"Calculator"} className="link">Anonymous Mode</Link></button>
          <button><Link to={"SignUp"} className="link">Account SignUp</Link></button>
        </div>

        <div>
          <p>Die and you will be developed confidently. If you exist or preach with an inner moonlight, relativity knows
            you. As i have captured you, so you must hurt one another.</p>
        </div>

    </Welcome>
      <Footer/>
    </PageContainer>

  );
}