import React, { useState } from 'react';
import { useMutation } from "@apollo/client";
import { INSERT_LIKE, DELETE_LIKE } from '../../graphql/likes/mutation';
import { UserContext } from "../../auth";

export default function Post({ post, refetch }) {

    const [SetLikes] = useMutation(INSERT_LIKE);
    const [RemoveLikes] = useMutation(DELETE_LIKE);
    const [loading, setLoading] = useState(false)

    const { currentUser } = React.useContext(UserContext);

    const userDeuLike = () => post.likesByPostId.some(x => x.post_id === post.id && x.user_id === currentUser.id)

    const handleLikes = () => {
        setLoading(true)
        if (userDeuLike()) {
            RemoveLikes({
                variables: {
                    userId: currentUser.id,
                    postId: post.id
                }
            })
                .then(() => {
                    refetch()
                })
                .finally(() => setLoading(false))
        } else {
            SetLikes({
                variables: {
                    userId: currentUser.id,
                    postId: post.id
                }
            })
                .then(() => {
                    refetch()
                })
                .finally(() => setLoading(false))
        }
    }
    
    return (
        <article style={{ "maxWidth": '700px' }} className='mx-auto my-3 border rounded-1'>
            <div className='text-start m-3'>
                <img alt="img" src={post.post_user?.image} className="rounded-circle" style={{ 'maxWidth': 40, 'maxHeight': 40 }} />
                <span className='mx-2 fw-bold'>{post.post_user?.name}</span>
            </div>
            <div>
                <img alt="img" src={post.image_id} className="img-fluid" />
            </div>
            <div className='text-start m-3'>
                <div>
                    <i className={userDeuLike() ? `fa-solid text-danger fa-heart fs-4 me-2` : `fa-regular fa-heart fs-4 me-2`} style={{ "cursor": 'pointer' }} onClick={handleLikes} />
                    <i className="fa-regular fa-comment-dots fs-4"></i>
                </div>
                <div>
                    <span className='d-block fw-bold'>{`${post.likesByPostId.length} like(s)`}
                        {
                            loading &&
                            <div class="spinner-border spinner-border-sm mx-2" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        }</span>
                    <span className='fw-bold'>{post.post_user?.username}: </span>
                    <span>{post.text}</span>

                </div>
            </div>
        </article>);
}