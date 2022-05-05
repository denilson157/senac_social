import { gql } from '@apollo/client';

export const INSERT_LIKE = gql`
    mutation INSERT_LIKE($userId: uuid!, $postId: uuid!) {
        insert_likes(objects: {post_id: $postId, user_id:$userId}) {
            affected_rows
        }
    }  
`;

export const DELETE_LIKE = gql`
    mutation DELETE_LIKE($userId: uuid!, $postId: uuid!) {
        delete_likes(where: { user_id: { _eq: $userId }, post_id: { _eq: $postId } }) {
            affected_rows
        }
    }
`;