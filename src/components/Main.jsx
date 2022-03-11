import { useReducer, createContext } from 'react'
import { reducer } from '../reducer/feed'
import { routes } from '../Rotas';
import { Login } from './index'

export const PostContext = createContext();

const Main = () => {
    const [state, dispacth] = useReducer(reducer, { Posts: [] })

    const Content = (props) => {
        return (

            <div>
                {props.children}
            </div>
        )
    }


    return (
        <PostContext.Provider value={dispacth}>
            <Content>
                <Login />
            </Content>
        </PostContext.Provider>
    )
}

export default Main