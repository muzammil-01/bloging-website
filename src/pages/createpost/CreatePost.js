import { useState, useEffect } from 'react';
import './CreatePost.css'
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';
import Select from 'react-select'
import { useCollection } from '../../hooks/useCollection'
import {useDocument} from '../../hooks/useDocument'
import { useFirestore } from '../../hooks/useFirestore.js';
import { projectStorage } from '../../firebase/config';


const tags = [
  { value: 'food', label: 'Food' },
  { value: 'travel', label: 'Travel' },
  { value: 'gaming', label: 'Gaming' },
  { value: 'science', label: 'Science' },
]


const CreatePost = () => {
  const { addDocument, response } = useFirestore('blogs');
  const [title, setTitle] = useState('')
  const [tag, setTag] = useState('')
  const [readTime, setReadTime] = useState('')
  const [content, setContent] = useState('')
  const [formError, setFormError] = useState(null)
  const { user } = useAuthContext()
  const {document} = useDocument('users', user.uid)
  const navigate = useNavigate()
  const [attachment, setAttachment] = useState('')
  const [attachmentError, setAttachmentError] = useState(null)
  console.log(user);



  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormError(null)
    if (!tag) {
      setFormError('please select a tag')
      return
    }

    const createdBy = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      id: user.uid,
      about: document.aboutYourself
    }

    const uploadPath = `thumbnails/${user.uid}/${attachment.name}`
    const img = await projectStorage.ref(uploadPath).put(attachment)
    const imgUrl = await img.ref.getDownloadURL();


    const blog = {
      title,
      tag: tag.value,
      readTime,
      content,
      blogimage: imgUrl,
      createdBy,
      comments: [],
      likes:0

    }
    await addDocument(blog)
    if (!response.error) {
      navigate('/')
    }
  }



  const handleAttachment = (e) => {
    setAttachment(null)
    let selected = e.target.files[0]
    console.log(selected)
    if (!selected) {
      setAttachmentError("Please select a File")
      return
    }
    if (!selected.type.includes("image")) {
      setAttachmentError("Selected file must be an image");
      return
    }
    if (selected > 100000) {
      setAttachmentError("File size must be less than 100kb");
      return
    }

    setAttachmentError(null);
    setAttachment(selected);
    console.log("Attchmnent Updated")
  }

  useEffect(()=>{
    if(!user){
      navigate('/')
    }
  },[user])
  return (
    <div className='contain'>
      <form className='create-form' onSubmit={handleSubmit}>
        <h1>Create NEW BLOG POST</h1>
        <label>
          <span>Title</span>
        <input
          required
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          />
          </label>

        <label>
          <span>Tag</span>
        <Select
          onChange={(option) => setTag(option)}
          options={tags}
          />
          </label>

        <label><span>Attachment</span>
        <input
        className='attach'
          type="file"
          onChange={handleAttachment}
          />
           {attachmentError && <div className='error'>{attachmentError}</div>}
        </label>


        <label><span>Read Time</span>
        <input
          type="text"
          onChange={(e) => setReadTime(e.target.value)}
          value={readTime}
          />
          </label>


        <label>
          <span>Content</span>
        <textarea
          required
          onChange={(e) => setContent(e.target.value)}
          value={content}
          >
        </textarea>
          </label>

        <button className='create'>Create</button>
        {formError && <p className='error'>{formError}</p>}
      </form>
    </div>
  );
};
export default CreatePost;