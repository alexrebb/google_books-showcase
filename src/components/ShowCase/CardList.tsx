import Card from './Card'
import BooksData from '../../store'
import { observer } from 'mobx-react'
import { Item } from '../../types'

interface props {
    handleOpenCard: Function
}

const CardList: React.FC<props> = observer(({ handleOpenCard }) => {
    const data: Item[] | undefined = BooksData.getFilteredData()

    return (
        <>
            {data &&
                data.map((book) => (
                    <Card
                        key={book.id}
                        imgBook={book.volumeInfo?.imageLinks?.thumbnail}
                        category={book.volumeInfo?.categories}
                        descr={book.volumeInfo?.title}
                        author={book.volumeInfo?.authors}
                        handleOpenCard={handleOpenCard}
                        bookId={book.id}
                    />
                ))}
        </>
    )
})

export default CardList
