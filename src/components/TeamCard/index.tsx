import { FC } from 'react'
import styled from 'styled-components'

const Center = styled.div`
    display: flex;
    justify-content: center;
    cursor: pointer;
`

const FlipCard = styled.div`
    width: 100%;
    height: 300px;
    perspective: 1000px;
`

const FlipCardInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 1s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    &:hover {
        transform: rotateY(180deg);
    }
`
const CardFront = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    color: black;
`

const CardHidden = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background-color: orange;
    color: white;
    transform: rotateY(180deg);
    padding: 7%;
`

const TeamImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Text = styled.p`
    color: white;
    font-size: 20px;
    font-weight: 400;
    margin-top: 40px;
    text-align: justify;
    line-height: 30px;
`

interface TeamCardType {
    data: {id: string, image: string, detail: string}
}

const TeamCard: FC<TeamCardType> = ({data}) =>{

    return(
        <Center>
            <FlipCard>
                <FlipCardInner>
                    <CardFront>
                        <TeamImage src={data.image} />
                    </CardFront>
                    <CardHidden>
                        <Text>
                            {data.detail}
                        </Text>
                    </CardHidden>
                </FlipCardInner>
            </FlipCard>
        </Center>
    )
}

export default TeamCard