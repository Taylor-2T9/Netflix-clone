import React from 'react'
import * as Styled from './styles'

const Header = () => {
    const [backgroundIndex, setBackgroundIndex] = React.useState(0)
    React.useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY > 15) {
                setBackgroundIndex(1)
            }
            else {
                setBackgroundIndex(0)
            }
        }
        window.addEventListener('scroll', scrollListener)
        return () => {
            window.removeEventListener('scroll', scrollListener)
        }
    }, [])
    return (
        <Styled.Header backgroundIndex={backgroundIndex}>
            <Styled.LogoArea>
                <a href='/'>
                    <Styled.Logo src={'https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png'} alt={'Netflix'} />
                </a>
            </Styled.LogoArea>
            <Styled.User>
                <a
                    href='https://github.com/Taylor-2T9'
                    target={'_blank'}
                >
                    <Styled.UserImage src={'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'} alt={'Usuário'} />
                </a>
            </Styled.User>
        </Styled.Header>
    )
}
export default Header