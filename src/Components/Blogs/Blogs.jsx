import { useEffect, useState } from 'react';
import './Blogs.css'

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data));

    }, []);

    return (
        <div className='md:w-2/3'>
            <h2>Blogs: {blogs.length} </h2>
        </div>
    );
};

export default Blogs;