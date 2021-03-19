import fetch from 'isomorphic-fetch'
import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client'

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: "http://localhost:8000/__graphql",
        fetch
    })
});

export default client