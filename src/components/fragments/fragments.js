import { graphql } from 'gatsby'

export const articleFields = graphql`
  fragment articleFields on MdxFrontmatter {
      title
      tags
      synopsis
  } 
`

export const imageXXSmall = graphql`
  fragment imageXXSmall on File {
    childImageSharp {
              fluid(maxWidth: 555) {
                ...GatsbyImageSharpFluid
                ...GatsbyImageSharpFluidLimitPresentationSize
              }
    }
  }
`

export const imageXSmall = graphql`
  fragment imageXSmall on File {
    childImageSharp {
              fluid(maxWidth: 590) {
                ...GatsbyImageSharpFluid
                ...GatsbyImageSharpFluidLimitPresentationSize
              }
    }
  }
`

export const imageSmall = graphql`
  fragment imageSmall on File {
    childImageSharp {
              fluid(maxWidth: 624) {
                ...GatsbyImageSharpFluid
                ...GatsbyImageSharpFluidLimitPresentationSize
              }
    }
  }
`

export const imageMedium = graphql`
  fragment imageMedium on File {
    childImageSharp {
            fluid(maxWidth: 1035) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
    }
  }
`

export const imageLg = graphql`
  fragment imageLg on File {
    childImageSharp {
            fluid(maxWidth: 1280,srcSetBreakpoints: [1035, 1280, 1500]) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
    }
  }
`

export const imageXl = graphql`
  fragment imageXl on File {
    childImageSharp {
            fluid( maxWidth: 1500, srcSetBreakpoints: [1035, 1280, 1500]
              ) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
  }
`

export const imageXXl = graphql`
  fragment imageXXl on File {
    childImageSharp {
            fluid(
              maxWidth: 2560, srcSetBreakpoints: [1035, 1280, 1500]
              ) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
    }
  }
`