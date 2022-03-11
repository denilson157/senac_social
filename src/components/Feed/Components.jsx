import styled from 'styled-components'

export const Container = styled.div`
    padding: 16px;
    width: 20vw;
`

export const TextArea = styled.textarea.attrs(() => ({
    placeholder: "Digite o novo post",
    rows: 5,
    cols: 65
}))`
    margin-bottom: 10px
`

export const Botao = styled.button.attrs(() => ({
    type: 'submit'
}))` 
`

export const Fields = styled.div`
    margin:
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`
export const InputFile = styled.input.attrs(() => ({
    type: 'file'
}))`
    margin-bottom: 10px
`