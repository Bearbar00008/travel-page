import { FC } from "react"
import styled from "styled-components"

import Button from "../../components/Button"


const HomeWrapper = styled.main`
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

const ButtonWrapper = styled.div`
    margin-top: 40px;
`

const Home: FC = () =>{

    const bookHandler = () => {
        alert("It is booked!");
    }

    return (
        <HomeWrapper>
            <Title>It's never too late to try something new</Title>
            <Text>
                Three paths lead to knowledge: the path of reflection is the noblest, the path of imitation is the easiest, and the path of experience is the bitterest.
            </Text>
            <ButtonWrapper>
                <Button onClick={bookHandler}>
                    Book now
                </Button>
            </ButtonWrapper>
        </HomeWrapper>
    )
}

export default Home