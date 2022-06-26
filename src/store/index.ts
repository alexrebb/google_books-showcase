import { makeAutoObservable } from 'mobx'
import { Books } from '../types'
import { filterBooks } from '../utils/filterBooks'
import { sortBooks } from '../utils/sortBooks'

class BooksData {
    constructor() {
        makeAutoObservable(this)
    }

    booksData: Books = {
        kind: '',
        totalItems: 0,
        items: [],
    }

    addData: Books = {
        kind: '',
        totalItems: 0,
        items: [],
    }
    errorStatus = false

    startSearchIndex = '0'

    defaultSearchValue = 'JS'

    loaderStatus = true

    currentCategory = 'all'

    currentSorter = 'relevance'

    currentBookId = ''

    loaderAddBooks = false

    changeStartIndex = (index: string) => {
        this.startSearchIndex = index
    }

    setBookId(bookId: string) {
        this.currentBookId = bookId
    }

    changeStatusLoader(status: boolean) {
        this.loaderStatus = status
    }

    changeCurrentCategory(category: string) {
        this.currentCategory = category
    }

    changeCurrentSorter(sortValue: string) {
        this.currentSorter = sortValue
    }

    changeSearchValue(value: string) {
        this.defaultSearchValue = value
    }

    changeLoaderAddBooks(status: boolean) {
        this.loaderAddBooks = status
    }

    changeErrorStatus(status: boolean) {
        this.errorStatus = status
    }

    onAddBooksData = (data: Books) => {
        this.addData = data
        this.booksData.items = [...this.booksData.items, ...this.addData.items]
    }

    getCurrentBook() {
        const currentBook = this.booksData.items.find(
            (book) => book.id === this.currentBookId
        )
        return currentBook
    }

    setBooksData(data: Books) {
        if (!data.totalItems) {
            this.errorStatus = true
            return
        }
        this.booksData = data
    }

    getFilteredData() {
        if (
            this.currentCategory === 'all' &&
            this.currentSorter === 'relevance'
        ) {
            return this.booksData.items
        }
        if (this.currentCategory === 'all' && this.currentSorter === 'newest') {
            return sortBooks(this.booksData.items)
        }

        if (this.currentCategory !== 'all' && this.currentSorter === 'newest') {
            const filteredBooks = filterBooks(
                this.booksData.items,
                this.currentCategory
            )
            return sortBooks(filteredBooks)
        }

        const filteredBooks = filterBooks(
            this.booksData.items,
            this.currentCategory
        )
        return filteredBooks
    }
}

export default new BooksData()
