import { Product } from '../../ui/pages'

// export async function getStaticPaths() {
//   const slugs = await List()

//   const paths = slugs.map((slug) => ({
//     params: { slug }
//   }))

//   return { paths, fallback: true }
// }
  
// export async function getStaticProps({ params }) {
//   const metaTags = await fetchMetaTags(params.slug)

//   return {
//     props: {
//       initialMetaTags: metaTags,
//     },
//     revalidate: 1,
//   }
// }
  
const Route = () => <Product />

export default Route