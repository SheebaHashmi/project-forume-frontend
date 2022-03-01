import Posts from "./Posts";
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import axiosWithAuth from "../utilis/axiosWithAuth";

import Navbar from "./Navbar";

function Dashboard(props) {
    const { username, posts, setPosts } = props
    let navigate = useNavigate()

    useEffect(() => {
        axiosWithAuth().get(`https://forume-backend.herokuapp.com/api/${username}/posts`)
            .then(res => setPosts(res.data))
            .catch(err => navigate("/"))
    }, [setPosts, username, navigate])

    return (
        <div className="forum-container">

            <Navbar />

            <div className="container">

                <div className="row">
                    <div className="col-12 col-md-5 my-2 offset-md-6">
                        <button
                            className="btn btn-primary btn-lg mt-2 mx-3 shadow float-end"
                            onClick={() => navigate('/private/addPost')}
                        >
                            Start a New Topic
                        </button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-8 offset-md-2">
                        {
                            posts.map(post => <Posts post={post} author={username} key={post.post_id} />)
                        }
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Dashboard;