export const reduce = (state, action) => {

    switch (action.type) {
        case 'AlterarLoginUsuario':
            console.log(action.payload)
            return { ...state, Login: action.payload }

        default:
            return state;

    }

}
