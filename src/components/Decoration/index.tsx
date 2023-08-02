import { FC } from 'react'
import styled from 'styled-components'

interface SphereType {
    top: number
    left: number
    size: number
    color: string
}

const Sphere = styled.div<SphereType>`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    border-radius: ${props => props.size}px;
    background-color: ${props => props.color};
    top: ${props => props.top}%;
    left: ${props => props.left}%;
    position: absolute;
`

interface SquareType {
    rotate: number
    top: number
    left: number
    length: number
    color: string
}

const Square = styled.div<SquareType>`
    width: 10px;
    height: ${props => props.length}px;
    background-color: orange;
    position: absolute;
    top: ${props => props.top}%;
    left: ${props => props.left}%;
    transform: skew(30deg) rotate(${props => props.rotate}deg);
    background-color: ${props => props.color};
`

interface DecorationType {
    index: number
}
const Decoration: FC<DecorationType> = ({index}) =>{

    if(index === 0){
        return (<>
            <Square
                rotate={0}
                top={0}
                left={50}
                length={50}
                color ="orange"
            />
            <Square
                rotate={100}
                top={10}
                left={50}
                length={150}
                color ="green"
            />
        </>)
    }

    if(index === 1){
        return (<>
            <Square
                rotate={50}
                top={10}
                left={60}
                length={130}
                color ="yellow"
            />
            <Square
                rotate={120}
                top={30}
                left={50}
                length={150}
                color = "grey"
            />
            <Sphere 
                top={10}
                left={20}
                size={50}
                color ="blue"
            />
        </>)
    }

    if(index === 2){
        return (<>
            <Sphere 
                top={10}
                left={20}
                size={50}
                color ="red"
            />

            <Sphere 
                top={30}
                left={60}
                size={80}
                color ="orange"
            />
        </>)
    }

    if(index === 3){
        return (<>
            <Square
                rotate={120}
                top={30}
                left={50}
                length={150}
                color = "grey"
            />
            <Sphere 
                top={30}
                left={60}
                size={80}
                color ="green"
            />
        </>)
    }

    return null


}

export default Decoration