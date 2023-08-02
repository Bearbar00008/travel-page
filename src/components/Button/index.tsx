import styled from 'styled-components'

const Button = styled.button`
    all: unset;
    color: white;
    padding: 15px 30px;
    border-radius: 100px;
    border: 2px solid white;
    background-color: transparent;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    &: hover{
        background-color: white;
        color: black;
    }
`


export default Button