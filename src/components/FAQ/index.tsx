import { FC, useState } from 'react'
import styled from 'styled-components'

const FAQWrapper = styled.div`
    padding: 2% 10% 2% 5%;
    background-color: white;
    border-radius: 15px;
    margin-top: 20px;
    cursor: pointer;

    @media only screen and (max-width: 1178px) {
        padding: 5% 10%;
        margin-top: 20px;
    }
`

const FlexContainer = styled.div`
    display: flex;
`

const Text = styled.p`
    font-size: 20px;
    font-weight: 400;
    text-align: justify;
    line-height: 30px;

    @media only screen and (max-width: 1178px) {
        font-size: 18px;
        line-height: 23px;
    }
`

const Icon = styled.img`
    width: 20px;
    margin-right: 40px;
    @media only screen and (max-width: 1178px) {
        width: 15px;
        margin-right: 20px;
    }
`

const Answer = styled.div`
    margin-top: 10px;
    margin-left: 60px;
    @media only screen and (max-width: 1178px) {
        margin-left: 35px;
    }
`

interface FAQType {
    data: { id: string, question: string, answer:string}
}

const FAQ: FC<FAQType> = ({data}) => {

    const [ isOpen, setIsOpen] = useState(false)

    return (
        <FAQWrapper onClick={() => setIsOpen(prev => !prev)}> 
            <FlexContainer>
                <Icon src={isOpen ? "/icons/minus.svg" : "/icons/plus.svg"} alt = 'icon' />
                <Text>
                    {data.question}
                </Text>
            </FlexContainer> 
            {isOpen &&
                <Answer>
                    <Text>
                        {data.answer}
                    </Text>
                </Answer>
            }
        </FAQWrapper>
    )
}

export default FAQ
