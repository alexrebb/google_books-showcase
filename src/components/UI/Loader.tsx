import styled from 'styled-components/macro'

const StyledBox = styled.div`
    width: 100px;
    height: 50px;
    background: #6bedb5;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
`
const StyledContainer = styled.div`
    height: 15px;
    width: 70px;
    display: flex;
    position: relative;
`

const StyledCircle = styled.span`
        width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: #fff;
      animation: move 500ms linear 0ms infinite;
      margin-right: 30px;
      
      &:first-child{
        position: absolute;
        top:0;
        left:0;
        animation: grow 500ms linear 0ms infinite;
      }
      
      &:last-child{
        position: absolute;
        top: 0;
        right: 0;
        margin-right: 0;
        animation: grow 500ms linear 0s infinite reverse;
    @keyframes grow {
            from {transform: scale(0,0); opacity: 0;}
            to {transform: scale(1,1); opacity: 1;}
          }
          
    @keyframes move {
            from {transform: translateX(0px)}
            to {transform: translateX(45px)}
          }
`
const Loader = () => {
    return (
        <StyledBox>
            <StyledContainer>
                <StyledCircle />
                <StyledCircle />
                <StyledCircle />
                <StyledCircle />
            </StyledContainer>
        </StyledBox>
    )
}

export default Loader
