import styled from 'styled-components/macro'
import { memo } from 'react'

const StyledImgContainer = styled.div`
    width: 40%;
`
const StyledImg = styled.img`
    padding: 50px;
    width: 70%;
    border-radius: 2px;
    box-shadow: 5px 1px 1px rgba(0, 0, 0, 0.3);
    @media (max-width: 575px) {
        padding-left: 0;
    }
`
interface props {
    image?: string
}
const BookImg: React.FC<props> = ({ image }) => {
    return (
        <StyledImgContainer>
            <StyledImg src={image} alt="" />
        </StyledImgContainer>
    )
}

export default memo(BookImg)
