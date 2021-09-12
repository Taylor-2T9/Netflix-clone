import styled from 'styled-components'
export const Container = styled.div`
`
export const Lists = styled.section`
margin-top: -140px;
@media(max-width: 760px){
    margin-top: -120px;
}
`
export const Loading = styled.div`
position: fixed;
left: 0;
right: 0;
top: 0;
bottom: 0;
z-index: 3;
background-color: #000;
display: flex;
justify-content: center;
align-items: center;
`
export const Footer = styled.footer`
user-select: none;
margin-top: 50px;
padding-bottom: 50px;
text-align: center
`