import { getPostData } from '@/api/posts'
import MarkdownViewer from '@/components/Markdown/MarkdownViewer'
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
      <section className="flex flex-col p-4">
        <p className="font-semibold ml-2">{post.date.toString()}</p>
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <p className="text-xl font-bold">{post.description}</p>
        <div className="w-44 border-2 border-sky-600 mt-4 mb-8"></div>
        <MarkdownViewer content={post.content} />
      </section>
    </article>
  )
}
