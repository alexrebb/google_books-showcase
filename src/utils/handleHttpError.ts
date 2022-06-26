import BooksData from '../store'

const handleHttpError = (res: any) => {
    if (!res.ok) {
        BooksData.changeErrorStatus(true)
        throw new Error(`Could not fetch, status: ${res.statusText}`)
    } else {
        return res
    }
}

export default handleHttpError
