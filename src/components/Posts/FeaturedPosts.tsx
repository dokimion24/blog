import { getFeaturedPosts } from '@/api/posts'
import PostGrid from './PostGrid'

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts()

  return (
    <section className="my-2">
      <h2 className="text-2xl font-bold my-2">Posts</h2>
      <PostGrid posts={posts} />
    </section>
  )
}
