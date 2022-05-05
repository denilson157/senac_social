import React from 'react';
import Layout from '../components/shared/Layouts';
import Post from '../components/feed/Post';
import { useState } from 'react';

import { useQuery } from '@apollo/client';

import { GET_POSTS } from '../graphql/post/query';
import { useEffect } from 'react';

const FeedPage = () => {

    const { loading, error, data, refetch } = useQuery(GET_POSTS);

    return (
        <Layout>
            {
                !loading &&
                <div className="row">
                    <div className="col-10 mx-auto">
                        {data.post?.map((post) => <Post key={post.id} post={post} refetch={refetch} />)}
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

export default FeedPage