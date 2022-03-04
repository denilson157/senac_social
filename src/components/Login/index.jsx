import { useState } from 'react'
import {
    Container,
    Input,
    Button,
    Form,
    Fields
} from "./Components"

const initialValuesForm = {
    Login: '',
    Pass: ''
}

const Login = () => {

    const [form, setForm] = useState(initialValuesForm)

    const setFormValues = (newValue, valueTipo) => {
        setForm(
            {
                ...form,
                [valueTipo]: newValue
            })

    }

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

                <Button>
                    Logar
                </Button>
            </Form>
        </Container>
    )
}

export default Login