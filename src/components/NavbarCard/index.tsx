import { FC, useEffect, useState } from 'react'
import styled from 'styled-components';
import { useNavigate, useLocation } from "react-router-dom";
import Decoration from '../Decoration';

interface CardType {
    background: string
    radiusposition: string
    selected: boolean
}

const Card = styled.div<CardType>`
    background-color: rgb(${props => props.background});
    position: relative;
    cursor: pointer;
    display: flex;
    padding: 10%;
    filter: grayscale(0.5);
    overflow: hidden;
    border-${props => props.radiusposition}-radius: 40px;
    ${props => props.selected 
        ? 
            "transform: scale(1.02); box-shadow: 10px 5px 50px black; z-index: 2; filter: grayscale(0);" 
        : 
            ''
    }
    transition: transform 0.1s, filter 0.5s;
    &:hover{
        filter: grayscale(0);
    }
`

const TextContainer = styled.div`
    margin-top: auto;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Title = styled.h2`
    color: white;
    font-size: 60px;
    line-height: normal;
    font-weight: 400;

    @media only screen and (max-width: 1178px) {
        font-size: 30px;
    }
`

const SubTitle = styled.p`
    color: white;
    font-size: 15px;
    line-height: normal;
    font-weight: 400;
    @media only screen and (max-width: 1178px) {
        font-size: 11px;
    }
`

interface NavbarItemType {
    id: string
    title: string
    subtitle: string
    path: string
}

interface NavbarCardType {
    index: number
    data: NavbarItemType
}


const NavbarCard: FC<NavbarCardType> = ({index, data}) =>{
    
    const navigate = useNavigate()
    const location = useLocation()
    const [isSelected, setIsSelected] = useState(false)

    const colors = [ '57, 68, 254', '255, 125, 41', '226, 221, 251', '118, 123, 214']
    const radiusPosition = ['top-left' ,'top-right' ,'bottom-left' ,'bottom-right']

    const routeHandler = () => {
        navigate(data.path)
    }

    useEffect(()=>{
        if(location.pathname === data.path) {
            setIsSelected(true)
        } else {
            setIsSelected(false)
        }
    },[location.pathname, data.path])

    return (
        
        <Card 
            background ={colors[index]}
            radiusposition = {radiusPosition[index]}
            onClick={routeHandler}
            selected = {isSelected}
        >
         
            <Decoration index={index} />
        
            <TextContainer>
                <Title>{data.title}</Title>
                <SubTitle>{data.subtitle}</SubTitle>
            </TextContainer>

        </Card>
    )
}

export default NavbarCard