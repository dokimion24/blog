import CarouselPost from '@/components/Carousel/CarouselPost'
import PostList from '@/components/Posts/FeaturedPosts'
import Profile from '@/components/Profile/Profile'

export default function HomePage() {
  return (
    <>
      <Profile />
      {/* @ts-expect-error Server Component */}
      <PostList />
      {/* @ts-expect-error Server Component */}
      <CarouselPost />
    </>
  )
}
