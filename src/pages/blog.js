// import React from "react"
// import { useStaticQuery, graphql, Link } from "gatsby"
// import styled from "@emotion/styled"

// const Container = styled.div`
//     padding: 15vh 12vw 15vw 12vw;
//     & > .liste {
//         display: grid;
//         grid-template-columns: 50% 50%;
//         grid-gap: 50px;
//         @media screen and (max-width: 768px) {
//             grid-template-columns: 100%;
//         }
//         & > .article {
//             color: primary;
//             background-color: secondary;
//             &:after {
//                 content: '';
//                 display: block;
//                 width: 100%;
//                 border-top: 2px solid;
//                 margin: 10px auto 16px;
//               }
//         }
//     }
//     h3 {
//         font-size: 1rem;
//         color: grey;
//     }
// `

// export default function Blog() {
//     const data = useStaticQuery(
//         graphql`
//             query {
//                 allWpPost(
//                     sort: {fields: date, order: DESC},
//                     filter: {categories: {nodes: {elemMatch: {name: {eq: "Blog"}}}}},
//                 ) {
//                     edges {
//                         node {
//                             id
//                             slug
//                             title
//                             date(formatString: "D MMMM YYYY")
//                             author { node { name }}
//                             featuredImage { node { sourceUrl }}
//                             categories { nodes { name }}
//                         }
//                     }
//                 }
//             }
//         `
//     )

//     const posts = data.allWpPost.edges

//     return (
//         <Container>
//             <h1>Articles</h1>
//             <div className="liste">
//                 {posts.map(post => (
//                     <Link to={`/blog/${post.node.slug}`} key={post.node.id} className="article">
//                         <h2>{post.node.title}</h2>
//                         <h3>{post.node.author.node.name}, {post.node.date}</h3>
//                         { post.node.featuredImage && post.node.featuredImage.node &&
//                             <img
//                                 style={{ maxWidth: "100%", height: "inherit" }}
//                                 src={post.node.featuredImage.node.sourceUrl}
//                             />
//                         }
//                     </Link>
//                 ))}
//             </div>
//         </Container>
//     )
// }
