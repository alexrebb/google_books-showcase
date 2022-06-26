import styled from 'styled-components/macro'
import { memo } from 'react'

const StyledDescr = styled.div`
    width: 60%;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media (max-width: 575px) {
        padding 0;
        width: 90%;
    }
`
const StyledCategoriy = styled.p`
    color: black;
`
const StyledTitle = styled.p`
    font-weight: bold;
    font-size: 20px;
`
const StyledAuthor = styled.p`
    color: gray;
    text-decoration: underline;
`
const StyledDescription = styled.div`
    width: 90%;
    height: 70%;
    border: 1px solid gray;
    margin-top: 20px;
    padding: 10px;
    word-break: break-all;
`
interface props {
    category?: string[]
    title?: string
    author?: string[]
    description?: string
}

const BookDescr: React.FC<props> = ({
    category,
    title,
    author,
    description,
}) => {
    return (
        <StyledDescr>
            {category && <StyledCategoriy>{category[0]}</StyledCategoriy>}
            {title && <StyledTitle>{title}</StyledTitle>}
            {author && <StyledAuthor>{author}</StyledAuthor>}
            {description && (
                <StyledDescription>{description}</StyledDescription>
            )}
        </StyledDescr>
    )
}

export default memo(BookDescr)
