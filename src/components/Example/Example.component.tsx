import { useQuery } from "@tanstack/react-query"
import { fetchPostsQuery } from "../../api/posts/posts.api"

const Example = () => {
    const { data, isPending, isError } = useQuery(fetchPostsQuery)
    
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