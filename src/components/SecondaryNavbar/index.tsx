import { FC } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SecondaryNavbarWrapper = styled.div`
    width: 100%;
    padding: 1% 3%;
`

const LogoElement = styled.img`
    width: 100px;
`

const SecondaryNavbar: FC = () =>{

    return(<>
        <SecondaryNavbarWrapper>
            <Link to = '/'>
                <LogoElement src = '/logo/logo.png' alt = 'logo'/>
            </Link>
        </SecondaryNavbarWrapper>
    </>
)}

export default SecondaryNavbar