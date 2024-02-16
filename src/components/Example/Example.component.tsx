import { useQuery } from "@tanstack/react-query"
import { createFetchPostsQuery } from "../../api/posts/posts.api"

const Example = () => {
    const fetchPosts = createFetchPostsQuery()
    const { data, isPending, isError } = useQuery(fetchPosts)
    
    if(isPending) 
        return '...'
    if(isError) 
        return 'Qualcosa è andato storto.'

    return (
        <div>
            {data?.map((value) => (
                <>
                    <h1 id={value.id.toString()}>{value.title}</h1>
                </>
            ))}
        </div>
    )
}

export default Example