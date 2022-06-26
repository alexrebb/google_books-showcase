import styled from 'styled-components/macro'

const StyledErrorMessage = styled.p`
    text-align: center;
    font-size: 20px;
    color: gray;
    margin-top: 200px;
    padding: 20px;
`

const ErrorMessage = () => {
    return (
        <StyledErrorMessage>
            Oops! Something wrong....! Please, reload this page
        </StyledErrorMessage>
    )
}

export default ErrorMessage
