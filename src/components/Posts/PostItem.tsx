import { Post } from '@/api/posts'
import PostCard from './PostCard'

interface Props {
  posts: Post[]
}

export default async function PostItem({ posts }: Props) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.path}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  )
}
