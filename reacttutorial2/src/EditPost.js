import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import DataContext from './Context/DataContext';

const EditPost = () => {
  const {posts, handleEdit, editBody, setEditBody, editTitle, setEditTitle} = useContext(DataContext)

  const {id} = useParams();
  const post = posts.find(post => (post.id).toString() === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  },[post,setEditTitle, setEditBody]);

  return (
    <main className='newpost'>
      {editTitle && 
      <>
        <h2>Edit Post</h2>
        <form className='newpostform' onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="postTitle">Title:</label>
          <input type="text" id='postTitle' required value={editTitle} onChange={(e) => setEditTitle(e.target.value)}/>
          <label htmlFor="postBody">Post:</label>
          <textarea id="postBody" required value={editBody} onChange={(e) => setEditBody(e.target.value)} ></textarea>
          <button className='editbutton' type='submit' onClick={() => handleEdit(post.id)} >Submit</button>
        </form>
      </>
      }
      {!editTitle && 
      <>
        <h2>Page Not Found</h2>
            <p>Well, that's disappointing.</p>
            <p>
                <Link to='/'>Visit Our Homepage</Link>
            </p>
      </>
      }
    </main>
  );
}

export default EditPost;
