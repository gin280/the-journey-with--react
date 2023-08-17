import customFetch from "./http"
export const fetchPosts = () => customFetch("/posts")
export const fetchPost = (postId) => customFetch(`/posts/${postId}`)
export const fetchPostComments = (postId) =>
  customFetch(`/posts/${postId}/comments`)
export const fetchUsers = () => customFetch("/users")
export const fetchUser = (useId) => customFetch(`/users/${useId}`)
export const fetchPostsForUser = (userId) =>
  customFetch(`/posts?userId=${userId}`)
export const fetchTodos = () => customFetch("/todos")
export const fetchTodo = (userId) => customFetch(`/todos?userId=${userId}`)
