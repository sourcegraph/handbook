import React from 'react'
import { Link } from 'next/link'

export default function BlogHeader({ title, belowTitle, baseUrl }) {
    return ( 
        <div>
            <h1 className="display-4 mt-3">
                <Link to={baseUrl} className="text-body">
                    {title}
                </Link>
            </h1>
            {belowTitle}
        </div>
    )
}
