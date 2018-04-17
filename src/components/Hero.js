import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Wrapper = styled.div`
  position: relative;
    margin: 1em;
  @media (min-width: ${props => props.theme.responsive.medium}) {
    margin: 1.5em;
  }
`

const BgImg = styled(Img)`
  @supports (object-fit: cover) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 400px;
    @media (min-width: ${props => props.theme.responsive.medium}) {
      height: calc(100vh - 3em);
    }
    & > img {
      object-fit: ${props => props.fit || 'cover'} !important;
      object-position: ${props => props.position || '50% 50%'} !important;
    }
    &:before {
      content: '';
      background: rgba(0,0,0,.25);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      height: 100%;
      width: 100%;
      z-index: 1;
    }
  }
`

const Logo = styled.div`
  z-index: 2;
  width: 40%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    width: 50%;
    max-width: 400px;
  }
`

const LinkList = styled.ul`
  width: 100%;
  text-align: center;
  z-index: 99;
  position: absolute;
  bottom: 2em;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    bottom: 2.5em;
    font-size: 1.25em;
  }
  li {
    display: inline-block;
    margin: 0 .5em;
  }
`

const ScrollLink = styled.button`
  text-decoration: underline;
  color: white;
  font-weight: bold;
  opacity: 1;
  transition: .3s;
  &:hover {
    opacity: .75;
  }
`


const scrollTo = (e) => {
  document.querySelector('.' + e.target.id ).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

const Hero = (props) => {
  return (
    <Wrapper>
      <BgImg sizes={props.image.sizes} position={props.position} alt={props.image.title} title={props.image.title} backgroundColor={"#EEEEEE"} />

      {props.logo && (<Logo><Img sizes={props.logo.sizes} alt={props.logo.title} title={props.logo.title} /></Logo>)}

      <LinkList>
        {props.links && (
          props.links.map((link) => (
            <li key={link.id}>
              <ScrollLink onClick={scrollTo} id={link.slug}>{link.title}</ScrollLink>
            </li>
          ))
        )}
        <li>
          <ScrollLink onClick={scrollTo} id="sign-up">Sign Up</ScrollLink>
        </li>
      </LinkList>

    </Wrapper>
  )
}

export default Hero
