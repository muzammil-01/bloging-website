import './Blog.css'
import 'react-icons'
import React, { useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom"
import { useCollection } from '../../hooks/useCollection'
import { useState } from 'react';
import Avatar from "../../components/Avatar"
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { AiFillLike } from 'react-icons/ai'
import BlogComment from './BlogComment';
import { useFirestore } from '../../hooks/useFirestore';
import { useDocument } from '../../hooks/useDocument';
import { useAuthContext } from '../../hooks/useAuthContext';



export default function BlogSummary({ blog }) {
  const { user } = useAuthContext()
  const { id } = useParams()
  const [show, setShow] = useState(false)
  const [like, setLike] = useState(false)
  const { documents, error } = useDocument('blogs', id)
  const { updateDocument, response } = useFirestore('blogs');
  console.log(document);


  const handleLike = (id, likes) => {
    if (!like) {

      updateDocument(id, { likes: likes + 1 })
    }
    if (like) {
      console.log("disliked")
      updateDocument(id, { likes: likes - 1 })
    }
  }


  return (
    <div>
      <img className='img' src={blog.blogimage} alt="" />
      <div className='summary'>
        <div className='blog-summary'>
          <Avatar src={blog.createdBy.photoURL} />
          {blog.createdBy.displayName} <br />
          {blog.readTime}<br />
          {blog.createdAt.toDate().toDateString()}
          <div className="fb-tw">
            <span className='facebook'><BsFacebook /></span>
            <span className='twitter'><BsTwitter /></span>
          </div>
        </div>

        <div className='blog-content'>
          <p>{blog.content}</p>
          <div className='btn'>
            <button
              className='like' onClick={() => { if (user) { setLike(!like); handleLike(id, blog.likes) }; if (!user) { alert('please login') } }}>{blog.likes}<AiFillLike />Like</button>
            <button className='comment' onClick={() => setShow(!show)}>Comment</button>
          </div>
        </div>

        {show && <BlogComment blog={blog} />}
        <p className='tags'>Tags: {blog.tag}</p>
        <hr/>
          <div className="bios">
            <div className="bios-image">
              <Avatar src={blog.createdBy.photoURL}/>
            </div>
            <div className="bios-content">
            <strong>{blog.createdBy.displayName} </strong> 
           {blog.createdBy.about}
            </div>
          </div>
      </div>
    </div>
  );
}
