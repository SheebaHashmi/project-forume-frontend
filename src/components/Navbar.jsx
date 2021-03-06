import { useNavigate } from 'react-router-dom'

function Navbar() {
    let navigate = useNavigate()

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <h1 className="navbar-brand fw-bolder">PostIt</h1>
                <div>
                    <span className="navbar-text text-decoration-none fw-bold mx-2"
                        onClick={() => navigate('/dashboard')}
                    >
                        Home
                    </span>
                    <span className="navbar-text text-decoration-none fw-bold mx-2"
                        onClick={() => navigate('/profile')}
                    >
                        Profile
                    </span>
                    <span className="navbar-text text-decoration-none fw-bold mx-2"
                        onClick={() => navigate('/logout')}>
                        Logout
                    </span>

                </div>
            </div>
        </nav>
    )
}
export default Navbar;