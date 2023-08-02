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
    children?: any;
}

const GalleryLayout: FC<GalleryLayoutType> = ({children}) =>{

    return (
        <Layout>
            <CardBig>
                <Image src='/places/1.jpg' alt = 'places' />
            </CardBig>
            <CardMedium>
                <Image src='/places/2.jpg' alt = 'places' />
            </CardMedium>
            <CardSmall>
                <Image src='/places/3.jpg' alt = 'places' />
            </CardSmall>
            <CardBig>
                <Image src='/places/4.jpg' alt = 'places' />
            </CardBig>
            <CardMedium>
                <Image src='/places/5.jpg' alt = 'places' />
            </CardMedium>
            <CardSmall>
                <Image src='/places/6.jpg' alt = 'places' />
            </CardSmall>
        </Layout>
    )
}



export default GalleryLayout 