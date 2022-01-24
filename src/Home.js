import { useState, useEffect } from 'react'
import Bloglist from './Bloglist';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'ginwan', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'amar', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'ayla', id: 3 }
    ])
    const handleDelete = (id) =>{
        const newBlogs = blogs.filter(blog => blog.id !== id) 
        setBlogs(newBlogs)
    }
    useEffect(()=>{
        console.log("use effect ran")
        console.log(blogs)
    })
    return ( 
        <div className="home">
            <Bloglist blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
        </div>
     );
}
 
export default Home;