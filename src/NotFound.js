import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="NotFound">
            <h2>Sorry</h2>
            <p>That Page cannot be found ... </p>
            <Link to="/"> Return Back to Home </Link>
        </div>
    )
}

export default NotFound
