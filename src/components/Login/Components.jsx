import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw

`

export const Input = styled.input.attrs(({ type, placeholder, name }) => ({
    type: type || "text",
    placeholder: placeholder || "Digite",
    name: name || ""
}))`
    margin: 8px 0;
    padding: 6px 8px;
`

export const Button = styled.button.attrs({ type: "submit" })`
    padding: 6px
`


export const Coluna = styled.div` 
    display: flex;
    flex-direction: column
`

export const Form = styled(Coluna)`  
    width: 20vw
`

export const Fields = styled(Coluna)`
    margin: 8px 0;
`