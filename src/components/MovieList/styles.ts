import styled from 'styled-components'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
export const Title = styled.h2`
margin: 0 0 0 30px;
user-select: none;
`
export const ListArea = styled.div`
overflow-x: hidden;
padding-left: 30px;
`
export const List = styled.div<{listPosition: number, listWidth: number}>`
margin-left: ${props => props.listPosition};
width: ${props => props.listWidth};
user-select: none;
transition: all ease-in-out 0.5s;
`
export const Movie = styled.div`
cursor: pointer;
display: inline-block;
width: 150px;
`
export const Poster = styled.img`
width: 100%;
transform: scale(0.9);
transition: all ease-in-out 0.3s;
    :hover{
        transform: scale(1);
    }
`
export const Navigation = styled.div`
    opacity: 0;
    transition: all ease 0.5s;
    div{
        cursor: pointer;
        position: absolute;
        width: 40px;
        height: 225px;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }
`
export const Left = styled.div`
left: 0;
`
export const NavigateBefore = styled(NavigateBeforeIcon)`
`
export const Right = styled.div`
right: 0;

`
export const NavigateNext = styled(NavigateNextIcon)`
`
export const Container = styled.div`
padding-bottom: 30px;
:hover {
${Navigation} {
    opacity: 1;
    }
}
@media(max-width: 760px){
 ${Navigation}{
     opacity: 1;
 }   
}
`