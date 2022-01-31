import './Blog.css'
import { useState } from "react"
import { timestamp } from "../../firebase/config"
import { useAuthContext } from "../../hooks/useAuthContext"
import { useFirestore } from "../../hooks/useFirestore"
import Avatar from "../../components/Avatar"

export default function BlogComment({blog}) {
    const { user } = useAuthContext()
    const { updateDocument, response } = useFirestore('blogs')
    const [newComment, setNewComment] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault();
    

        if(user){
        const commentToAdd = {
          displayName: user.displayName,
          photoURL: user.photoURL,
          content: newComment,
          createdAt: timestamp.fromDate(new Date()),
          id: Math.random()
        }
        
        await updateDocument(blog.id, {
          comments: [...blog.comments, commentToAdd],
        })
        if (!response.error) {
          setNewComment('')
        }
      }
        if(!user){
          alert("You have to login first")
       }
    }
  return (
      
      <div className="blog-comments">
      <h4>Comments</h4>
      <ul>
        {blog.comments.length > 0 && blog.comments.map(comment => (
          <li key={comment.id}>
            <div className="comment-author">
              <Avatar src={comment.photoURL} />
              {comment.displayName} <br/>             
              {comment.createdAt.toDate().toDateString()} 
            </div>
            <div className="comment-content">
              <p>{comment.content}</p>
            <hr/>
            </div>
          </li>
        ))}
      </ul>

      <form className="add-comment" onSubmit={handleSubmit}>
        <label>
          <span>Add new comment:</span>
          <textarea 
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
          ></textarea>
        </label>
        <button className="btn">Add Comment</button>
      </form>
    </div>
  );
}
