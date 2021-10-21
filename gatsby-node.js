// exports.createPages = async function ({ actions, graphql }) {
//     const { data } = await graphql(`
//       query {
//         allWpPost {
//           edges {
//             node {
//               slug
//               title
//             }
//           }
//         }
//       }
//     `)
//     data.allWpPost.edges.forEach(post => {
//         const slug = post.node.slug
//         actions.createPage({
//             path: `/blog/${slug}`,
//             component: require.resolve(`./src/templates/blog-post.js`),
//             context: { slug: slug, layout: "special" },
//         })
//     })
// }