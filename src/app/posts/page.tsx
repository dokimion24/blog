import FilterablePosts from '@/components/Posts/FilterablePosts'
import { getAllPosts } from '@/api/posts'

export default async function PostsPage() {
  const posts = await getAllPosts()
  const categories = [...new Set(posts.map((post) => post.category))]
  return <FilterablePosts posts={posts} categories={categories} />
}
