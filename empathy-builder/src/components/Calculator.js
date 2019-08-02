import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateTotals } from '../actions';

import LineItem from './LineItem';
import Footer from "./Footer";
import { personalCosts, relocationCosts } from '../cost data';

import 'antd/dist/antd.css';
import styled from 'styled-components';
import {Button, H2, H3, H4} from '../styled-components/index'
import {Link} from "react-router-dom";


const phantom = {
    display: 'flex',
    padding: '1rem',
    height: '60px',
    width: '100%',
};

const CalcPage = styled.div`
    margin-top: 100px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

const Results = styled.div`
    display: flex;
    margin: auto;
    width: 80vw;
    height: auto;
    align-items: center;
    justify-content: center;
    //background-color: #DB6AA7;
    background-color: #6DFACC;
    border: 1px solid #66ccda;
    border-radius: 5px;
    h2{
        font-size: 2.8rem;
        color: #654EB0;
    }
`

const CalculatorHolder = styled.div`
    width: 100vw;
    height: auto;
    display: flex;
    flex-flow: row wrap;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
    justify-content: space-evenly;
    align-items: start;  
    margin-bottom: 6rem; 
`

const Column = styled.div`
    width: 45%;
    max-width: 600px;
    height: auto;
    background-color: mediumpurple;
    border-radius: 5px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: start;
    align-items: center;
    padding-bottom: 1rem;
        @media (max-width: 768px) {
        width: 90%;
        margin-bottom: 2rem;
    } 
`

const SubtotalStyle = styled.div `
    background-color: #6DFACC;
    border: 1px solid #66ccda;
    border-radius: 5px;
    padding: 1.2rem 3rem;
    width: 90%;
    height: auto;
`


const Calculator = props => {
    console.log('Calculator props:', props);
    
    const [recurringCategoryTotals, setRecurringCategoryTotals] = useState({
        Food: 0,
        Car: 0,
        Health: 0,
        Debt: 0,
        Housing: 0,
        Bills: 0,
        Clothing: 0
    });

    const [relocationCategoryTotals, setRelocationCategoryTotals] = useState({
        Career: 0,
        Housing: 0,
        Transportation: 0,
        Miscellaneous: 0,
    });

    const Sum = obj => {
        return Object.keys(obj).reduce((sum, key) => sum+parseFloat(obj[key] || 0), 0);
    };

    const recurringCalcTotal = Sum(recurringCategoryTotals)
    const relocationCalcTotal = Sum(relocationCategoryTotals)
 
    return(
        <CalcPage>

                <Results>
                    <H3>Total Cost for Relocation: ${recurringCalcTotal + relocationCalcTotal} </H3>
                </Results>

        <div style={phantom}/>
            <CalculatorHolder>
                <Column>
                    <H2>My Recurring Expenses</H2>
                    {personalCosts.map(category => {
                        return <LineItem key={category.name} 
                                    categoryTotals={recurringCategoryTotals} 
                                    setCategoryTotals={setRecurringCategoryTotals} 
                                    category={category}
                                    updateTotals={props.updateTotals}
                                    userId={props.userId}
                                />
                    })}

                    <SubtotalStyle><H4>Total Recurring Expenses: ${recurringCalcTotal}</H4></SubtotalStyle>


                </Column>
                <Column>
                    <H2>My Relocation Expenses</H2>
                    {relocationCosts.map(category => {
                        return <LineItem key={category.name} categoryTotals={relocationCategoryTotals} setCategoryTotals={setRelocationCategoryTotals} category={category} 
                            />
                    })}

                    <SubtotalStyle><H4>Total Relocation Expenses: ${relocationCalcTotal}</H4></SubtotalStyle>



                </Column>
            </CalculatorHolder>
            <Button><Link to={"SignUp"} className="link">Account SignUp</Link></Button>
            <Footer/>
        </CalcPage>
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
    { updateTotals } 
)(Calculator);
