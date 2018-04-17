import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Container from  '../components/Container'
import Modules from  '../components/Modules'
import SignUp from  '../components/SignUp'


const Wrapper = styled.div`
`;

const Section = styled.section`
  position: relative;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 3em;
  padding: 4rem 0 2rem 0;
  font-weight: bold;
  z-index: 99;
  position: relative;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    font-size: 7vw;
  }
`;

const IndexPage = ({data}) =>  {

  const sections = data.allContentfulSection.edges;

  return (
    <Wrapper>
      {sections.map(({node: section}) => (
        <Section key={section.id} className={section.slug}>
          {section.heading && (<Title>{section.heading}</Title>)}
          <Modules modules={section.modules} />
        </Section>
      ))}
      <Section className="sign-up">
        <Title>Sign Up</Title>
        <SignUp/>
      </Section>
    </Wrapper>
  )
}

export const query = graphql`
query Index {
  allContentfulSection(sort: { fields: [sortOrder], order: ASC }) {
    edges {
      node {
        id
        title
        slug
        sortOrder
        heading
        modules {
          __typename
          ... on ContentfulHero {
            title
            cover {
              title
              sizes(maxWidth: 1800) {
                ...GatsbyContentfulSizes_withWebp_noBase64
              }
            }
            logo {
              title
              sizes(maxWidth: 1000) {
                ...GatsbyContentfulSizes_withWebp_noBase64
              }
            }
            links {
              title
              id
              slug
            }
          }
          ... on ContentfulBiography {
            title
            portfolio
            instagram
            facebook
            switch
            profileImage {
              title
              sizes(maxWidth: 1800) {
                ...GatsbyContentfulSizes_withWebp_noBase64
              }
            }
            text {
              childMarkdownRemark {
                html
              }
            }
          }
          ... on ContentfulBodyText {
            title
            text {
              childMarkdownRemark {
                html
              }
            }
          }

          ... on ContentfulPhotoGrid {
            title
            images {
              title
              sizes(maxWidth: 1800) {
                ...GatsbyContentfulSizes_withWebp_noBase64
              }
            }
          }

          ... on ContentfulIntroText {
            title
            heading
            text {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
  }
}
`


export default IndexPage
