// import Content from "./Content";
// import Footer from "./Footer";
// import Header from "./Header";

// function App() {
 
//   return (
//     <div className="App">
//       <Header/>
//       <Content/>
//       <Footer/>
//     </div>
//   )
// }

// export default App;



//          Props & Prop Drilling
// import Content from "./Content";
// import Footer from "./Footer";
// import Header from "./Header";
// import { useState } from 'react';

// function App() {
//     const [items, setItems] = useState(
//       [
//         {
//           id:1,
//           checked: true,
//           item: "Practice Coding"
//         },
//         {
//           id:2,
//           checked: false,
//           item: "Watching WWE"
//         },
//         {
//           id:3,
//           checked: false,
//           item: "Read about AI"
//         }
//       ]
//     );
//     const handleCheck = (id) => {
//       const listItems = items.map((item) => item.id===id ? {...item, checked:!item.checked} : item )
//       setItems(listItems)
//       localStorage.setItem("todo_list", JSON.stringify(listItems))
//     }
//     const handleDelete = (id) => {
//       const listItems = items.filter((item) => item.id!==id)
//       setItems(listItems)    
//       localStorage.setItem("todo_list", JSON.stringify(listItems))
//     }
 
//   return (
//     <div className="App">
//       <Header title='Rockabye'/>
//       <Content items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
//       <Footer length = {items.length} />
//     </div>
//   )
// }

// export default App;



//                    Controlled Inputs:
// import AddItem from "./AddItem";
// import Content from "./Content";
// import Footer from "./Footer";
// import Header from "./Header";
// import { useState } from 'react';
// import SearchItems from "./SearchItems";

// function App() {
//     const [items, setItems] = useState(JSON.parse(localStorage.getItem('todo_list')))
//     const [newItem, setnewItem] = useState('')
//     const [search, setSearch] = useState('')    

//     const addItem = (item) => {
//       const id = items.length ? items[items.length - 1].id + 1 : 1;
//       const addNewItems = {id,checked:false, item}
//       const listItems = [...items, addNewItems]
//       setItems(listItems)
//       localStorage.setItem("todo_list", JSON.stringify(listItems))
//     }

//     const handleCheck = (id) => {
//       const listItems = items.map((item) => item.id===id ? {...item, checked:!item.checked} : item )
//       setItems(listItems)
//       localStorage.setItem("todo_list", JSON.stringify(listItems))
//     }
//     const handleDelete = (id) => {
//       const listItems = items.filter((item) => item.id!==id)
//       setItems(listItems)    
//       localStorage.setItem("todo_list", JSON.stringify(listItems))
//     }
//     const handleSubmit = (e) => {
//       e.preventDefault()
//       if (!newItem) return;
//       console.log(newItem)
//       addItem(newItem)
//       setnewItem("")  // page will not refreshing
//     }
 
//   return (
//     <div className="App">
//       <Header title='Rockabye'/>
//       <AddItem AddItem = {AddItem} setnewItem={setnewItem} handleSubmit={handleSubmit}/>
//       <SearchItems search={search} setSearch={setSearch}/>
//       <Content items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))} handleCheck={handleCheck} handleDelete={handleDelete}/>
//       <Footer length = {items.length} />
//     </div>
//   )
// }

// export default App;



//                UseEffect
// import AddItem from "./AddItem";
// import Content from "./Content";
// import Footer from "./Footer";
// import Header from "./Header";
// import { useEffect, useState } from 'react';
// import SearchItems from "./SearchItems";

// function App() {
//     const [items, setItems] = useState([])
//     const [newItem, setnewItem] = useState('')
//     const [search, setSearch] = useState('')
    
//     useEffect(() => { JSON.parse(localStorage.getItem('todo_list')) } , [])

//     const addItem = (item) => {
//       const id = items.length ? items[items.length - 1].id + 1 : 1;
//       const addNewItems = {id,checked:false, item}
//       const listItems = [...items, addNewItems]
//       setItems(listItems)
//       localStorage.setItem("todo_list", JSON.stringify(listItems))
//     }

