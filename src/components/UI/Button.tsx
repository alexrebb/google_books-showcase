import styled from 'styled-components/macro'
import { memo } from 'react'

const StyledButton = styled.button<ButtonProps>`
    border: 0;
    font-size: 15px;
    cursor: pointer;
    border-radius: 2px;
    padding: 5px;
    color: white;
    background-color: #6bedb5;
    &:hover {
        background-color: #55bd90;
    }
    &:active {
        border: solid 1px #1b116e;
    }
    @media (max-width: 575px) {
        width: 70px;
        display: block;
        margin: 5px auto;
    }
`
interface ButtonProps {
    text?: string
    onClick?: any
    type?: any
}

const Button: React.FC<ButtonProps> = ({ text, onClick, type }) => {
    return (
        <StyledButton type={type} onClick={onClick}>
            {text}
        </StyledButton>
    )
}

export default memo(Button)
