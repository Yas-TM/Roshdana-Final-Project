import { Card, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/authContext";

const Dashboard = () => {

    const [error, setError] = useState("")
    const {currentUser, logout} = useAuth()
    const navigate = useNavigate()

    async function handleLogout() {
        setError('')

        try{
            await logout()
            navigate('/login')
        }catch{
            setError('موفق به خروج نشد')
        }
    }

    return(
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">پروفایل</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>ایمیل: </strong>{currentUser.email}
                    <Link to="/update-profile" className="btn btn-success w-100 mt-3 text-decoration-none">بروزرسانی پروفایل</Link>
                </Card.Body>
            </Card>

            <div className="w-100 text-center mt-2">
                <Link to='/login' className="text-success" onClick={handleLogout}>خروج</Link>                
            </div>
        </>
    )
}

export default Dashboard;