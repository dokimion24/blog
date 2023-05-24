import { getPostData } from '@/api/posts'
import MarkdownViewer from '@/components/Markdown/MarkdownViewer'
import React from 'react'

interface Props {
  params: {
    slug: string
  }
}

export default async function PostDetailPage({ params }: Props) {
  const post = await getPostData(params.slug)

  return (
    <>
      <h1>{post.title}</h1>
      <MarkdownViewer content={post.content} />
    </>
  )
}
