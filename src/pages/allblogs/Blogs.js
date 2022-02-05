import React from 'react';
import './Blogs.css'
import { useCollection } from '../../hooks/useCollection';
import AllBlogs from '../../components/AllBlogs'
import Background from '../../assets/background.JPG'
import { useAuthContext } from '../../hooks/useAuthContext';

export default function Blogs() {
  const {users} = useAuthContext()
  const {documents, error} = useCollection('blogs')
  console.log(users);
  return (
    <>
    <div className='back'>
    <img src={Background} alt="" />
    <h1>A few words about this blog platform, Ghost, and how this site was made</h1>
    <p>Why Ghost (& Figma) instead of Medium, WordPress or other options?</p>
    <hr />
    </div>
     <h2 className='all'>All articles</h2>
    {error && <p className="error">{error}</p>}
    {documents && <AllBlogs blogs={documents} />}
    </>
  );
}

