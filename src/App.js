import React from 'react'
import Tmdb from './Tmdb'
import * as Styled from './styles'
import GlobalStyle from './global'
import MovieList from './components/MovieList'
import FeaturedMovie from './components/FeaturedMovie'
import Header from './components/Header'
function App() {
  const [movieLists, setMovieLists] = React.useState([])
  const [featuredMovieData, setFeaturedMovieData] = React.useState(null)
  React.useEffect(() => {
    // Pegando os dados dos filmes na API
    const loadAll = () => {
      setTimeout(async () => {
        const list = await Tmdb.getHomeList()
          setMovieLists(list)
          const originals = list.filter(i => i.slug === 'originals')[0].items.results
          const randomPosition = Math.floor(Math.random() * (originals.length - 1))
          const randomChosen = originals[randomPosition]
          const chosenInfo = await Tmdb.getMovieInfo(randomChosen.id, 'tv')
          setFeaturedMovieData(chosenInfo)
      }, 420)
    }
    loadAll()
  }, [])
  return (
    <Styled.Container>
      <Header />
      {
        featuredMovieData &&
        <FeaturedMovie item={featuredMovieData} />
      }
      <Styled.Lists>
        {movieLists.map((item, key) => (
          <MovieList key={key} title={item.title} items={item.items} />
        ))}
      </Styled.Lists>
      <GlobalStyle />
      <Styled.Footer>
        Feito por Taylor
        <span role='img' aria-label='alien-monster' title='Alien Monster'>👾</span>
        <span role='img' aria-label='ninja-cat' title='Uma dádiva dos ninjas'>🐱‍👤</span><br />
        Direitos de imagem para Netflix<br />
        Dados utilizados do site Themoviedb.org
      </Styled.Footer>
      {movieLists.length <= 0 && <Styled.Loading>
        <img src={'https://1.bp.blogspot.com/-B9juta27w6o/Xzk4GGrOziI/AAAAAAABtpE/0OMhU_0hPTY7PhayDfL3eJ5mIc2csWWWwCLcBGAsYHQ/s1600/Netflix_LoadTime.gif'} alt={'Carregando'} />
      </Styled.Loading>}
    </Styled.Container>
  )
}

export default App;
