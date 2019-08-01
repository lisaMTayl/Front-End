import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { login } from '../actions';

import { PageContainer, 
        LoginContainer, 
        LoginHeader, 
        FormContainer, 
        InputContainer} from '../styled-components';
import Footer from "./Footer";


const Login = props => {

    const [user, setUser] = useState({username: '', password: ''})

    const handleChange = e => {
        e.preventDefault();
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
      };
    
    const login = e => {
        e.preventDefault();
        props.login(user).then(res => {
            if(res) {
               return props.history.push('/calculator');
            }
        });
    };


    return(
        <PageContainer>
            <LoginContainer>
                <LoginHeader>
                    <h1> Log In</h1>
                </LoginHeader>
                <FormContainer>
                    <form onSubmit={e => login(e)}>
                        <InputContainer>
                            <label>Username</label>
                            <input
                                type="text"
                                placeholder="username"
                                required="fill this out!"
                                name="username"
                                value={user.username}
                                onChange={handleChange}
                            />
                            <label>Password</label>
                            <input
                                type="password"
                                placeholder="password"
                                required="fill this out!"
                                name="password"
                                value={user.password}
                                onChange={handleChange}
                            />
                        </InputContainer>
                    </form>
                    <button className="Login-button" onClick={e => login(e)}>Log In</button>
                </FormContainer>
            </LoginContainer>
            <Footer/>
        </PageContainer>
    );
};

const mapStateToProps = state => {
    return{
        userId: state.userId,
        loggedIn: state.loggedIn,
        error: state.error,
        isLoading: state.isLoading,
    };
};

export default connect(
    mapStateToProps,
    { login } 
)(Login);