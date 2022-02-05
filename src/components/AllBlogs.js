import { Link } from 'react-router-dom'

// styles
import './AllBlogs.css'

export default function AllBlogs({ blogs }) {
  console.log(blogs)

  return (
    <div className="cont">
      <div className="card">
      {blogs.length === 0 && <p style={{textAlign: 'center'}}>No Blogs yet!</p>}
      {blogs.map(blog => (
        <Link to={`/blog/${blog.id}`} key={blog.id}>
          <img src={blog.blogimage} alt="" />
          <p className='content'>{blog.title}</p>
        </Link>
      ))}
      </div>
      </div>
  )
}