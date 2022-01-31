import './Blog.css'
import React from 'react';
import { useParams } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext';
import { useDocument } from '../../hooks/useDocument'
import AllBlogs from '../../components/AllBlogs'
import { useCollection } from '../../hooks/useCollection';
import BlogSummary from './BlogSummary'

export default function Blog() {
  const {documents} = useCollection('blogs')
  const { user } = useAuthContext()

  const { id } = useParams();
  const { document, error } = useDocument('blogs', id)

  if (error) {
    return <div className="error">{error}</div>
  }
  if (!document) {
    return <div className="loading">Loading...</div>
  }
  return (
    <div>
      <div className='top-heading'>
      <h1>A few words about this blog platform, Ghost, and how this site was made</h1>
      <p>Why Ghost (& Figma) instead of Medium, WordPress or other options?</p>
      </div>
    <div className='project-details'>
      <BlogSummary blog={document}/>
    </div>
    <hr />
    <h1 className='read'>What to read next</h1>
    {documents && <AllBlogs blogs={documents} />}
    </div>
  )
}
