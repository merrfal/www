import { Product } from '../../ui/pages'
import { Fetch, List } from '../../controllers/products'

export async function getStaticPaths() {
    let products = await List()

    let paths = products?.map((product) => {
        const { productData } = product
        const { slug } = productData

        return {
            params: {
                slug
            }
        }
    })

    return {
        paths,
        fallback: "blocking"
    }
}

export async function getStaticProps({ params }) {
    const product = await Fetch(params.slug)

    if (product._id) product._id = product._id.toString()
    if (product.createdAt) product.createdAt = product.createdAt.toString()
    if (product.updatedAt) product.updatedAt = product.updatedAt.toString()

    return { 
        revalidate: 1,
        props: { 
            product: product?._id ? product : null
        }
    }
}
  
const Route = ({ product }) => <Product product={product} />
export default Route