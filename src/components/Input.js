import styled, { css } from 'styled-components'

const baseInputStyles = css`
    background: #FFFFFF;
    font-size: 16px;
    border: none;
    border-bottom: ${props => props.disabled ? "1px dotted #9e9e9e" : "1px solid #9e9e9e"};
    outline: none;
    width: ${props => props.type == "radio" ? "auto" : "100%"};;
    padding: 10px 0;
    margin-bottom: 20px;
`

export const Input = styled.input`
    ${baseInputStyles}
`

export const Select = styled.select`
    ${baseInputStyles}
`