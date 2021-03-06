import axiosWithAuth from "../utilis/axiosWithAuth";
import {useNavigate} from 'react-router-dom'

function Post(props) {
    const {post,username} = props
    const navigate = useNavigate()
    const handleRemove= () => {
        axiosWithAuth()
        .delete(`https://forume-backend.herokuapp.com/api/${username}/posts/${post.post_id}`)
        .then(res => {
            navigate('/dashboard')
            window.location.reload(false)
        })
    }

    return (
        <div className="card my-4 mx-2 px-4 gap-3">
            <div className="card-body">

                <h2 className="fw-bold">{post.post_title}</h2>
                <p>{post.post_body} </p>
                <hr />
                <div className="row">
                <div className="col">
                <p >Posted by {username}</p>
                <span className="text-danger float-end" onClick={handleRemove}>Remove</span>
               
                </div>
                </div>
            </div>
        </div>
    )
}
export default Post;