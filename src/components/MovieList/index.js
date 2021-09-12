import React from 'react'
import * as Styled from './styles'

const MovieList = ({ title, items }) => {
    const [scrollX, setScrollX] = React.useState(-400)
    const handleLeftArrow = () => {
        setScrollX(state => {
            let newState = state + Math.round(window.innerWidth / 2)
            if (newState > 0) {
                newState = 0
            }
            return newState
        })
    }
    const handleRightArrow = () => {
        setScrollX(state => {
            let newState = state - Math.round(window.innerWidth / 2)
            let listWidth = items.results.length * 150
            if ((window.innerWidth - listWidth) > newState) {
                newState =  window.innerWidth - listWidth - 60
            }
            return newState
        })
    }
    return (
        <Styled.Container>
            <Styled.Title>{title || 'Indisponível'}</Styled.Title>
            <Styled.Navigation>
                <Styled.Left
                    onClick={handleLeftArrow}
                >
                    <Styled.NavigateBefore style={{ fontSize: 50 }} />
                </Styled.Left>
                <Styled.Right
                    onClick={handleRightArrow}
                >
                    <Styled.NavigateNext style={{ fontSize: 50 }} />
                </Styled.Right>
            </Styled.Navigation>
            {items.results && <Styled.ListArea>
                <Styled.List
                    listPosition={scrollX + 'px'}
                    listWidth={items ? items.results?.length * 150 + 'px' : '3000px'}
                >
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <Styled.Movie
                            key={key}>
                            <Styled.Poster
                                src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                                alt={item.original_title}
                            />
                        </Styled.Movie>
                    ))}
                </Styled.List>
            </Styled.ListArea>}
        </Styled.Container>
    )
}
export default MovieList