'use client'
import { Post } from '@/api/posts'
import { useState } from 'react'
import Categories from './Categories'
import PostGrid from './PostGrid'

type Props = {
  posts: Post[]
  categories: string[]
}
const ALL_POSTS = 'All Posts'

export default function FilterablePosts({ posts, categories }: Props) {
  const [selected, setSelected] = useState(ALL_POSTS)

  console.log(selected)
  const filtered =
    selected === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selected)

  return (
    <section className="flex m-4">
      {/* @ts-expect-error Server Component */}
      <PostGrid posts={filtered} />
      <Categories
        categories={[ALL_POSTS, ...categories]}
        selected={selected}
        onClick={setSelected}
      />
    </section>
  )
}
