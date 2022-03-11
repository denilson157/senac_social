import { useState, useContext, useRef } from 'react'
import { FeedActions } from '../../reducer/feed'
import { PostContext } from '../Main'
import {
    Container,
    TextArea,
    Botao,
    Form,
    Fields,
    InputFile
} from './Components'

const initialValuesForm = {
    Texto: ''
}

const Feed = () => {

    const { dispatch } = useContext(PostContext)
    const image = useRef()

    const [form, setForm] = useState(initialValuesForm)

    const setFormValues = (newValue, valueTipo) => {
        setForm(
            {
                ...form,
                [valueTipo]: newValue
            })

    }

    const adicionarPost = () => {
        const newPost = {
            Texto: form.Texto,
            Image: image.current.files[0],
            Username: 'dpereira',
            Likes: 0,
            Date: new Date()
        }

        dispatch({ type: FeedActions.CriarPost, payload: newPost })
    }

    return (
        <Container>

            <Form>
                <Fields>
                    <TextArea

                        onChange={(e) => setFormValues(e.target.value, "Login")}
                        value={form.Texto}
                    />

                    <InputFile ref={image} />
                </Fields>

                <Botao type="button" onClick={adicionarPost}>
                    Publicar
                </Botao>
            </Form>

            <div>
                
            </div>

        </Container>
    )
}

export default Feed