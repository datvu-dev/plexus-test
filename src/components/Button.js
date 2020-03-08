import styled from 'styled-components'

const Button = styled.button`
    background: ${props => props.primary ? "#0077B5" : "white"};
    color: ${props => props.primary ? "white" : "#0077B5"};
    font-size: 1em;
    padding: 10px 30px;
    margin-right: 10px;
    border: 1px solid #0077B5;
    border-radius: 3px;
    cursor: pointer;
`

export default Button

