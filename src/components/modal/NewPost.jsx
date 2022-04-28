import React, { useState, useRef, useContext } from 'react'
import { UserContext } from '../../auth';
import { useMutation } from '@apollo/client';
import { INSERT_POST } from '../../graphql/post/mutation';


const NewPost = ({ isNewPost }) => {

    const { currentUser } = useContext(UserContext);
    const [setPost] = useMutation(INSERT_POST);

    if (isNewPost) {
        const element = document.getElementById('newPost')
        if (!element.classList.contains('show'))
            new window.bootstrap.Modal(element).show();
    }

    const [texto, setTexto] = useState('')
    const image = useRef();

    const uploadImage = async () => {
        const mockData = new FormData();

        mockData.append('file', image.current.files[0])
        mockData.append('upload_preset', 'senacgram')
        mockData.append('cloud_name', 'dpereira')

        const response = await fetch('http://api.cloudinary.com/v1_1/dpereira/image/upload', {
            method: 'POST',
            accept: 'applicaton/json',
            body: mockData
        })

        const respJson = await response.json();

        return respJson.url
    }

    const criarPost = async () => {

        const imageURl = await uploadImage()

        const objetoPost = {
            text: texto,
            image_id: imageURl,
            user_id: currentUser.id
        }

        setPost({
            variables: {
                image_id: objetoPost.image_id,
                text: objetoPost.text,
                user_id: objetoPost.user_id
            }
        })

    }

    return (
        <div className="modal" id="newPost" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Criar um post</h5>
                        <button type="button" className="close" >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <textarea rows={7} value={texto} onChange={e => setTexto(e.target.value)} placeholder='Digite um texto' className='form-control my-2'>

                        </textarea>

                        <input type="file" className='form-control my-2' ref={image} />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={criarPost}>Postar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewPost