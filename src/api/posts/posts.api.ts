import { apiQueryOptions } from "../utils"
import { Posts } from "./posts.types"

export const fetchPostsQuery = () => apiQueryOptions<Posts>({
    query: () => `/posts`,
    providesTags: ['posts']
})