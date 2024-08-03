// import Header from './Header';
// import Nav from './Nav';
// import Home from './Home';
// import NewPost from './NewPost';
// import PostPage from './PostPage';
// import About from './About';
// import Missing from './Missing';
// import Footer from './Footer';
// import Post from './Post';

// import { Link, Route, Routes } from 'react-router-dom';
// import PostLayout from './PostLayout';

// function App() {
//   return (
//     <div className="App">
//       <nav>
//         <ul>
//           <li> <Link to='/'>Home</Link></li>
//           <li> <Link to='/about'>About</Link></li>
//           <li> <Link to='/newpost'>NewPost</Link></li>
//           <li> <Link to='/postpage'>PostPage</Link></li>
//         </ul>
//       </nav>
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/about' element={<About/>}/>
//         <Route path='/newpost' element={<NewPost/>}/>
//         <Route path='/postpage' element={<PostLayout/>}>
//           <Route index element={<PostPage/>}/>
//           <Route path=':id' element={<Post/>}/>
//           <Route path='newpost' element={<NewPost/>}/>
//           <Route path='*' element={<Missing/>}/>
//         </Route>
//       </Routes>
//       {/* <Header/>
//       <Nav/>
//       <Home/>
//       <NewPost/>
//       <PostPage/>
//       <About/>
//       <Missing/>
//       <Footer/> */}
//     </div>
//   );
// }

// export default App;



// import Header from './Header';
// import Nav from './Nav';
// import Home from './Home';
// import NewPost from './NewPost';
// import PostPage from './PostPage';
// import About from './About';
// import Missing from './Missing';
// import Footer from './Footer';
// import Post from './Post';

// import { Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
// import PostLayout from './PostLayout';
// import { useEffect, useState } from 'react';
// import { format } from 'date-fns';

// function App() {
//   const [posts, setPosts] = useState([
//     {
//       id:1,
//       title: 'React',
//       datetime: '01-Jun',
//       body: 'React-Learing'
//     },
//     {
//       id:2,
//       title: 'HTML',
//       datetime: '01-Apr',
//       body: 'HTML-Learning'
//     },
//     {
//       id:3,
//       title: 'CSS',
//       datetime: '01-Mar',
//       body: 'CSS-Learning'
//     },
//     {
//       id:4,
//       title: 'BOOTSTRAP',
//       datetime: '01-Feb',
//       body: 'BOOTSTRAP-Learing'
//     }
//   ])
//   const [search, setSearch] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [postTitle, setPostTitle] = useState('');
//   const [postBody, setPostBody] = useState('');
//   const navigate = useNavigate();

//      useEffect(() => {
//        const filteredResults = posts.filter((post) =>
//        (((post.body).toLowerCase()).toUpperCase()).includes(search) || 
//        ((post.title).toLowerCase()).includes(search));

//     setSearchResults(filteredResults.reverse());
//   }, [posts, search])

//     const handleSubmit = (e) => {
//       e.preventDefault();
//       const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
//       const datetime = format(new Date(), 'MMMM dd, yyyy pp');
//       const newPost = { id, title: postTitle, datetime, body: postBody };
//       const allPosts = [...posts, newPost];
//       setPosts(allPosts);
//       setPostTitle('');
//       setPostBody('');
//       navigate('/')    
//     }
//     const handleDelete = (id) => {
//       const postsList = posts.filter(post => post.id!== id);
//       setPosts(postsList);
//       navigate('/')
//     }

// return (
//     <div className="App">
//       <Header title='Rockabye Media App'/>
//       <Nav search={search} setSearch={setSearch} />
//       <Routes>
//         <Route path="/" element={<Home posts={searchResults}/>}/>         
//         <Route path='post'>
//           <Route index element={<NewPost handleSubmit={handleSubmit} postTitle={postTitle} setPostTitle={setPostTitle} postBody={postBody} setPostBody={setPostBody}/>}/>
//           <Route path=':id' element={<PostPage posts={posts} handleDelete={handleDelete}/>}/>
//         </Route>
//         <Route path='about' element={<About/>}/>
//         <Route path='*' element={<Missing/>}/>
//       </Routes>
//       <Footer/>
//     </div>
//   );
// }

// export default App;



//        AXIOS API

