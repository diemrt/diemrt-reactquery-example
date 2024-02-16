import { apiBasePath } from "../utils"
import { Posts } from "./posts.types"
import axios from 'axios';

export const fetchPostsQuery = {
    queryKey: ['posts'],
    queryFn: () => axios.get<Posts>(`${apiBasePath}/posts`)
        .then(res => res.data)
}