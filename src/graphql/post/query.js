
import { gql } from '@apollo/client';

export const GET_POSTS = gql`
query Posts {
    post(order_by: {created_at: desc}) {
      id
      image_id
      text
      likes
      post_user {
        id
        image
        name
        username
      }
    }
  }
  
`