import React from 'react'
import styled from 'styled-components'
const colors = [
    'transparent',
    '#141414'
]
export const Header = styled.header<{ backgroundIndex: number }>`
    position: fixed;
    user-select: none;
    z-index: 4;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    background-color: ${({ backgroundIndex }) => colors[backgroundIndex]};
    transition: all ease 0.5s;
`
export const LogoArea = styled.div`
height: 30px;
`
export const Logo = styled.img`
height: 100%;
`
export const User = styled.div`
height: 35px;

`
export const UserImage = styled.img`
height: 100%;
border-radius: 3px;
`
