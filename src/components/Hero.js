import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Wrapper = styled.div`
  position: relative;
  margin: 0 0 2rem;
`

const BgImg = styled(Img)`
  @supports (object-fit: cover) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 300px;
    height: auto;
    @media (min-width: ${props => props.theme.responsive.small}) {
      height: ${props => props.height || 'auto'};
    }
    & > img {
      object-fit: ${props => props.fit || 'cover'} !important;
      object-position: ${props => props.position || '50% 50%'} !important;
    }
  }
`

const Title = styled.h2`
  text-transform: capitalize;
  font-weight: bold;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  z-index: 2;
  font-size: 2em;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 3em;
  }
`

const Hero = (props) => {
  return (
    <Wrapper>
      <BgImg sizes={props.image.sizes} height={props.height} position={props.position} alt={props.image.title} title={props.image.title} backgroundColor={"#EEEEEE"} />
      {props.title && (<Title>{props.title}</Title>)}

      <ul>
        {props.links && (
          props.links.map((link) => (
            <li key={link.id}><a href={`#${link.slug}`}>{link.title}</a></li>
          ))
        )}
      </ul>

    </Wrapper>
  )
}

export default Hero
