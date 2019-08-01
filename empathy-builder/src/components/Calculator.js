import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateTotals } from '../actions';
import styled from 'styled-components';

import LineItem from './LineItem';

import { personalCosts, relocationCosts } from '../cost data';



import 'antd/dist/antd.css';

const CalcPage = styled.div`
    margin-top: 100px;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
`
const H2 = styled.h2`
    color: #4b0082;
`

const Results = styled.div`
    width: 80vw;
    height: auto;
    //background-color: #DB6AA7;
    background-color: #6DFACC;
    border: 1px solid #66ccda;
    border-radius: 5px;
    h2{
        color: #4b0082;
        font-size: 2.6rem;
    }
`

const CalculatorHolder = styled.div`
    width: 100vw;
    margin-top: 2rem;
    height: auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: start;
    
`
const Column = styled.div`
    width: 45%;
    max-width: 600px;
    height: auto;
    background-color: mediumpurple;
    border-radius: 5px;
    display: flex;
    flex-flow: column nowrap;padding-bottom: 1rem;
    align-items: center;
    h2{
        font-size: 2.7rem;
        color: white;
    }
    h3{
        font-size: 2.5rem;
        color: #4b0082;;
    }
    h4{
        font-size: 2rem;
        color: #4b0082;
    }
    
`

const SubtotalStyle = styled.div `
    //background-color: #DB6AA7;
    background-color: #6DFACC;
    border: 1px solid #66ccda;
    border-radius: 5px;
    padding: 1.2rem 3rem;
    width: 90%;
    height: auto;
`

const phantom = {
    display: 'block',
    padding: '3rem',
    height: '24px',
    width: '100%',
};





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
                <H2>Total Cost for Relocation: ${recurringCalcTotal + relocationCalcTotal} </H2>

            </Results>

            <CalculatorHolder>
                <Column>
                    <h2>My Recurring Expenses</h2>
                    {personalCosts.map(category => {
                        return <LineItem key={category.name} 
                                    categoryTotals={recurringCategoryTotals} 
                                    setCategoryTotals={setRecurringCategoryTotals} 
                                    category={category}
                                    updateTotals={props.updateTotals}
                                    userId={props.userId}
                                />
                    })}

                    <SubtotalStyle><h4>Total Recurring Expenses: ${recurringCalcTotal}</h4></SubtotalStyle>


                </Column>
                <Column>
                    <h2>My Relocation Expenses</h2>
                    {relocationCosts.map(category => {
                        return <LineItem key={category.name} categoryTotals={relocationCategoryTotals} setCategoryTotals={setRelocationCategoryTotals} category={category} 
                            />
                    })}

                    <SubtotalStyle><h4>Total Relocation Expenses: ${relocationCalcTotal}</h4></SubtotalStyle>



                </Column>
            </CalculatorHolder>
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
