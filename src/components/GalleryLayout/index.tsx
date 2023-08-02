import { FC } from 'react'
import styled from 'styled-components'

const Layout = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 200px);
    grid-auto-rows: 10px;
    justify-content: center;
    background-color: black;
    @media only screen and (max-width: 1178px) {
        grid-template-columns: repeat(auto-fill, 300px);
    } 
`

const CardBig = styled.div`
    padding: 0;
    margin: 15px 10px;
    border-radius: 16px;
    grid-row-end: span 45;
    overflow: hidden;
`

const CardMedium = styled.div`
    padding: 0;
    margin: 15px 10px;
    border-radius: 16px;
    grid-row-end: span 33;
    overflow: hidden;
`

const CardSmall = styled.div`
    padding: 0;
    margin: 15px 10px;
    border-radius: 16px;
    grid-row-end: span 26;
    overflow: hidden;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
interface GalleryLayoutType {
    data: string [];
}

const GalleryLayout: FC<GalleryLayoutType> = ({data}) =>{

    return (
        <Layout>
            {data.map((image, index)=>{
                if((index + 1) % 2 ===0) {
                    return (
                        <CardBig key = {image}>
                            <Image src={image} alt = 'places' />
                        </CardBig>
                    )
                } else if((index + 1) % 3 ===0) {
                    return (
                        <CardMedium key = {image}>
                            <Image src={image} alt = 'places' />
                        </CardMedium>
                    )
                }
                return (
                    <CardSmall key = {image}>
                        <Image src={image} alt = 'places' />
                    </CardSmall>
                )
            })}
        </Layout>
    )
}



export default GalleryLayout 