import BooksData from '../store'

const loggerErrors = (err: any) => {
    BooksData.changeErrorStatus(true)
    console.error(err.message)
}

export default loggerErrors
