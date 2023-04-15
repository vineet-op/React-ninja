import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({ blogs, title }) => {
  //   const blogs = props.blogs;
  //   const title = props.title; //Property Name

  return (
    <div>
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>

          <Link to={`/blogs/${blog.id}`} >
            <h2>{blog.title}</h2>
            <p>Wriiten by {blog.author}</p>
            <div>{blog.post}</div>
          </Link>

        </div>
      ))}
    </div>
  );
};

export default BlogList;
