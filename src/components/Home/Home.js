import useFetch from '../../UseFetch/useFetch'
import BlogList from '../BlogList/BlogList'

const Home = () => {
    const{data:blogs,isPending,error} = useFetch('http://localhost:8000/blogs')


    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs &&<BlogList blogs={blogs} title='all blog' />}
        </div>
 
    )
}

export default Home;