// import Header from './Header';
// import Nav from './Nav';
// import Home from './Home';
// import NewPost from './NewPost';
// import PostPage from './PostPage';
// import About from './About';
// import Missing from './Missing';
// import Footer from './Footer';
// import Post from './Post';
// import api from './API/posts';
// import { Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
// import PostLayout from './PostLayout';
// import { useEffect, useState } from 'react';
// import { format } from 'date-fns';
// import EditPost from './EditPost';
// import useWindowsSize from './Hooks/useWindowsSize';


// function App() {
//   const [posts, setPosts] = useState([])
//   const [search, setSearch] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [postTitle, setPostTitle] = useState('');
//   const [postBody, setPostBody] = useState('');
//   const [editTitle, setEditTitle] = useState('');
//   const [editBody, setEditBody] = useState('');
//   const navigate = useNavigate();
//   const {width} = useWindowsSize();

//     useEffect(() => {
//       const fetchPosts = async () =>  {
//         try{
//         const response = await api.get('./posts');
//         setPosts(response.data)
//       } catch (err) {
//         if (err.message) {
//           console.log(err.response.data);
//           console.log(err.response.status);
//           console.log(err.response.headers);
//         } else{
//           console.log(`Error: ${err.message}`)
//         }
//       }
//       }
//       fetchPosts();
//     },[])

//      useEffect(() => {
//        const filteredResults = posts.filter((post) =>
//        (((post.body).toLowerCase()).toUpperCase()).includes(search) || 
//        ((post.title).toLowerCase()).includes(search));

//     setSearchResults(filteredResults.reverse());
//   }, [posts, search])

//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
//       const datetime = format(new Date(), 'MMMM dd, yyyy pp');
//       const newPost = { id, title: postTitle, datetime, body: postBody };
//       try {
//         const response = await api.post('./posts', newPost)
//         const allPosts = [...posts, response.data];
//         setPosts(allPosts);
//         setPostTitle('');
//         setPostBody('');
//         navigate('/')
//       } catch (err) {
//         if (err.message) {
//           console.log(err.response.data);
//           console.log(err.response.status);
//           console.log(err.response.headers);
//         } else{
//           console.log(`Error: ${err.message}`)
//         }
//       }
//     }
    
//     const handleEdit = async (id) => {
//       const datetime = format(new Date(), 'MMMM dd, yyyy pp');
//       const updatedPost = { id, title: editTitle, datetime, body: editBody };
//       try {
//         const response = api.put(`./posts/${id}`, updatedPost); 
//         setPosts(posts.map(post => post.id===id ? {...response.data} : post ));
//         setEditTitle('');
//         setEditBody('');
//         navigate('/');
//       } catch (err) {
//           console.log(`Error: ${err.message}`)
//         }     
//     }
    
//     const handleDelete = async (id) => {
//       try{
//         await api.delete(`./posts/${id}`)
//         const postsList = posts.filter(post => post.id!== id);
//         setPosts(postsList);
//         navigate('/')
//       } catch (err) {
//           console.log(`Error: ${err.message}`)
//         }
//     }

// return (
//     <div className="App">
//       <Header title='Rockabye Media App' width={width}/>
//       <Nav search={search} setSearch={setSearch} />
//       <Routes>
//         <Route path="/" element={<Home posts={searchResults}/>}/>         
//         <Route path='post'>
//           <Route index element={<NewPost handleSubmit={handleSubmit} postTitle={postTitle} setPostTitle={setPostTitle} postBody={postBody} setPostBody={setPostBody}/>}/>
          
//           <Route path=':id' element={<PostPage posts={posts} handleDelete={handleDelete}/>}/>
//         </Route>
//         <Route path='/edit/:id' element={<EditPost posts={posts} handleEdit={handleEdit} editBody={editBody} setEditBody={setEditBody} editTitle={editTitle} setEditTitle={setEditTitle}/>}/>
//         <Route path='about' element={<About/>}/>
//         <Route path='*' element={<Missing/>}/>
//       </Routes>
//       <Footer/>
//     </div>
//   );
// }

// export default App;


//        Custome Hooks

// import Header from './Header';
// import Nav from './Nav';
// import Home from './Home';
// import NewPost from './NewPost';
// import PostPage from './PostPage';
// import About from './About';
// import Missing from './Missing';
// import Footer from './Footer';
// import Post from './Post';
// import api from './API/posts';
// import { Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
// import PostLayout from './PostLayout';
// import { useEffect, useState } from 'react';
// import { format } from 'date-fns';
// import EditPost from './EditPost';
// import useWindowsSize from './Hooks/useWindowsSize';
// import useAxiosFetch from './Hooks/useAxiosFetch';