//     const handleCheck = (id) => {
//       const listItems = items.map((item) => item.id===id ? {...item, checked:!item.checked} : item )
//       setItems(listItems)
//       localStorage.setItem("todo_list", JSON.stringify(listItems))
//     }
//     const handleDelete = (id) => {
//       const listItems = items.filter((item) => item.id!==id)
//       setItems(listItems)    
//       localStorage.setItem("todo_list", JSON.stringify(listItems))
//     }
//     const handleSubmit = (e) => {
//       e.preventDefault()
//       if (!newItem) return;
//       console.log(newItem)
//       addItem(newItem)
//       setnewItem("")  // page will not refreshing
//     }
 
//   return (
//     <div className="App">
//       <Header title='Rockabye'/>
//       <AddItem AddItem = {AddItem} setnewItem={setnewItem} handleSubmit={handleSubmit}/>
//       <SearchItems search={search} setSearch={setSearch}/>
//       <Content items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))} handleCheck={handleCheck} handleDelete={handleDelete}/>
//       <Footer length = {items.length} />
//     </div>
//   )
// }

// export default App;



//                      fetch API_DATA
// import AddItem from "./AddItem";
// import Content from "./Content";
// import Footer from "./Footer";
// import Header from "./Header";
// import { useEffect, useState } from 'react';
// import SearchItems from "./SearchItems";

// function App() {
//     const API_URL = 'http://localhost:3500/items'
//     const [items, setItems] = useState([])
//     const [newItem, setnewItem] = useState('')
//     const [search, setSearch] = useState('')
//     const [fetchError, setFetchError] = useState(null)
//     const [isLoading, setIsLoading] = useState(true)
    
//     useEffect(() => { 
//       const fetchItems = async () => {
//         try{
//           const response = await fetch(API_URL);
//           if(!response.ok) throw Error("Data is Not Received")
//           const listItems = await response.json();
//           setItems(listItems)
//           setFetchError(null)
//         } catch(err) {
//             setFetchError(err.message)
//         } finally {
//           setIsLoading(false)
//         }
//       }
//       setTimeout(() => {
//         (async () => await fetchItems())()        
//       }, 2000)
//      } , [])

//     const addItem = (item) => {
//       const id = items.length ? items[items.length - 1].id + 1 : 1;
//       const addNewItems = {id,checked:false, item}
//       const listItems = [...items, addNewItems]
//       setItems(listItems)     
//     }

//     const handleCheck = (id) => {
//       const listItems = items.map((item) => item.id===id ? {...item, checked:!item.checked} : item )
//       setItems(listItems)
//     }
//     const handleDelete = (id) => {
//       const listItems = items.filter((item) => item.id!==id)
//       setItems(listItems)
//     }
//     const handleSubmit = (e) => {
//       e.preventDefault()
//       if (!newItem) return;
//       console.log(newItem)
//       addItem(newItem)
//       setnewItem("")  // page will not refreshing
//     }
 
//   return (
//     <div className="App">
//       <Header title='Rockabye'/>
//       <AddItem AddItem = {AddItem} setnewItem={setnewItem} handleSubmit={handleSubmit}/>
//       <SearchItems search={search} setSearch={setSearch}/>
//       <main>
//         {
//           isLoading && <p> Data is Loading...... </p>
//         }
//         {
//           fetchError && <p> {`Error: ${fetchError}`} </p>
//         }
//         {
//           !isLoading && !fetchError && <Content items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))} handleCheck={handleCheck} handleDelete={handleDelete}/>
//         }
//       </main>
//       <Footer length = {items.length} />
//     </div>
//   )
// }

// export default App;


//                    CRUD Operations - Create
// import AddItem from "./AddItem";
// import Content from "./Content";
// import Footer from "./Footer";
// import Header from "./Header";
// import { useEffect, useState } from 'react';
// import SearchItems from "./SearchItems";
// import apiReqest from "./ApiRequest";

// function App() {
//     const API_URL = 'http://localhost:3500/items'
//     const [items, setItems] = useState([])
//     const [newItem, setnewItem] = useState('')
//     const [search, setSearch] = useState('')
//     const [fetchError, setFetchError] = useState(null)
//     const [isLoading, setIsLoading] = useState(true)
    
