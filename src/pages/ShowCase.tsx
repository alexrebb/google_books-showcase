import Layout from '../layout/Layout'
import CardContainer from '../components/ShowCase/CardContainer'
import { useEffect } from 'react'
import styled from 'styled-components/macro'
import BooksData from '../store'
import Loader from '../components/UI/Loader'
import { observer } from 'mobx-react'
import Button from '../components/UI/Button'
import { searchBooks, searchAddBooks } from '../utils/searchBooks'
import ErrorMessage from '../components/UI/ErrorMessage'

const StyledFoundResults = styled.p`
    text-align: center;
`
const StyledLoder = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 200px;
`
const StyledAddLoader = styled.div`
    display: block;
    margin: 0 auto;
    margin-bottom: 20px;
    padding-bottom: 20px;
`
const StyledButtonWrapper = styled.div`
    display: block;
    margin: 0 auto;
    margin-bottom: 20px;
`

const Showcase = observer(() => {
    const resultsCount = BooksData.booksData.totalItems
    const loaderStatus = BooksData.loaderStatus
    const loaderAddBooks = BooksData.loaderAddBooks
    const startSearchIndex = BooksData.startSearchIndex
    const currentResultCount = BooksData.booksData.items.length

    const handleClick = () => {
        const startIndex = (currentResultCount + 30).toString()
        searchAddBooks(BooksData.defaultSearchValue, startIndex)
    }

    useEffect(() => {
        searchBooks(BooksData.defaultSearchValue, startSearchIndex)
    }, [])

    return (
        <Layout>
            {!BooksData.errorStatus ? (
                <>
                    {loaderStatus ? (
                        <StyledLoder>
                            <Loader />
                        </StyledLoder>
                    ) : (
                        <>
                            <StyledFoundResults>
                                Found {resultsCount} results in All categories
                            </StyledFoundResults>
                            <CardContainer />
                            {loaderAddBooks ? (
                                <StyledAddLoader>
                                    <Loader />
                                </StyledAddLoader>
                            ) : (
                                <StyledButtonWrapper>
                                    <Button
                                        text="Load more"
                                        onClick={handleClick}
                                    />
                                </StyledButtonWrapper>
                            )}
                        </>
                    )}
                </>
            ) : (
                <ErrorMessage />
            )}
        </Layout>
    )
})

export default Showcase
