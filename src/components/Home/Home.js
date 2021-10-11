import React,{ useState,useEffect } from 'react'
import BlogList from '../BlogList/BlogList'

const Home = () => {
   
    const [blogs,setBlogs] = useState(null);
    const [isPending,setIsPending] =useState(true);
    const [error,setError] = useState(null);

    const url = 'http://localhost:8000/blogs'
    
    useEffect(()=>{
        fetch(url)
        .then(res =>{
            if(!res.ok){
                throw Error('could not fetch data');
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'data')
            setBlogs(data);
            setIsPending(false);
            setError(null);
        })
        .catch((e)=>{
            setIsPending(false);
            setError(e.message)
        })
    },[])




    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs &&<BlogList blogs={blogs} title='all blog' />}
        </div>
 
    )
}

export default Home;
