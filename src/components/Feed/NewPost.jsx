import { useState, useContext, useRef } from 'react'
import { FeedActions } from '../../reducer/feed'
import { UserContext } from '../Main'
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

    const dispatch = useContext(UserContext)
    console.log(dispatch)
    const image = useRef()

    const [form, setForm] = useState(initialValuesForm)

    const setFormValues = (newValue, valueTipo) => {
        setForm(
            {
                ...form,
                [valueTipo]: newValue
            })

    }

    const adicionarPost = (e) => {
        const newPost = {
            Texto: form.Texto,
            Image: image.current.files[0],
            Username: 'dpereira',
            Likes: 0,
            Date: new Date()
        }

        dispatch({ type: FeedActions.CriarPost, payload: newPost })
        e.preventDefault();
    }

    return (
        <Container>

            <div>
                <Fields>
                    <TextArea

                        onChange={(e) => setFormValues(e.target.value, "Texto")}
                        value={form.Texto}
                    />

                    <InputFile ref={image} />
                </Fields>

                <Botao type="button" onClick={adicionarPost}>
                    Publicar
                </Botao>
            </div>
        </Container>
    )
}

export default Feed