// import React from "react"
// import { Helmet as ReactHelmet } from "react-helmet"
// import { graphql } from "gatsby"
// import styled from "@emotion/styled"

// const Container = styled.div`
//   padding: 15vh 12vw 0 12vw;

//   & > .cover {
//     margin: 0 -12vw 0 -12vw !important;
//     width: 100vw !important;
//     max-width: calc(100% + 24vw) !important;
//     height: auto;
//     vertical-align: middle;
//     object-fit: cover !important;
//   }

//   & > .subtitle {
//     text-align: center;
//   }

//   h1 {
//     font-size: 4rem;
//     margin-bottom: 40px;
//     text-align: center;
//     @media screen and (max-width: 768px) {
//       font-size: 2.5rem;
//     }
//   }

//   h3 {
//     font-size: 1.3rem;
//     text-align: left;
//     margin-bottom: 40px;
//   }

//   h5 {
//     font-size: 1.2rem;
//     text-align: left;
//   }

//   p {
//     font-size: 1.13rem;
//     line-height: 2rem;
//     text-align: justify;
//     font-weight: 300;
//     text-indent: 3rem;
//   }

//   li {
//     font-size: 1.13rem;
//     line-height: 2rem;
//     padding-left: 32px;
//     list-style-position: outside;
//   }

//   figure {
//     width: 100% !important;
//     text-align: center;
//     margin: 0 !important;
//     padding-bottom: 2rem;
//     align-content: center;
//   }

//   img {
//     max-height: 100vh;
//     max-width: 76vw;
//     align-content: center;
//   }
// `

// export default function BlogPost({ data }) {
//   const post = data.wpPost

//   return (
//     <Container>
//       <ReactHelmet>
//         <title>{post.seo.seoTitle}</title>
//         <meta name="description" content={post.seo.seoDescription} />

//         <meta name="og:title" content={post.seo.seoTitle} />
//         <meta name="og:description" content={post.seo.seoDescription}/>
//         <meta name="og:image" content={post.featuredImage.node.sourceUrl} />
//         <meta property="og:type" content="article" />
//         <meta property="article:author" content={post.author.node.name} />
//         <meta property="article:published_time" content={post.date} />
//         <meta property="article:section" content={post.categories.nodes[0].name} />
//         {/* <meta property="article:tag" content="" /> */}
//         {/* <meta name="og:url" content='permaculture/blog/${slug}' /> */}
//       </ReactHelmet>

//         <h1>{post.title}</h1>
//         <h3 className="subtitle">par {post.author.node.name} | {post.date}</h3>
//         { post.featuredImage &&
//           <img
//             className="cover"
//             src={post.featuredImage.node.sourceUrl}
//           />
//         }
//         <div dangerouslySetInnerHTML={{ __html: post.content }} />
//     </Container>
//   )
// }

// export const query = graphql`
//   query($slug: String!) {
//     wpPost(slug: { eq: $slug }) {
//       title
//       content
//       slug
//       date (formatString: "LL")
//       author {
//         node {
//           name
//         }
//       }
//       featuredImage {
//         node {
//           sourceUrl
//         }
//       }
//       seo {
//         seoDescription
//         seoTitle
//       }
//       tags {
//         nodes {
//           name
//         }
//       }
//       categories {
//         nodes {
//           name
//         }
//       }
//     }
//   }
// `