import CarouselPosts from '@/components/Carousel/CarouselPosts'
import FeaturedPosts from '@/components/Posts/FeaturedPosts'
import Profile from '@/components/Profile/Profile'

export default function HomePage() {
  return (
    <>
      <Profile />
      {/* @ts-expect-error Server Component */}
      <FeaturedPosts />
      {/* @ts-expect-error Server Component */}
      <CarouselPosts />
    </>
  )
}
