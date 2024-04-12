import { KeyValueItem, apiMutationOptions, apiQueryOptions } from "../utils"

export const readPostsQuery = () => apiQueryOptions<KeyValueItem>({
    url: () => `/posts`,
    providesTags: ['posts'],
    enabled: false
})

export const readPostQuery = ({id} : {id: string}) => apiQueryOptions<KeyValueItem>({
    url: () => `/posts/${id}`,
    providesTags: ['posts', id],
    enabled: false
})

export const createPostMutation = () => apiMutationOptions<KeyValueItem>({
    url: () => `/posts`,
    invalidateTags: ['posts'],
    body: {},
    method: "POST"
})

export const updatePostMutation = ({id} : {id: string}) => apiMutationOptions<KeyValueItem>({
    url: () => `/posts/${id}`,
    invalidateTags: ['posts'],
    body: {},
    method: "PUT"
})

export const deletePostMutation = ({id} : {id: string}) => apiMutationOptions<KeyValueItem>({
    url: () => `/posts/${id}`,
    invalidateTags: ['posts'],
    method: "PUT"
})