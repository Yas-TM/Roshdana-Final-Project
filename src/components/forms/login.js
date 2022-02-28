import { Card, Form, Button, Alert } from "react-bootstrap"
import { useRef, useState } from "react"
import {useAuth} from '../../context/authContext'
import { Link, useNavigate } from "react-router-dom"

const Login = () => {

    const emailRef = useRef()
    const passwordRef = useRef()

    const {login} = useAuth()

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        try{
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate('/dashboard')
        } catch{
            setError('موفق به ورود به حساب کاربری نشد')
        }

        setLoading(false)
    }

    return(
        
            <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">ورود</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>ایمیل</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password" className="mt-2">
                            <Form.Label>رمز عبور</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Button disabled={loading} type="submit" className="w-100 mt-4 btn-success">ورود</Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to="/forgot-password" className="text-success">رمز عبور را فراموش کرده‌اید؟</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                نیاز به یک حساب کاربری دارید؟ <Link to="/signup" className="text-success">ثبت نام</Link>
            </div>
            </>
    )
}

export default Login