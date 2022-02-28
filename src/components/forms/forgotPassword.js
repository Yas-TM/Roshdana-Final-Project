import { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from '../../context/authContext'
import { Link } from "react-router-dom"

const ForgotPassword = () => {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("برای دستورالعمل‌های بیشتر ایمیل خود را بررسی کنید")
    } catch {
      setError("رمز عبور بازنشانی نشد")
    }

    setLoading(false)
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">تنظیم مجدد رمز عبور</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>ایمیل</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100 btn-success mt-2" type="submit">
              تنظیم مجدد رمز عبور
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/login" className="text-success">ورود</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        نیاز به یک حساب کاربری دارید؟ <Link to="/signup" className="text-success">ثبت نام</Link>
      </div>
    </>
  )
}

export default ForgotPassword