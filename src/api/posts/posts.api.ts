import { KeyValueItem, apiQueryOptions } from "../utils"

export const fetchPostsQuery = () => apiQueryOptions<KeyValueItem>({
    url: () => `/posts`,
    providesTags: ['posts'],
    enabled: false
})

export const fetchPostQuery = ({id} : {id: string}) => apiQueryOptions<KeyValueItem>({
    url: () => `/posts/${id}`,
    providesTags: ['posts', id],
    enabled: false
})