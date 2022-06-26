import BooksData from '../store'
import BooksProvider from '../services/BooksProvider'
import loggerErrors from './logger'

export const searchBooks = (value: string, startIndex: string) => {
    BooksData.changeStatusLoader(true)
    BooksProvider.getBooks(value, startIndex)
        .then((res: any) => {
            BooksData.setBooksData(res)
        })
        .catch((err) => {
            loggerErrors(err)
        })
        .finally(() => BooksData.changeStatusLoader(false))
}

export const searchAddBooks = (value: string, startIndex: string) => {
    BooksData.changeLoaderAddBooks(true)
    BooksProvider.getBooks(value, startIndex)
        .then((res: any) => {
            BooksData.onAddBooksData(res)
        })
        .catch((err) => {
            loggerErrors(err)
        })
        .finally(() => BooksData.changeLoaderAddBooks(false))
}
