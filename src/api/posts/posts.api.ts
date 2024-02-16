import { apiQueryOptions } from "../utils"
import { Posts } from "./posts.types"

export const createFetchPostsQuery = () => apiQueryOptions<Posts>({
    query: () => `/posts`,
    providesTags: ['posts']
})