import PostList from '@/components/Posts/PostList'
import Profile from '@/components/Profile/Profile'

export default function HomePage() {
  return (
    <>
      <Profile />
      {/* @ts-expect-error Server Component */}
      <PostList />
    </>
  )
}
