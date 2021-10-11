import React,{ useState } from 'react'
import BlogList from '../BlogList/BlogList'

const Home = () => {
   
    const [blogs,setBlogs] = useState([
        {title:'hello world1',body:'lorem...........',author:'mario',id:1},
        {title:'hello world2',body:'lorem...........',author:'田中',id:2},
        {title:'hello world3',body:'lorem...........',author:'佐藤',id:3}
    ])
    const handleDelete = (id) =>{
        const newBlogs =blogs.filter(blog=> blog.id !== id);
        setBlogs(newBlogs);
    }




    return (
        <div className="home">
            <BlogList blogs={blogs} title='all blog' handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter((blog)=>blog.author==='佐藤')} title='佐藤 blog'/>
        </div>
 
    )
}

export default Home;
