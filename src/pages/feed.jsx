import React from 'react';
import Layout from '../components/shared/Layouts';
import Post from '../components/feed/Post';
import { useState } from 'react';

import { useQuery } from '@apollo/client';

import { GET_POSTS } from '../graphql/post/query';

export default function FeedPage() {

    const { loading, error, data } = useQuery(GET_POSTS);

    console.log(data)

    const [posts, setPosts] = useState([]);

    return (
        <Layout>
            {
                !loading &&
                <div className="row">
                    <div className="col-10 mx-auto">
                        {data.post?.map((post) => <Post key={post.id} post={post} />)}
                    </div>
                </div>
            }
            {
                loading && <div className="row">
                    Carregando
                </div>
            }
        </Layout>
    );


}