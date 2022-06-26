import styled from 'styled-components/macro'

const StyledCard = styled.div`
    width: 220px;
    height: 290px;
    background-color: rgb(235, 236, 240);
    border-radius: 3px;
    padding: 20px 10px 5px 10px;
    margin: 0 40px 30px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    @media (max-width: 575px) {
        width: 200px;
        height: 270px;
    }
`
const StyledImg = styled.img`
    width: 60%;
    height: 70%;
    border-radius: 2px;
    box-shadow: 5px 1px 1px rgba(0, 0, 0, 0.3);
`
const StyledDescriptionWrapper = styled.div`
    padding: 10px 10px 0 10px;
    font-size: 10px;
`
const StyledCategoriy = styled.p`
    text-decoration: underline;
    color: gray;
`
const StyledDescr = styled.p`
    font-weight: bold;
    font-size: 12px;
`
const StyledAuthor = styled.p`
    color: gray;
`
interface props {
    key?: string
    imgBook?: string
    category?: string[]
    descr?: string
    author?: string[]
    handleOpenCard: Function
    bookId?: string
}

const Card: React.FC<props> = ({
    imgBook,
    descr,
    category,
    author,
    handleOpenCard,
    bookId,
}) => {
    return (
        <StyledCard onClick={() => handleOpenCard(bookId)}>
            <StyledImg src={imgBook} alt="" />

            <StyledDescriptionWrapper>
                <StyledCategoriy>{category && category[0]}</StyledCategoriy>
                <StyledDescr>{descr}</StyledDescr>
                <StyledAuthor>{author && author[0]}</StyledAuthor>
            </StyledDescriptionWrapper>
        </StyledCard>
    )
}

export default Card
