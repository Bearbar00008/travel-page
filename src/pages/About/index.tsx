import { FC } from "react"
import styled from "styled-components"

import { TeamCard } from "../../components"
import { TeamMember } from "../../configurations"

const AboutWrapper = styled.main`
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

const TeamSection = styled.div`
    display: grid;
    margin-top: 30px;
    grid-template-columns: auto auto auto;
    grid-gap: 30px;
    @media only screen and (max-width: 1178px) {
        grid-template-columns: auto;
    }
`

const About: FC = () =>{

    return (
        <AboutWrapper>
            <Title>Discovering Our Purpose: A Glimpse into our company</Title>
            <Text>
                Empowering innovation, [Your Company Name] is a dedicated team of experts reshaping the future. With a focus on excellence, we deliver exceptional solutions, fostering lasting relationships. Join our transformative journey and make an impact
            </Text>
            <SubTitle>
                Our team
            </SubTitle>
            <TeamSection>
                {TeamMember.map((teamMember) => {
                    return <TeamCard data={teamMember} key = {teamMember.id} />
                })}
            </TeamSection>
        </AboutWrapper>
    )
}

export default About