//     useEffect(() => { 
//       const fetchItems = async () => {
//         try{
//           const response = await fetch(API_URL);
//           if(!response.ok) throw Error("Data is Not Received")
//           const listItems = await response.json();
//           setItems(listItems)
//           setFetchError(null)
//         } catch(err) {
//             setFetchError(err.message)
//         } finally {
//           setIsLoading(false)
//         }
//       }
//       setTimeout(() => {
//         (async () => await fetchItems())()        
//       }, 2000)
//      } , [])

//     const addItem = async (item) => {
//       const id = items.length ? items[items.length - 1].id + 1 : 1;
//       const addNewItems = {id,checked:false, item}
//       const listItems = [...items, addNewItems]
//       setItems(listItems)
//       // Create operations
//       const postOptions = {
//         method: 'POST',
//         Headers: {
//           'Content-Type':'application/json'
//         },
//         body: JSON.stringify(addNewItems)
//       }

//       const result = await apiReqest(API_URL,postOptions)
//       if(result) setFetchError(result)
//     }

//     const handleCheck = (id) => {
//       const listItems = items.map((item) => item.id===id ? {...item, checked:!item.checked} : item )
//       setItems(listItems)
//     }
//     const handleDelete = (id) => {
//       const listItems = items.filter((item) => item.id!==id)
//       setItems(listItems)
//     }
//     const handleSubmit = (e) => {
//       e.preventDefault()
//       if (!newItem) return;
//       console.log(newItem)
//       addItem(newItem)
//       setnewItem("")  // page will not refreshing
//     }
 
//   return (
//     <div className="App">
//       <Header title='Rockabye'/>
//       <AddItem AddItem = {AddItem} setnewItem={setnewItem} handleSubmit={handleSubmit}/>
//       <SearchItems search={search} setSearch={setSearch}/>
//       <main>
//         {
//           isLoading && <p> Data is Loading...... </p>
//         }
//         {
//           fetchError && <p> {`Error: ${fetchError}`} </p>
//         }
//         {
//         !isLoading && !fetchError && <Content items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))} handleCheck={handleCheck} handleDelete={handleDelete}/>
//         }
//       </main>
//       <Footer length = {items.length} />
//     </div>
//   )
// }

// export default App;


//                  CRUD Operations - Update
// import AddItem from "./AddItem";
// import Content from "./Content";
// import Footer from "./Footer";
// import Header from "./Header";
// import { useEffect, useState } from 'react';
// import SearchItems from "./SearchItems";
// import apiReqest from "./ApiRequest";

// function App() {
//     const API_URL = 'http://localhost:3500/items'
//     const [items, setItems] = useState([])
//     const [newItem, setnewItem] = useState('')
//     const [search, setSearch] = useState('')
//     const [fetchError, setFetchError] = useState(null)
//     const [isLoading, setIsLoading] = useState(true)
    
//     useEffect(() => { 
//       const fetchItems = async () => {
//         try{
//           const response = await fetch(API_URL);
//           if(!response.ok) throw Error("Data is Not Received")
//           const listItems = await response.json();
//           setItems(listItems)
//           setFetchError(null)
//         } catch(err) {
//             setFetchError(err.message)
//         } finally {
//           setIsLoading(false)
//         }
//       }
//       setTimeout(() => {
//         (async () => await fetchItems())()        
//       }, 2000)
//      } , [])

//     const addItem = async (item) => {
//       const id = items.length ? items[items.length - 1].id + 1 : 1;
//       const addNewItems = {id,checked:false, item}
//       const listItems = [...items, addNewItems]
//       setItems(listItems)
//       // Create operations
//       const postOptions = {
//         method: 'POST',
//         Headers: {
//           'Content-Type':'application/json'
//         },
//         body: JSON.stringify(addNewItems)
//       }

//       const result = await apiReqest(API_URL,postOptions)
//       if(result) setFetchError(result)
//     }

//     const handleCheck = async (id) => {
//       const listItems = items.map((item) => item.id===id ? {...item, checked:!item.checked} : item )
//       setItems(listItems)

//       const myItem = listItems.filter((item) => item.id===id)
      
