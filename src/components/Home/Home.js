import React,{ useState,useEffect } from 'react'
import BlogList from '../BlogList/BlogList'

const Home = () => {
   
    const [blogs,setBlogs] = useState(null);

    const url = 'http://localhost:8000/blogs'
    
    useEffect(()=>{
        fetch(url)
        .then(res =>{
            return res.json()
        })
        .then((data)=>{
            console.log(data,'data')
            setBlogs(data);
        })
    },[])




    return (
        <div className="home">
            {blogs &&<BlogList blogs={blogs} title='all blog' />}
        </div>
 
    )
}

export default Home;
