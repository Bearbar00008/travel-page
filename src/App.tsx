import './App.css'
import styled from 'styled-components'
import { Routes, Route } from "react-router-dom"

import { Navbar, SecondaryNavbar } from './components'

import { 
  Home, 
  Help, 
  About, 
  Stories,
  Explore
} from './pages'

const Screen = styled.div`
  width: 100%;
  height: 100vh;

`

const PageFlex = styled.div`
  display: flex;
  @media only screen and (max-width: 1178px) {
    flex-direction: column;
  }
`

const LeftSide = styled.div`
  width: 55%;
  order: 1;
  @media only screen and (max-width: 1178px) {
    width: 100%;
    order: 2;
  }
`

const RightSide = styled.div`
  width: 45%;
  order: 2;
  margin-top: -150px;
  @media only screen and (max-width: 1178px) {
    width: 100%;
    order: 1;
    margin-top: 0px;
  }
`

function App() {
  return (
    <>
      <Screen>
        <SecondaryNavbar />
        <PageFlex>
          <LeftSide>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/explore" element={<Explore />}></Route>
              <Route path="/stories" element={<Stories />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/help" element={<Help />}></Route>
            </Routes>
          </LeftSide>
  
          <RightSide>
            <Navbar />
          </RightSide> 
        </PageFlex>
      </Screen>
    </>
  );
}

export default App;
