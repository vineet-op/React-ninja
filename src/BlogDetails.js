import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './useFetch';
import { useHistory } from 'react-router-dom';

const BlogDetails = () => {

    const { id } = useParams(); // To acces the blogs Id parameter
    const { data: blog, error, pending } = useFetch("http://localhost:8000/blogs/" + id)
    const history = useHistory()

    const handleClick = () => {
        fetch("http://localhost:8000/blogs/" + id, {
            method: "DELETE",
        }).then(() => {
            history.push("/")
        })
    }

    return (
        <div className="blog-details">
            {pending && <div> Loading ... </div>}
            {error && <div> {error} </div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>{blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick} >Delete</button>
                </article>
            )}
        </div>
    )
}

export default BlogDetails
