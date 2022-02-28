import { Card, Form, Button, Alert } from "react-bootstrap"
import { useRef, useState } from "react"
import {useAuth} from '../../context/authContext'
import { Link, useNavigate } from "react-router-dom"

const SignUp = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    const {signup} = useAuth()

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('رمز عبور مطابقت ندارد')
        }else if(passwordRef.current.value.length < 6){
            return setError('رمز عبور باید بیشتر از 6 کاراکتر باشد')
        }

        try{
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            navigate('/login')
        } catch{
            setError('موفق به ایجاد حساب کاربری نشد')
        }

        setLoading(false)
    }

    return(
        
            <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">ثبت نام</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>ایمیل</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>رمز عبور</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>ورود مجدد رمز عبور</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required />
                        </Form.Group>
                        <Button disabled={loading} type="submit" className="w-100 mt-4 btn-success">ثبت نام</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                آیا قبلا ثبت نام کرده اید؟ <Link to="/login" className="text-success">ورود</Link>
                
            </div>
            </>
    )
}

export default SignUp