import { useQuery } from "@tanstack/react-query"
import { createFetchPostsQuery } from "../../../api/posts/posts.api"

const PostList = () => {
    const fetchPosts = createFetchPostsQuery()
    const { data, isPending, isError } = useQuery(fetchPosts)
    
    if(isPending) 
        return '...'
    if(isError) 
        return 'Qualcosa è andato storto.'

    return (
        <table>
            <tr>
                <th>Titolo del post</th>
                <th>Azioni</th>
            </tr>
            {data?.map((value) => (
                <tr key={value.id}>
                    <td id={value.id.toString()}>{value.title}</td>
                    <td></td>
                </tr>
            ))}
        </table>
    )
}

export default PostList