// function App() {
//   const [posts, setPosts] = useState([])
//   const [search, setSearch] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [postTitle, setPostTitle] = useState('');
//   const [postBody, setPostBody] = useState('');
//   const [editTitle, setEditTitle] = useState('');
//   const [editBody, setEditBody] = useState('');
//   const navigate = useNavigate();
//   const {width} = useWindowsSize();
//   const {data, fetchError, isLoading} = useAxiosFetch('http://localhost:3500/posts');

//     useEffect(() => {
//       setPosts(data);
//     }, [data])
    

//      useEffect(() => {
//        const filteredResults = posts.filter((post) =>
//        (((post.body).toLowerCase()).toUpperCase()).includes(search) || 
//        ((post.title).toLowerCase()).includes(search));

//     setSearchResults(filteredResults.reverse());
//   }, [posts, search])

//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
//       const datetime = format(new Date(), 'MMMM dd, yyyy pp');
//       const newPost = { id, title: postTitle, datetime, body: postBody };
//       try {
//         const response = await api.post('./posts', newPost)
//         const allPosts = [...posts, response.data];
//         setPosts(allPosts);
//         setPostTitle('');
//         setPostBody('');
//         navigate('/')
//       } catch (err) {
//         if (err.message) {
//           console.log(err.response.data);
//           console.log(err.response.status);
//           console.log(err.response.headers);
//         } else{
//           console.log(`Error: ${err.message}`)
//         }
//       }
//     }
    
//     const handleEdit = async (id) => {
//       const datetime = format(new Date(), 'MMMM dd, yyyy pp');
//       const updatedPost = { id, title: editTitle, datetime, body: editBody };
//       try {
//         const response = api.put(`./posts/${id}`, updatedPost); 
//         setPosts(posts.map(post => post.id===id ? {...response.data} : post ));
//         setEditTitle('');
//         setEditBody('');
//         navigate('/');
//       } catch (err) {
//           console.log(`Error: ${err.message}`)
//         }     
//     }
    
//     const handleDelete = async (id) => {
//       try{
//         await api.delete(`./posts/${id}`)
//         const postsList = posts.filter(post => post.id!== id);
//         setPosts(postsList);
//         navigate('/')
//       } catch (err) {
//           console.log(`Error: ${err.message}`)
//         }
//     }

// return (
//     <div className="App">
//       <Header title='Rockabye Media App' width={width}/>
//       <Nav search={search} setSearch={setSearch} />
//       <Routes>
//         <Route path="/" element={<Home posts={searchResults} fetchError={fetchError} isLoading={isLoading} />}/>         
//         <Route path='post'>
//           <Route index element={<NewPost handleSubmit={handleSubmit} postTitle={postTitle} setPostTitle={setPostTitle} postBody={postBody} setPostBody={setPostBody}/>}/>
          
//           <Route path=':id' element={<PostPage posts={posts} handleDelete={handleDelete}/>}/>
//         </Route>
//         <Route path='/edit/:id' element={<EditPost posts={posts} handleEdit={handleEdit} editBody={editBody} setEditBody={setEditBody} editTitle={editTitle} setEditTitle={setEditTitle}/>}/>
//         <Route path='about' element={<About/>}/>
//         <Route path='*' element={<Missing/>}/>
//       </Routes>
//       <Footer/>
//     </div>
//   );
// }

// export default App;


//      Context API

import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import Footer from './Footer';
import {Route, Routes } from 'react-router-dom';
import EditPost from './EditPost';
import { DataProvider } from './Context/DataContext';

function App() {
return (
    <div className="App">
      <DataProvider>
          <Header title='Rockabye Media App'/>
          <Nav/>
          <Routes>
            <Route path="/" element={<Home/>}/>         
            <Route path='post'>
              <Route index element={<NewPost/>}/>              
              <Route path=':id' element={<PostPage/>}/>
            </Route>
            <Route path='/edit/:id' element={<EditPost/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='*' element={<Missing/>}/>
          </Routes>
          <Footer/>
      </DataProvider>
    </div>
  );
}

export default App;