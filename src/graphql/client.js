import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    uri: 'https://promoted-hawk-47.hasura.app/v1/graphql',
    headers: { 'x-hasura-admin-secret': '0jp1wFdiMXoNuRozBN8FnQnODKWnwkIOIJmYYLQv884KrZZqFuq9IjL7l1vmBEKx' },
    cache: new InMemoryCache()
});

export default client;