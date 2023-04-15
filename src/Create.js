import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
const Create = () => {

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("Vineet")

    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = { title, body, author }
        console.log(blog);

        //making post request
        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("blog Added");
            history.push("/")
        })



    }


    return (
        <div className="create">
            <h2> Add new a Blog </h2>

            <form onSubmit={handleSubmit}>
                <label> Blog Title: </label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />

                <label> Blog Body: </label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)} >
                </textarea>

                <label> Blog Author </label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)} >
                    <option value="vineet">Vineet</option>
                    <option value="Om">Om</option>
                </select>
                <button>Add Blog</button>

            </form>



        </div >
    )
}

export default Create
