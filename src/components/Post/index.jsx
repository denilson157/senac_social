import {
    Container,
    TextArea,
    Botao,
    Form,
    Fields
} from './Components'

const Post = () => {
    return (
        <Container>
            <Form>
                <Fields>
                    <TextArea />
                </Fields>
                
                <Botao>
                    Publicar
                </Botao>
            </Form>
        </Container >
    )
}

export default Post