import { FC } from "react"
import styled from "styled-components"

import { Story } from "../../components"
import { stories } from "../../configurations"

const StoriesWrapper = styled.main`
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

const Stories: FC = () =>{

    return (
        <StoriesWrapper>
            <Title>Chronicles of satisfaction: Tales from Our Valued Clients</Title>
            <Text>
                Discover the remarkable journeys of our esteemed clients, reflecting resilience, achievements, and boundless possibilities. Join us on this captivating journey of inspiration and celebration
            </Text>
            <SubTitle>
                Stories
            </SubTitle>
            <div>
                {stories.map((story, index) => {
                    return <Story 
                                key={story.id}
                                data={story}
                                leftSide={+story.id % 2 !== 0}
                                index={index}
                            />
                })}
            </div>
        </StoriesWrapper>
    )
}

export default Stories