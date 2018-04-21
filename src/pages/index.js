import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Modules from '../components/Modules'
import SignUp from '../components/SignUp'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Container from '../components/Container'

const Section = styled.section`
  position: relative;
`;

const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 3em;
  padding: 4rem 0 2rem 0;
  z-index: 99;
  position: relative;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    font-size: 5em;
    font-size: 5vw;
  }
`;

const IndexPage = ({data}) =>  {

  const sections = data.allContentfulSection.edges;
  const navigation = data.contentfulNavigation;

  return (
    <Container>
      <Nav links={navigation.links}/>
      {sections.map(({node: section}) => (
        <Section key={section.id} className={section.slug}>
          {section.heading && (<Title>{section.heading}</Title>)}
          <Modules modules={section.modules} />
        </Section>
      ))}
      <Section className="register">
        <Title>Register</Title>
        <SignUp/>
      </Section>
      <Footer/>
    </Container>
  )
}

export const query = graphql`
query Index {
  contentfulNavigation {
        title
        links {
          title
          id
          slug
        }
      }
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
            heading
            image {
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
          ... on ContentfulIntro {
            title
            heading
            image {
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
          ... on ContentfulBiography {
            title
            name
            portfolio
            instagram
            facebook
            switch
            image {
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
          ... on ContentfulFilmStrip {
            title
            heading
            images {
              title
              sizes(maxWidth: 1800) {
                ...GatsbyContentfulSizes_withWebp_noBase64
              }
            }
          }
          ... on ContentfulQuote {
            title
            text {
              childMarkdownRemark {
                html
              }
            }
          }
          ... on ContentfulList {
            title
            heading
            items {
              childMarkdownRemark {
                html
              }
            }
          }
          ... on ContentfulEventDate {
            title
            heading
            start(formatString: "MMMM DD, YYYY")
            finish(formatString: "MMMM DD, YYYY")
          }
          ... on ContentfulDivider {
            title
            image {
              title
              sizes(maxWidth: 1800) {
                ...GatsbyContentfulSizes_withWebp_noBase64
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
