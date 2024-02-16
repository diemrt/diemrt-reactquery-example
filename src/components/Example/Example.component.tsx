import { useQuery } from "@tanstack/react-query"
import { fetchPosts } from "../../api/posts/posts.api"

const Example = () => {
    const { data, isPending, error } = useQuery({
        queryKey: ['posts'],
        queryFn: () => fetchPosts
    })
    
    if(isPending) return '...'
    if(error) return 'Qualcosa è andato storto.'
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