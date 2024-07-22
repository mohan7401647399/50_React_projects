import { createContext, useEffect, useState } from "react";
import Header from '../Header';
import Nav from '../Nav';
import Home from '../Home';
import NewPost from '../NewPost';
import PostPage from '../PostPage';
import About from '../About';
import Missing from '../Missing';
import Footer from '../Footer';
import Post from '../Post';
import api from '../API/posts';
import { Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import PostLayout from '../PostLayout';
import { format } from 'date-fns';
import EditPost from '../EditPost'
import useWindowsSize from '../Hooks/useWindowsSize';
import useAxiosFetch from '../Hooks/useAxiosFetch';

const DataContext = createContext({});

export const DataProvider = ({childern}) => {    
    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const [editTitle, setEditTitle] = useState('');
    const [editBody, setEditBody] = useState('');
    const navigate = useNavigate();
    const {width} = useWindowsSize();
    const {data, fetchError, isLoading} = useAxiosFetch('http://localhost:3500/posts');
  
      useEffect(() => {
        setPosts(data);
      }, [data])
      
    
       useEffect(() => {
         const filteredResults = posts.filter((post) =>
         (((post.body).toLowerCase()).toUpperCase()).includes(search) || 
         ((post.title).toLowerCase()).includes(search));
      
      setSearchResults(filteredResults.reverse());
    }, [posts, search])
  
      const handleSubmit = async (e) => {
        e.preventDefault();
        const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
        const datetime = format(new Date(), 'MMMM dd, yyyy pp');
        const newPost = { id, title: postTitle, datetime, body: postBody };
        try {
          const response = await api.post('./posts', newPost)
          const allPosts = [...posts, response.data];
          setPosts(allPosts);
          setPostTitle('');
          setPostBody('');
          navigate('/')
        } catch (err) {
          if (err.message) {
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
          } else{
            console.log(`Error: ${err.message}`)
          }
        }
      }
      
      const handleEdit = async (id) => {
        const datetime = format(new Date(), 'MMMM dd, yyyy pp');
        const updatedPost = { id, title: editTitle, datetime, body: editBody };
        try {
          const response = api.put(`./posts/${id}`, updatedPost); 
          setPosts(posts.map(post => post.id===id ? {...response.data} : post ));
          setEditTitle('');
          setEditBody('');
          navigate('/');
        } catch (err) {
            console.log(`Error: ${err.message}`)
          }     
      }
      
      const handleDelete = async (id) => {
        try{
          await api.delete(`./posts/${id}`)
          const postsList = posts.filter(post => post.id!== id);
          setPosts(postsList);
          navigate('/')
        } catch (err) {
            console.log(`Error: ${err.message}`)
          }
    }
    return (
        <DataContext.Provider value={{width,search, setSearch,searchResults, fetchError, isLoading,handleSubmit, postTitle, setPostTitle, postBody, setPostBody,posts, handleDelete, handleEdit, editBody, setEditBody, editTitle, setEditTitle}}>
          {childern}
        </DataContext.Provider>
    )
}
export default DataContext;