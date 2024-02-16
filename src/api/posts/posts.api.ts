import { createApiQuery } from "../utils"
import { Posts } from "./posts.types"

export const createFetchPostsQuery = () => createApiQuery<Posts>({
    query: () => `/posts`,
    providesTags: ['posts']
})