import { apiBasePath } from "../utils"
import { Posts } from "./posts.types"
import axios from 'axios';

export const fetchPosts = axios.get<Posts>(`${apiBasePath}/posts`)
.then(res => res.data)