//       const updateOptions = {
//         method: 'PATCH',
//         Headers: {
//           'Content-Type':'application/json'
//         },
//         body: JSON.stringify({checked:myItem[0].checked})        
//       }
//       const reqUrl = `${API_URL}/${id}`
//       const result = await apiReqest(reqUrl,updateOptions)
//       if(result) setFetchError(result)
//     }

//     const handleDelete = (id) => {
//       const listItems = items.filter((item) => item.id!==id)
//       setItems(listItems)
//     }
//     const handleSubmit = (e) => {
//       e.preventDefault()
//       if (!newItem) return;
//       console.log(newItem)
//       addItem(newItem)
//       setnewItem("")  // page will not refreshing
//     }
 
//   return (
//     <div className="App">
//       <Header title='Rockabye'/>
//       <AddItem AddItem = {AddItem} setnewItem={setnewItem} handleSubmit={handleSubmit}/>
//       <SearchItems search={search} setSearch={setSearch}/>
//       <main>
//         {
//           isLoading && <p> Data is Loading...... </p>
//         }
//         {
//           fetchError && <p> {`Error: ${fetchError}`} </p>
//         }
//         {
//           !isLoading && !fetchError && <Content items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))} handleCheck={handleCheck} handleDelete={handleDelete}/>
//         }
//       </main>
//       <Footer length = {items.length} />
//     </div>
//   )
// }

// export default App;



//                  CRUD Operations - Delete
import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect, useState } from 'react';
import SearchItems from "./SearchItems";
import apiReqest from "./ApiRequest";

function App() {
    const API_URL = 'http://localhost:3500/items'
    const [items, setItems] = useState([])
    const [newItem, setnewItem] = useState('')
    const [search, setSearch] = useState('')
    const [fetchError, setFetchError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => { 
      const fetchItems = async () => {
        try{
          const response = await fetch(API_URL);
          if(!response.ok) throw Error("Data is Not Received")
          const listItems = await response.json();
          setItems(listItems)
          setFetchError(null)
        } catch(err) {
            setFetchError(err.message)
        } finally {
          setIsLoading(false)
        }
      }
      setTimeout(() => {
        (async () => await fetchItems())()        
      }, 2000)
     } , [])

    const addItem = async (item) => {
      const id = items.length ? items[items.length - 1].id + 1 : 1;
      const addNewItems = {id,checked:false, item}
      const listItems = [...items, addNewItems]
      setItems(listItems)
      // Create operations
      const postOptions = {
        method: 'POST',
        Headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(addNewItems)
      }

      const result = await apiReqest(API_URL,postOptions)
      if(result) setFetchError(result)
    }

    const handleCheck = async (id) => {
      const listItems = items.map((item) => item.id===id ? {...item, checked:!item.checked} : item )
      setItems(listItems)

      const myItem = listItems.filter((item) => item.id===id)
      
      const updateOptions = {
        method: 'PATCH',
        Headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify({checked:myItem[0].checked})        
      }
      const reqUrl = `${API_URL}/${id}`
      const result = await apiReqest(reqUrl,updateOptions)
      if(result) setFetchError(result)
    }

    const handleDelete = async (id) => {
      const listItems = items.filter((item) => item.id!==id)
      setItems(listItems)

      const deleteOptions = { method: 'DELETE'}

      const reqUrl = `${API_URL}/${id}`
      const result = await apiReqest(reqUrl,deleteOptions)
      if(result) setFetchError(result)
      
    }
    const handleSubmit = (e) => {
      e.preventDefault()
      if (!newItem) return;
      console.log(newItem)
      addItem(newItem)
      setnewItem("")  // page will not refreshing
    }
 
  return (
    <div className="App">
      <Header title='Rockabye'/>
      <AddItem AddItem = {AddItem} setnewItem={setnewItem} handleSubmit={handleSubmit}/>
      <SearchItems search={search} setSearch={setSearch}/>
      <main>
        {
          isLoading && <p> Data is Loading...... </p>
        }
        {
          fetchError && <p> {`Error: ${fetchError}`} </p>
        }
        {
          !isLoading && !fetchError && <Content items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))} handleCheck={handleCheck} handleDelete={handleDelete}/>
        }
      </main>
      <Footer length = {items.length} />
    </div>
  )
}

export default App;
