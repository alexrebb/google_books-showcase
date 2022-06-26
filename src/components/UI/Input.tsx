import styled from 'styled-components/macro'
import { ChangeEventHandler, memo, ReactChild } from 'react'

const StyledInput = styled.input`
    padding-left: 10px;
    height: 30px;
    width: 350px;
    border-radius: 2px;
    border: none;
    margin-right: 15px;
    @media (max-width: 575px) {
        width: 200px;
    }
`
interface InputProps {
    placeholder?: string
    type?: string
    onChange?: ChangeEventHandler<HTMLInputElement>
    value?: string
}

const Input: React.FC<InputProps> = ({
    onChange,
    placeholder,
    type,
    value,
}) => {
    return (
        <StyledInput
            value={value}
            type={type}
            onChange={onChange}
            placeholder={placeholder}
        ></StyledInput>
    )
}

export default memo(Input)
