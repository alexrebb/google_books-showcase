import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Card from './Card'
import { Item } from '../../types'

const data: Item = {
    id: '123456',
    volumeInfo: {
        title: 'Book',
        authors: ['Pushkin', 'Blok'],
        description: 'Books',
        categories: ['Art'],
        imageLinks: {
            smallThumbnail: 'link',
            thumbnail: 'link',
        },
        publishedDate: '2022-01-01',
    },
}

const data1: Item = {
    id: undefined,
    volumeInfo: undefined,
}

const handleOpenCard = jest.fn()

describe('Card component', () => {
    it('Card renders', () => {
        render(
            <Card
                key={data.id}
                imgBook={data.volumeInfo?.imageLinks?.thumbnail}
                category={data.volumeInfo?.categories}
                descr={data.volumeInfo?.title}
                author={data.volumeInfo?.authors}
                handleOpenCard={handleOpenCard}
                bookId={data.id}
            />
        )
        expect(screen.getByText('Pushkin')).toBeInTheDocument()
        expect(screen.getByRole('img')).toBeInTheDocument()
    })

    it('Card renders without data', () => {
        render(
            <Card
                key={data1.id}
                imgBook={data1.volumeInfo?.imageLinks?.thumbnail}
                category={data1.volumeInfo?.categories}
                descr={data1.volumeInfo?.title}
                author={data1.volumeInfo?.authors}
                handleOpenCard={handleOpenCard}
                bookId={data1.id}
            />
        )
        expect(screen.queryByRole('div')).toBeNull()
    })
})
