import { useReducer, useState, createContext } from 'react'
import { reducer } from '../reducer/feed'
import { Routes } from '../Rotas';

import { Feed } from '../components'

export const PostContext = createContext();
export const UserContext = createContext();

const Main = () => {
    const [state, dispacth] = useReducer(reducer, { Posts: [] })
    const [username, setUsername] = useState("Denílson")

    const Content = (props) => {
        return (

            <div>
                {props.children}
            </div>
        )
    }


    return (
        <>

            <UserContext.Provider value={username}>
                <PostContext.Provider value={dispacth}>
                    <Feed posts={state.Posts} />
                </PostContext.Provider>
            </UserContext.Provider>
        </>
    )
}

export default Main