import './Blog.css'
import 'react-icons'
import React from 'react';
import { useNavigate, useParams } from "react-router-dom"
import {useCollection} from '../../hooks/useCollection'
import { useState } from 'react';
import Avatar from "../../components/Avatar"
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { AiFillLike } from 'react-icons/ai'
import BlogComment from './BlogComment';
import { useFirestore } from '../../hooks/useFirestore';
import { useDocument } from '../../hooks/useDocument';
import { useAuthContext } from '../../hooks/useAuthContext';



export default function BlogSummary({ blog }) {
  const { id } = useParams()
  const { user } = useAuthContext()
  const [show,setShow]=useState(false)
  const { document, error } = useDocument('blogs', id)
  const { updateDocument, response } = useFirestore('blogs')
    
    
  

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
              className='like'><AiFillLike />Like</button>
            <button className='comment' onClick={()=>setShow(!show)}>Comment</button>
          </div>
        </div>

        {show && <BlogComment blog={blog} />}
        <p className='tags'>Tags: {blog.tag}</p>
        <hr />
        <div>
          <Avatar src={blog.createdBy.photoURL} />
          <strong> {blog.createdBy.displayName} </strong>
        </div>
      </div>
    </div>
  );
}
