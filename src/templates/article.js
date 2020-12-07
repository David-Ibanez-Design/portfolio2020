/* Vendor imports */
import React from 'react'
import { graphql } from 'gatsby'
/* App imports */
import Layout from '../components/layout'
import SEO from '../components/seo'
import ArticleHeading from './article-heading'
import ArticleContent from './article-content'
import SuggestedArticles from './suggested-articles'
import style from './article.module.scss'
import Config from '../../config'

const Post = ({ data }) => {

  const { body, frontmatter } = data.articleContent
  const { title, tags, path, coverArticle, imagesMd, imagesLg, imagesXl, imagesXXl  } = frontmatter
  // const translations = pageContext.translations.length > 1 ? pageContext.translations : null
  const imgArticle = coverArticle.childImageSharp.fluid
  const suggestedArticles= []
  suggestedArticles.push({ node: data.suggestedArticles })

  const imagesByNameMd =
  imagesMd &&
  imagesMd.reduce((images, image, index) => {
    images[`${image.name}`] = images[
      `${toString(image.name)}`
      ] || {
        ...image.childImageSharp,
      };
      return images;
    }, {});

    const imagesByNameLg =
    imagesLg &&
    imagesLg.reduce((images, image, index) => {
      images[`${image.name}`] = images[
        `${toString(image.name)}`
        ] || {
          ...image.childImageSharp,
        };
        return images;
      }, {});

  const imagesByNameXl =
  imagesXl &&
  imagesXl.reduce((images, image, index) => {
    images[`${image.name}`] = images[
      `${toString(image.name)}`
      ] || {
        ...image.childImageSharp,
      };
      return images;
    }, {});

    const imagesByNameXXl =
    imagesXXl &&
    imagesXXl.reduce((images, image, index) => {
      images[`${image.name}`] = images[
        `${toString(image.name)}`
        ] || {
          ...image.childImageSharp,
        };
        return images;
      }, {});

  // Set lang based on the current path. Couldn't not figure out a bette way
  // if(path.includes(Config.translatedLanguage)){var currentLang = Config.translatedLanguage;}

  return (
    <>
      {/* <SEO
        title={title}
        path={path}
        description={title}
        contentType="article"
        imageUrl={imgArticle.src}
        keywords={tags}
        // translations={translations}
      /> */}
      <div className={style.container}>
        <ArticleHeading title={title} tags={tags} imgArticle={imgArticle} />
        <div className={style.content}>
          <ArticleContent 
            body={body} 
            imageMd={imagesByNameMd}
            imageLg={imagesByNameLg}
            imageXl={imagesByNameXl}
            imageXXl={imagesByNameXXl}
          />
        </div>
         {/* <SuggestedArticles 
          articles={suggestedArticles} 
        /> */}
      </div>
    </>
  )
}

export const pageQuery = graphql`

  query($locale: String!, $title: String!, $nextArt: Int) {
    articleContent: mdx(
        frontmatter: { title: { eq: $title } }
        fields: { locale: { eq: $locale } }
      ) {
      body
      frontmatter {
        title
        tags
        path
        order
        coverArticle {
          childImageSharp {
            fluid(maxWidth: 1035, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp,
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
        coverHomepage {
          childImageSharp {
            fluid(maxWidth: 1035, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
        imagesMd {
          name,
          childImageSharp {
            fluid(
              maxWidth: 1035,
              quality: 100
              ) {
              ...GatsbyImageSharpFluid_withWebp
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
        imagesLg {
          name,
          childImageSharp {
            fluid(
              maxWidth: 1280,
              quality: 100,
              srcSetBreakpoints: [1035, 1280, 1500]
              ) {
              ...GatsbyImageSharpFluid_withWebp
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
        imagesXl {
          name,
          childImageSharp {
            fluid(
              maxWidth: 1500,
              quality: 100,
              srcSetBreakpoints: [1035, 1280, 1500]
              ) {
              ...GatsbyImageSharpFluid_withWebp
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }       
        imagesXXl {
          name,
          childImageSharp {
            fluid(
              maxWidth: 2560,
              quality: 100,
              srcSetBreakpoints: [1035, 1280, 1500]
              ) {
              ...GatsbyImageSharpFluid_withWebp
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }               
        
      }
    }
    suggestedArticles :mdx(frontmatter: { order: { eq: $nextArt } })
        {
        frontmatter {
          path
          title
          tags
          order
          coverArticle {
            childImageSharp {
              fluid(maxWidth: 1035, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
                ...GatsbyImageSharpFluidLimitPresentationSize
              }
            }
          }
          coverHomepage {
            childImageSharp {
              fluid(maxWidth: 1035, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
                ...GatsbyImageSharpFluidLimitPresentationSize
              }
            }
          }
          suggestedArt {
            childImageSharp {
              fluid(maxWidth: 590, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
                ...GatsbyImageSharpFluidLimitPresentationSize
              }
            }
          }
        }
    }
  }
`
export default Post
