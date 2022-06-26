import Showcase from '../pages/ShowCase'
import CurrentBook from '../pages/CurrentBook'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Showcase />} />
                <Route path={'/current-book'} element={<CurrentBook />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
