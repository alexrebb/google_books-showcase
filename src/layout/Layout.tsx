import Header from './Header'

import styled from 'styled-components/macro'
import { ReactChild } from 'react'

const StyledOverlay = styled.div`
    display: flex;
    flex-flow: column;
    max-width: 100%;
    height: 100%;
`
interface props {
    children: ReactChild
}

const Layout: React.FC<props> = ({ children }) => {
    return (
        <StyledOverlay>
            <Header />
            <>{children}</>
        </StyledOverlay>
    )
}

export default Layout
