import { Category } from '../../ui/pages'
import { Fetch, List } from '../../controllers/category'

export async function getStaticPaths() {
    let categories = await List()
    
    let paths = categories?.map((category) => {
        const slug = category?.categoryData?.slug

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
    const category = await Fetch(params?.slug)

    if (category?._id) category._id = category?._id?.toString()

    return { 
        props: { 
            category: category && category?._id ? category : null
        }
    }
}

const Route = ({ category }) => <Category category={category} />
export default Route