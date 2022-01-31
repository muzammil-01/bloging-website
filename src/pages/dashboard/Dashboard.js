import './Dashboard.css'
import React, { useEffect } from 'react'
import { useCollection } from '../../hooks/useCollection'
import { useAuthContext } from '../../hooks/useAuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { useFirestore } from "../../hooks/useFirestore";
import { FaTrashAlt } from 'react-icons/fa';

export default function Dashboard() {
  const { documents, error } = useCollection('blogs');
  const { user } = useAuthContext();
  const Navigate = useNavigate();
  const { deleteDocument, response } = useFirestore('blogs');

  const deleteBlog = async (id) => {

    if (window.confirm("Are you sure you want to delete the blog?")) {
      await deleteDocument(id);
    }

  }
  useEffect(() => {

    if (!user) {
      Navigate("/login")
    }

  }, [user, Navigate])


  return (

    <div className="dashboard-container">
      {user && documents && documents.map((blog) => {
        if (user.uid === blog.createdBy.id) {
          return (
              <div className="dashboard-card">
                <Link to={`/blog/${blog.id}`} className='dashboard-item' key={blog.id}>
                <div className='delete'>
                            <i onClick={()=> {deleteBlog(blog.id)}}><FaTrashAlt/></i>
                </div>
                  <img src={blog.blogimage} alt="" />
                  <p className='dashboard-content'>{blog.title}</p>
                </Link>
              </div>
          )
        }
      })
    }
    </div>
  )
}