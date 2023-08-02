import { FC } from "react"
import styled from "styled-components"

import { faqData } from "../../configurations"
import { FAQ } from "../../components"


const HelpWrapper = styled.main`
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

const Help: FC = () =>{


    return (
        <HelpWrapper>
            <Title>Help Center: Empowering Your Journey with Assistance</Title>
            <Text>
                Welcome to our Support Center. Our dedicated team of experts is here to provide timely assistance for your journey. Whether you have questions or encounter issues, we're just a message away. Count on us for a smooth and successful experience with our platform. Let us light the path to your success together
            </Text>
            <SubTitle>
                FAQ
            </SubTitle>

            {faqData.map((faq)=>{
                return <FAQ key = {faq.id} data ={faq} />
            })}
        </HelpWrapper>
    )
}

export default Help