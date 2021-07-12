import React, {useState} from 'react'

export const HookEffect1 = () => {
    const [resourceType, setResourceType] = useState('posts');

    return (
        <>
        <div>
            <button onClick={() => setResourceType("Posts")}>Posts</button>
            <button onClick={() => setResourceType("Users")}>Users</button>
            <button onClick={() => setResourceType("Comments")}>Comments</button>
        </div>
        <h4>{resourceType}</h4>
        </>
    )
}
