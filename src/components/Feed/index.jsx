import { useState } from 'react'
import {
    Container,
    TextArea,
    Botao,
    Form,
    Fields,
    InputFile
} from './Components'

const Feed = () => {

    const [posts, setPost] = useState([])

    const adicionarPost = () => {
        
    }

    return (
        <Container>

            <Form>
                <Fields>
                    <TextArea />

                    <InputFile />
                </Fields>

                <Botao>
                    Publicar
                </Botao>
            </Form>
        </Container>
    )
}

export default Feed