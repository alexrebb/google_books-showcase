import CardList from './CardList'
import styled from 'styled-components/macro'
import { useNavigate } from 'react-router-dom'
import BooksData from '../../store'
import { observer } from 'mobx-react'
import { useCallback } from 'react'

const StyledCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-top: 10px;
    padding-left: 50px;
    @media (max-width: 575px) {
        justify-content: center;
    }
`

const CardContainer = observer(() => {
    const navigate = useNavigate()

    const handleOpenCard = useCallback(
        (bookId: string) => {
            BooksData.setBookId(bookId)
            navigate('/current-book')
        },
        [navigate]
    )

    return (
        <StyledCardContainer>
            <CardList handleOpenCard={handleOpenCard} />
        </StyledCardContainer>
    )
})

export default CardContainer
