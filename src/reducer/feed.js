export const reducer = (state, action) => {

    switch (action.type) {
        case FeedActions.CriarPost:
            const newPost = action.payload.post
            
            return { ...state, posts: [newPost, ...state.posts] };
        default:
            return state;

    }

}


export const FeedActions = {
    CriarPost: 'CRIAR_POST',
    RemoverPost: 'REMOVER_POST',
}