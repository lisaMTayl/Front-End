import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import styled from 'styled-components';
import { H2, H3, H4 } from '../styled-components/index'


const Item = styled.div`
    width: 90%;
    height: auto;
    //background-color: #D1FEF6;
    background-color: #f9bbb1;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: baseline;
    margin: 5px 5px;
    border-radius: 4px;

    &:hover{
        background-color: #AFF3C1;
        transition-duration: 0.2s;
    }
`



const InputLine = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
`


const LineItem = props => {
    console.log('line props: ', props.userId)

    const [modalVisible, setModalVisible] = useState(false);

    const [categoryCosts, setCategoryCosts] = useState({});

    const handleModal = (e) => {
        e.preventDefault();
        setModalVisible(false);
        props.updateTotals(props.category.name, props.userId, categorySum);
      };

    const handleCancel = e => {
        setModalVisible(false);
      };

    const handleChange = e => {
        e.preventDefault();
        setCategoryCosts({
            ...categoryCosts,
            [e.target.name]: e.target.value
        })
    }

    const Sum = obj => {
        return Object.keys(obj).reduce((sum, key) => sum+parseFloat(obj[key] || 0), 0);
    };

    const categorySum = Sum(categoryCosts);    
    
    useEffect(() => {
        props.setCategoryTotals({
            ...props.categoryTotals,
            [props.category.name]: categorySum
        })
        }, [categorySum])

    return(
        
        <>
            <Item onClick={() => setModalVisible(!modalVisible)} value={categorySum} name={props.category.name}>
                <H2>{props.category.name}</H2>
                <H2>${categorySum}</H2>
            </Item>
            <Modal
            title={props.category.name}
            visible={modalVisible}
            onOk={e => handleModal(e)}
            onCancel={handleCancel}
            >
            <H3>Things to consider: </H3>
                {props.category.categories.map(category => {
                    
                return(
                    <InputLine key={category}>
                        <p>{category}</p>
                        <input
                            type="number"
                            placeholder="0"
                            name={category}
                            value={categoryCosts.category}
                            onChange={e => handleChange(e)}
                        />
                    </InputLine>
                )      
                })}
            </Modal>
        </>
    )
};

export default LineItem;