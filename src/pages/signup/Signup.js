import './Signup.css'
import {Link, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import { useSignup } from '../../hooks/useSignup';
import { useEffect } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';

export default function Signup() {
  const navigate = useNavigate()
  const {user} = useAuthContext()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [aboutYourself, setAboutYourself] = useState('')
  const [thumbnail, setThumbnail] = useState(null)
  const [thumbnailError, setThumbnailError] = useState(null)
  const {signup, isPending, error} = useSignup()


  const handleSubmit = (e)=>{
    e.preventDefault();
    signup(email, password, displayName, aboutYourself,thumbnail);
  }




  const handleThumbnail = (e)=>{
    setThumbnail(null)
    let selected = e.target.files[0]
    console.log(selected);

    if(!selected){
      setThumbnailError('Please select an image')
      return
    }
    if(!selected.type.includes('image')){
      setThumbnailError('Selected file must be an image')
      return
    }
    if(selected.size > 1000000)
    {
      setThumbnailError('Image file size must be less than 100kb')
      return
    }
    setThumbnailError(null)
    setThumbnail(selected)

  }

  useEffect(() => {
    if(user){
       navigate('/')
     }
     },[user]);



  return (

    <form className="signup-form" onSubmit={handleSubmit}>
    <h1>Create An Account</h1>

    <p>Create an account to enjoy all the <br/>services without any ads for free!</p>

    <input 
     required
     type="email" 
     placeholder='Email'
     onChange={(e)=> setEmail(e.target.value)}
     value={email}
     />

    <input 
    required 
    type="password" 
    placeholder='Password' 
    onChange={(e)=> setPassword(e.target.value)}
    value={password}
    />

    <input 
    required 
    type="text" 
    placeholder='Display Name'
    onChange={(e)=> setDisplayName(e.target.value)}
    value={displayName}
    />

   <input 
   type="text" 
   className='yourself' 
   placeholder='write something about yourself'
   onChange={(e)=> setAboutYourself(e.target.value)}
   value={aboutYourself}
   />

   <input  
   type="file"
   onChange={handleThumbnail}
   />
    {thumbnailError && <div className='error'>{thumbnailError}</div>}

    {!isPending && <button className="btn">Sign up</button>}
      {isPending && <button className="btn">Loading...</button>}

      <p>Already Have Account? <br/>
      <Link to='/login'>Sign in</Link>
      </p>

    {error && <div className='error'>{error}</div>}
  </form>
  );
}
