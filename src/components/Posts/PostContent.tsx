import { PostData } from '@/api/posts'
import MarkdownViewer from '@/components/Markdown/MarkdownViewer'

interface Props {
  post: PostData
}

export default function PostContent({ post }: Props) {
  return (
    <section className="flex flex-col p-4">
      <p className="font-semibold ml-2">{post.date.toString()}</p>
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p className="text-xl font-bold">{post.description}</p>
      <div className="w-44 border-2 border-sky-600 mt-4 mb-8"></div>
      <MarkdownViewer content={post.content} />
    </section>
  )
}
