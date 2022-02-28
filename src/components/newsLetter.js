import {Form, Button, Alert} from 'react-bootstrap'
import { useState } from 'react'
import { db } from '../firebase'
import firebase from 'firebase/compat/app'
import { set } from 'react-hook-form'

const NewsLetter = () => {

    const [input, setInput] = useState('')
    const [message, setMessage] = useState("")
    const [err, setErr] = useState('')



    const inputHandler = (e) => {
        setInput(e.target.value)
    }

    async function inputSubmitHandler(e) {

        e.preventDefault()

        if(db.collection('emails').isEqual(input)){
            console.log('error for being equal')
        }

       try{
            await db.collection('emails').add({
                email: input,
                time: firebase.firestore.FieldValue.serverTimestamp()
            })
            setMessage("پیام شما با موفقیت ارسال شد.")
            setInput('')  
        } catch{
            setErr('پیام با موفقیت ارسال نشد')
        }
    }

    return(
        <>
            <Form className='d-flex align-items-center mb-3 justify-content-center justify-content-md-start' onSubmit={inputSubmitHandler}>
                <input type="email" value={input} onChange={inputHandler} placeholder="ایمیل شما" required/>
                <Button type="submit" className='btn-circle'></Button>
            </Form>
            {message && <Alert variant='success'>{message}</Alert>}
            {err && <Alert variant='danger'>{err}</Alert>}
        </>
    )
}

export default NewsLetter