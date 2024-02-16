import { apiBasePath } from "../utils"
import { Posts } from "./posts.types"

export const fetchPosts = fetch(`${apiBasePath}/posts`)
    .then((res) => res.json()) as Promise<Posts>