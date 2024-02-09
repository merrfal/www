import { Product } from '../../ui/pages'
import { Fetch, List } from '../../controllers/products'

export async function getStaticPaths() {
    let products = await List()

    let paths = products?.map((product) => {
        const slug = product?.productData?.slug

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
    const product = await Fetch(params?.slug)
    
    if (product?._id) product._id = product?._id?.toString()

    return { 
        props: { 
            product: product && product?._id ? product : null
        }
    }
}
  
const Route = ({ product }) => <Product product={product} />
export default Route