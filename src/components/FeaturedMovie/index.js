import React, { useEffect } from "react"
import * as Styled from './styles'

const FeaturedMovie = ({ item }) => {
    const [featuredInfo, setFeaturedInfo] = React.useState(null)
    const [genres, setGenres] = React.useState([])
    useEffect(() => {
        //Armazenando as informações do destaque num estado
        const launchDate = item.first_air_date
        const launchYear = launchDate.slice(0, launchDate.indexOf('-'))
        let description = item.overview
        if (description.length > 250) {
            description = description.substring(0, 250) + '...'
        }
        setFeaturedInfo({
            title: item.original_name,
            classification: item.vote_average,
            launchYear,
            numberOfSeasons: item.number_of_seasons,
            description
        })
        //Armazenando os gêneros do filme no array
        for (const genre in item.genres) {
            setGenres(state => {
                if (genres.indexOf(item.genres[genre].name) === -1) {
                    state.push(item.genres[genre].name)
                    return [...state]
                } else {
                    return state
                }
            })
        }
    }, [item, genres])
    return (
        <Styled.Featured style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <Styled.VerticalEffect>
                <Styled.HorizontalEffect>
                    {<Styled.Title>{featuredInfo?.title}</Styled.Title>}
                    <Styled.Info>
                        <Styled.Classification>{featuredInfo?.classification} pontos</Styled.Classification>
                        <Styled.Year>
                            {featuredInfo?.launchYear}
                        </Styled.Year>
                        <Styled.Seasons>
                            {featuredInfo?.numberOfSeasons} temporada{featuredInfo?.numberOfSeasons > 1 && 's'}
                        </Styled.Seasons>
                    </Styled.Info>
                    <Styled.Description>{featuredInfo?.description}</Styled.Description>
                    <Styled.ButtonsArea>
                        <Styled.WatchButton href={`#`}
                            onClick={() => {
                                window.alert('Ainda não é possível fazer isso!')
                            }}>
                            ▶ Assistir
                        </Styled.WatchButton>
                        <Styled.AddListButton href={`#`}
                            onClick={() => {
                                window.alert('Ainda não é possível fazer isso!')
                            }}>
                            + Minha Lista
                        </Styled.AddListButton>
                    </Styled.ButtonsArea>
                    <Styled.Genres>
                        <strong>Gêneros:</strong> {genres.join(', ')}
                    </Styled.Genres>
                </Styled.HorizontalEffect>
            </Styled.VerticalEffect>
        </Styled.Featured>
    )
}

export default FeaturedMovie