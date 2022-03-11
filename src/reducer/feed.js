export const reducer = (state, action) => {

    switch (action.type) {
        case FeedActions.CriarPost:
            return { ...state, Posts: [...state.payload, ...state.Posts] }
        default:
            return state;

    }

}


export const FeedActions = {
    CriarPost: 'CRIAR_POST',
    RemoverPost: 'REMOVER_POST',
}