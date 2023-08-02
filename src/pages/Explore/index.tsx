import { FC } from "react"
import styled from "styled-components"

import { GalleryLayout } from "../../components"

const ExploreWrapper = styled.main`
    padding: 0% 20% 10% 10%;
    @media only screen and (max-width: 1178px) {
        padding: 15% 10%;
    }
`

const Title = styled.h1`
    color: white;
    font-size: 60px;
    font-weight: 400; 
    line-height: 70px;

    @media only screen and (max-width: 1178px) {
        font-size: 40px;
        line-height: 50px;
        text-align: center;
    }
`

const Text = styled.p`
    color: white;
    font-size: 20px;
    font-weight: 400;
    margin-top: 40px;
    text-align: justify;
    line-height: 30px;
`

const SubTitle = styled.h2`
    color: white;
    font-size: 40px;
    font-weight: 400;
    margin-top: 60px;

    @media only screen and (max-width: 1178px) {
        font-size: 30px;
        text-align: center;
    }
`


const Explore: FC = () =>{

    return (
        <ExploreWrapper>
            <Title>Voyage to Enchanting Realms: Exploring Wonders Around the Globe</Title>
            <Text>
            Unveil enchanting destinations, diverse cultures, and awe-inspiring landscapes on a transcendent odyssey. Let our curated collection inspire your unforgettable journey of wonder and exploration
            </Text>
            <SubTitle>
                Places to visits
            </SubTitle>
            <GalleryLayout />
        </ExploreWrapper>
    )
}

export default Explore