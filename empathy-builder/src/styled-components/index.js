import styled from 'styled-components'

export const PageContainer = styled.div`
    padding-top: 100px;
`

export const LoginContainer = styled.div`
    min-width: auto;
    width: 70vw;
    max-width: auto;
    height: auto;
    background-color: #ededed;
    border-radius: 15px;
    margin: 0 auto;
    overflow: hidden;
    box-shadow: 0 0 37px 5px #00000017;
    display: flex;
    flex-flow: row nowrap;
    align-items: baseline
    justify-content: space-evenly;
`

export const LoginHeader = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    h1{
        font-size: 1.6rem;
        margin: 0;
        color: #602350;
    }
    p{
        width: 80%;
        font-size: 1.2rem;
    }
`

export const FormContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
 
    button{
        height: auto;
        border-radius: 8px;
        background-color:  #654EB0;
        margin-left: 15px;
        margin-bottom: 10px;
        color: #ededed;

        &:hover{
            background-color: #9ddee7;
            transition-duration: 0.2s;
        }
    }
`

export const InputContainer = styled.div`
    text-align: left;
    display: flex;
    flex-flow: row nowrap;
    align-items: baseline;

    label{
        font-size: 1.3rem;
        color: #1C1C1C;
        margin-left: 5px;
    }
    input{
        border-radius: 8px;
        height: 30px;
        background: none;
        background-color: #ededed;
        border: 1px solid #1C1C1C;
        margin-bottom: 10px;
        margin-left: 4px;
        font-size: 20px;
    }
`