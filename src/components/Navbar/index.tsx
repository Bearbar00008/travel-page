import { FC } from 'react'
import styled from 'styled-components';

import NavbarCard  from '../NavbarCard';
import { navbarData } from '../../configurations';

const NavbarWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: auto auto;
  padding: 2%;

  @media only screen and (max-width: 1178px) {
    height: 50vh;
    padding: 2%;
  }
`

const Navbar: FC = () =>{

    return(
        <NavbarWrapper>
            {navbarData.map((navbarItem, index) => {
                return <NavbarCard index={index} data={navbarItem} key={navbarItem.id} />
            })}
        </NavbarWrapper>
    )
}

export default Navbar