
import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import { useEffect } from 'react';
import Blogs from './Blogs';

function Editor() {
    const editor = useRef(null);
    const [post, setPost] = useState({})
    const [blogs, setBlogs] = useState([]) // fetch from database
    const [content, setContent] = useState({})
    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
    }
    const handleAddPost = (e) => {
        e.preventDefault();
        const requestBody = {
            ...post,
            desc: content,
        };
        fetch("http://localhost:9000/api/blog/blog", {
            method: "POST",
            headers: {
                "Content-type": 'application/json'
            },
            body: JSON.stringify(requestBody)
        }).then(res => res.json())
            .then(data => console.log(data))
    };

    useEffect(() => {
        fetch("http://localhost:9000/api/blog/blog")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBlogs(data)
            })
    }, [])

    console.log(blogs)

    return (
        <div style={{ width: "80%", margin: "50px auto", }}>

            <form onSubmit={handleAddPost}>
                <input onChange={handleChange} style={{ width: "80%", margin: "5px auto" }} type="text" name='title' placeholder='title' />
                <input onChange={handleChange} style={{ width: "80%", margin: "5px auto" }} type="text" name='category' placeholder='caregory' />
                <JoditEditor
                    ref={editor}
                    tabIndex={1}
                    onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                    onChange={newContent => setContent(newContent)}
                />
                <br />
                <button >Add Post</button>
            </form>

            {
                blogs && blogs.map((bl) => (
                    <Blogs key={bl._id} data={bl} />
                ))
            }

        </div>
    )
}

export default Editor