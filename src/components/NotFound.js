import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <div className="not-found">
                <p>page cannot be found</p>
                <Link to="/">back to the homepage....</Link>
            </div>
        </div>
    )
}

export default NotFound
