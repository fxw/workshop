import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Wrapper = styled.div`
  position: relative;
  background: ${props => props.theme.colors.secondary};
  padding: 1em 0;
  padding: 1% 0;
  margin: 0 0 2rem 0;
  overflow: hidden;
  h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
    text-shadow: 1px 1px 0px rgba(0,0,0,0.2);
    text-align: center;
    color: white;
    font-size: 3em;
    text-transform: uppercase;
    @media screen and (min-width: ${props => props.theme.responsive.medium}) {
      font-size: 5em;
      font-size: 5vw;
    }
  }
`

const Grid = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 200%;
  animation: slide 60s linear infinite;
  li {
    width: 12%;
    position: relative;
    .gatsby-image-wrapper {
      height: 0;
      padding: 0 0 100% 0;
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
  }

  @keyframes slide {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}
`

const FilmStrip = (props) => {
  return (
    <Wrapper>
      <h2>{props.heading}</h2>
      <Grid>
        {props.images && (
          props.images.map((image, index) => (
            <li key={index}>
              <Img sizes={image.sizes} alt={image.title} title={image.title} backgroundColor={"#EEEEEE"} />
            </li>
          ))
        )}
      </Grid>
    </Wrapper>
  )
}

export default FilmStrip