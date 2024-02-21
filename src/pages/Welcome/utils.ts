import { createContext } from "react";
import { Posts } from "../../api/posts/posts.types";

export const PostsContext = createContext<Posts | undefined | void>(undefined)