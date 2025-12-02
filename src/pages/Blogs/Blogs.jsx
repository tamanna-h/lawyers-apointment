import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className='bg-white text-black'>
            <h1 className='text-3xl font-bold text-center'>Blogs</h1>
            <p className='text-center text-gray-500 p-8'>Let's explore some basic concept that will make you a good developer</p>
            <div className='p-4'> 
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog}/>)  
                }
            </div>
        </div>
    );
};

export default Blogs;