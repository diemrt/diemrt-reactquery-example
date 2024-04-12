import { apiQueryOptions } from "../utils"
import { Posts } from "./posts.types"

export const fetchPostsQuery = () => apiQueryOptions<Posts>({
    url: () => `/posts`,
    providesTags: ['posts']
})