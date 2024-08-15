import React, { useEffect, useState } from 'react'

export const useFetch = (url) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchTodo = async () => {
            const response = await fetch(url)
            const resJson = await response.json();

            setData(resJson)
        }
        fetchTodo()
    },[url])
    
    return{data}
}
