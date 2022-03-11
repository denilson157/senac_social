import { useState, useReducer, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import {
    Container,
    Input,
    Button,
    Form,
    Fields
} from "./Components"
import { reduce } from './Dispatch'

const initialValuesForm = {
    Login: '',
    Pass: ''
}

const Login = () => {

    const [form, setForm] = useState(initialValuesForm)
    const [redirect, setRedirect] = useState(false)

    const [usuario, dispatch] = useReducer(reduce, initialValuesForm);

    const setFormValues = (newValue, valueTipo) => {
        setForm(
            {
                ...form,
                [valueTipo]: newValue
            })
    }

    const logar = () => {
        setRedirect(true)
        dispatch(
            {
                type: "AlterarLoginUsuario",
                payload: form.Login,

            }
        )
    }

    if (redirect)
        return <Redirect to="/home" />

    return (
        <Container>
            <Form>

                <Fields>
                    <Input
                        value={form.Login}
                        onChange={(e) => setFormValues(e.target.value, "Login")}
                        placeholder="Login"
                        type="text"
                    />
                    <Input
                        value={form.Pass}
                        onChange={(e) => setFormValues(e.target.value, "Pass")}
                        placeholder="Senha"
                        type="password"
                    />
                </Fields>



                <Button type="button" onClick={logar}>
                    Logar
                </Button>

                {
                    usuario && usuario.Login &&
                    <p>
                        Seja bem-vindo {usuario.Login}
                    </p>
                }
            </Form>
        </Container>
    )
}

export default Login