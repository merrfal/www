import { Profile } from '../../ui/pages'
import { Fetch, List } from '../../controllers/users'

export async function getStaticPaths() {
    let users = await List()

    let paths = users?.map((user) => {
        const username = user?.userData?.username

        return {
            params: {
                username
            }
        }
    })

    return {
        paths,
        fallback: "blocking"
    }
}

export async function getStaticProps({ params }) {
    const profile = await Fetch(params?.username)

    if (profile?._id) profile._id = profile?._id?.toString()

    return { 
        props: { 
            profile: profile && profile?._id ? profile : null
        }
    }
}

const Route = ({ profile }) => <Profile profile={profile} />
export default Route