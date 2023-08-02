import { FC } from 'react'
import styled from 'styled-components'

interface StoryWrapperType {
    leftSide: boolean
}

const StoryWrapper = styled.div<StoryWrapperType>`
    display: flex;
    max-width: 600px;
    height: auto;
    position: relative;
    margin-top: 25px;
    ${props => props.leftSide ? "" : "margin-left: auto;"}

    @media only screen and (max-width: 1178px) {
        max-width: 300px;
    }
`

interface BubbleImageType {
    leftSide: boolean
}

const BubbleImage = styled.div<BubbleImageType>`
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 75px;
    overflow: hidden;
    top: -20px; 
    ${props => props.leftSide ?"left: -30px;" : "right: -30px;"}
    
    @media only screen and (max-width: 1178px) {

    }
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

interface CommentBubbleType {
    color: string
}

const CommentBubble = styled.div<CommentBubbleType>`
    background-color: ${props => props.color};
    border-radius: 20px;
    padding: 3% 5%;
`

const Text = styled.p`
    margin-top: 15px;
    color: white;
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;

    @media only screen and (max-width: 1178px) {
        font-size: 15px;
        line-height: 25px;
        margin-top: 20px;
    } 
`

interface TitleNameType {
    leftSide: boolean
}

const TitleName = styled.p<TitleNameType>`
    margin-top: 20px;
    margin-left: 60px;
    color: white;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    ${props => props.leftSide ?"" : "margin-left: 80%;"}
    @media only screen and (max-width: 1178px) {
        ${props => props.leftSide ?"" : "margin-left: 50%;"}
    } 
`

interface StoryType {
    data: { id: string, name: string, image: string, message: string}
    leftSide: boolean
    index: number
}

const Story: FC<StoryType> = ({data, leftSide, index}) =>{
    const colors = ["green", "blue"]
    return(
        <StoryWrapper leftSide = {leftSide}>
            <BubbleImage leftSide = {leftSide}>
                <Image src = {data.image} alt = 'image' />
            </BubbleImage>
            <CommentBubble color = {colors[index]}>
                <TitleName leftSide = {leftSide}>
                    {data.name}
                </TitleName>
                <Text>
                    {data.message}
                </Text>
            </CommentBubble>
        </StoryWrapper>
    )
}

export default Story