import styled from "styled-components"

export const Title = styled.div`
user-select: none;
font-size: 60px;
font-weight: bold;
padding-bottom: 20px;
`
export const Info = styled.div`
user-select: none;
font-size: 18px;
font-weight: bold;
margin-top: 15px;
div {
    display: inline-block;
    margin-right: 15px;
}
padding-bottom: 0px;
`
export const Classification = styled.div`
color: #46d369;
`
export const Year = styled.div``
export const Seasons = styled.div``
export const Description = styled.div`
font-size: 18px;
margin-top: 15px;
max-width: 45%;
color: #999;
`
export const ButtonsArea = styled.div`
margin-top: 15px;
user-select: none;
a{
    display: inline-block;
    font-size:20px;
    font-weight: bold;
    padding: 12px 25px;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;
    opacity: 1;
    transition: all ease 0.3s;
    :hover{
        opacity: 0.7;
    }
}
`
export const WatchButton = styled.a`
background-color: #FFF;
color: #000;
`
export const AddListButton = styled.a`
background-color: #333;
color: #FFF;
`
export const Genres = styled.div`
    margin-top: 15px;
    padding-bottom: 70px;
    font-size: 18px;
    color: #999;
`
export const VerticalEffect = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #111, transparent);
`
export const HorizontalEffect = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to right, #111 30%, transparent 70%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;
    padding-bottom: 80px;
`
export const Featured = styled.section<{ url: string }>`
height: 100vh;
background-size: cover;
background-position: center;
background-image: ${props => props.url};
@media(max-width:760px){
    height:90vh;
    ${Title}{
        font-size: 40px;
    }
    ${Info}{
        font-size: 16px;
    }
    ${Description}{
        font-size: 14px;
        max-width: 100%;
        margin-right: 30px;
    }
    ${WatchButton}, ${AddListButton}{
        font-size: 15px;
    }
    ${Genres}{
        font-size: 14px;
    }
}
`