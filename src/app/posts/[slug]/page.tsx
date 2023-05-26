import { getPostData } from '@/api/posts'
import PostContent from '@/components/Posts/PostContent'
import Image from 'next/image'

interface Props {
  params: {
    slug: string
  }
}

export default async function PostDetailPage({ params }: Props) {
  const post = await getPostData(params.slug)

  return (
    <article className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4">
      <Image
        className="w-full h-1/5"
        src={`/images/posts/${post.path}.png`}
        alt={post.title}
        width={760}
        height={420}
      />
      <PostContent post={post} />
    </article>
  )
}
