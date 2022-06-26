import BookImg from './BookImg'
import BookDescr from './BookDescr'
import BooksData from '../../store'

import styled from 'styled-components/macro'
import { Item } from '../../types'

import { observer } from 'mobx-react'

const StyledBookContainer = styled.div`
    background-color: rgb(235, 236, 240);
    display: flex;
    padding: 10px;

    @media (max-width: 767px) {
        flex-direction: column;
        align-items: center;
    }
    @media (max-width: 575px) {
        flex-direction: column;
        align-items: center;
    }
`

const BookContainer = observer(() => {
    const currentBook = BooksData.getCurrentBook()

    return (
        <StyledBookContainer>
            <BookImg image={currentBook?.volumeInfo?.imageLinks.thumbnail} />
            <BookDescr
                category={currentBook?.volumeInfo?.categories}
                title={currentBook?.volumeInfo?.title}
                author={currentBook?.volumeInfo?.authors}
                description={currentBook?.volumeInfo?.description}
            />
        </StyledBookContainer>
    )
})

export default BookContainer
