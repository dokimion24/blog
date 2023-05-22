import { getFeaturedPosts } from '@/api/posts'
import PostItem from './PostItem'

export default async function PostList() {
  const posts = await getFeaturedPosts()

  return (
    <section>
      <h2 className="text-2xl font-bold">Posts</h2>
      {/* @ts-expect-error Server Component */}
      <PostItem posts={posts} />
    </section>
  )
}
