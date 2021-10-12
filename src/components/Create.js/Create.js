import React,{ useState} from 'react'
import { useHistory } from 'react-router'

const Create = () => {
    const [title,setTilte] = useState('')
    const [body,setBody] = useState('')
    const [author,setAuthor] = useState('yoshi')
    const [isPending,setIsPending] = useState(false)
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = {title,body,author};

        setIsPending(true);

        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        })
        .then(()=>{
            console.log('new')
            setIsPending(false)
            history.push('/')
        })
        
 

    }

    return (
        <div>
            <h2>add new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                  type="text"
                  required
                  value={title}
                  onChange={(e)=> setTilte(e.target.value)}
                />
                <label>blog body:</label>
                <textarea
                  required
                  value={body}
                  onChange={(e)=> setBody(e.target.value)}
                ></textarea>
                <label>blog author</label>
                <select
                  value={author}
                  onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button>add blog</button>}
                {isPending && <button disabled>add blog</button>}
                <p>title:{title}</p>
                <p>body:{body}</p>
                <p>author:{author}</p>
 
            </form>
        </div>
    )
}

export default Create
