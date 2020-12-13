/* Vendor imports */
import React from 'react'
import { graphql } from 'gatsby'
/* App imports */
// import SEO from '../components/seo'
import ArticleHeading from './article-heading'
import ArticleContent from './article-content'
import SuggestedArticles from './suggested-articles'
import style from './article.module.scss'

const Post = ({ data }) => {

  const { body, frontmatter } = data.articleContent
  const { title, tags, coverArticle, imagesMd, imagesLg, imagesXl, imagesXXl  } = frontmatter
  const suggestedArticles = []
  suggestedArticles.push({ node: data.suggestedArticles })
  let imagesObj = []

  function reduceObj(objToReduce, name){
    const rsl = objToReduce && objToReduce.reduce((images, image, index) => {
      images[`${image.name}`] = images[
        `${toString(image.name)}`
        ] || {
          ...image.childImageSharp,
        };
        return images;
      }, {});
      imagesObj[name] = rsl
      return imagesObj
  }

  reduceObj(imagesMd, "md")
  reduceObj(imagesLg, "lg")
  reduceObj(imagesXl, "xl")
  reduceObj(imagesXXl, "xxl")

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
        <ArticleHeading title={title} tags={tags} imgArticle={coverArticle.childImageSharp.fluid} />
        <div className={style.content}>
          <ArticleContent body={body} imagesObj={imagesObj} />
        </div>
         <SuggestedArticles  articles={suggestedArticles} />
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
        ...articleFields
        order
        coverArticle {
          ...imageMedium
        }
        coverHomepage {
          ...imageMedium
        }
        imagesMd {
          name,
          ...imageMedium
        }
        imagesLg {
          name,
          ...imageLg
        }
        imagesXl {
          name,
          ...imageXl
        }       
        imagesXXl {
          name,
          ...imageXXl
        }               
        
      }
    }
    suggestedArticles :mdx(
      frontmatter: { order: { eq: $nextArt }}
      fields: { locale: { eq: $locale }}
      )
        {
        parent {
          ... on File {
            relativeDirectory
          }
        }
        frontmatter {
          ...articleFields
          order
          coverArticle {
            ...imageMedium
          }
          coverHomepage {
            ...imageMedium
          }
          suggestedArt {
            ...imageXSmall
          }
        }
    }
  }
`
export default Post
