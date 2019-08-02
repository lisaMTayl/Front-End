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
    align-items: baseline;
    justify-content: space-evenly;
`

export const LoginHeader = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

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
        margin-left: 10px;
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
        color:#654EB0;
        padding: .5rem;
`

/*Phantom div to allocate layout space for the navbar*/
export const Phantom = styled.div`
  padding: 3rem;
  height: 60px;
  width: 100%;
`

export const H1 = styled.h1`
    font-size: 3rem;
`

export const H2 = styled.h2`
  font-size: 2.7rem;
  color: white;
      @media (max-width: 768px) {
        font-size: 2rem;
    }
`

export const H3 = styled.h3`
  font-size: 2.5rem;
  color: #654EB0;
`
export const H4 = styled.h4`
  font-size: 2rem;
  color: #654EB0;
`

export const H5 = styled.h5`
    font-size: 1.6rem;
        color: #3d3c3a;
`

export const P = styled.p`
    font-size: 1.5rem;
    color: #3d3c3a;
`


export const Button = styled.button`
  border-radius: 8px;
  padding: 0.2rem 1.6rem;
  margin: 0.8rem 1.4rem;
  width: auto;
  background: #654EB0;
  font-size: 1.2rem;
  border: 2px solid #654EB0;
  box-shadow: 0px 10px 14px -7px #654eb0;
  color: white;

    .active{
        font-weight: bold;
        text-decoration: none;
        color: #f9bbb1;
    }

    a{
        color: white;
        margin: 0px 20px;
        font-size: 1.4rem;
        text-decoration: none;
        &:hover{
            color: #654EB0;
            transition-duration: 0.2s;
            text-decoration: underline;
        }
        }

`