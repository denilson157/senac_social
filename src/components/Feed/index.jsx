import React from "react"
import Post from "./Post"
import NewPost from './NewPost'

const Feed = ({ posts }) => {

    return (
        <>

            <NewPost />

            {
                (posts || []).map((post, index) =>
                    <Post key={index} {...post} />
                )}
        </>
    )
}

export default Feed