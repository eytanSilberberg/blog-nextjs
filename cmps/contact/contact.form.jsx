import classes from './contact.form.module.css'
import { sendMessage } from '../../services/contact.service'
import { useRef } from 'react';

function ContactForm() {

    const nameRef = useRef()
    const emailRef = useRef()
    const messageRef = useRef()

    function submitFormHandler(ev) {
        ev.preventDefault()
        const emailVal = emailRef.current.value
        const nameVal = nameRef.current.value
        const messageVal = messageRef.current.value
        const newMessage = { email: emailVal, message: messageVal, name: nameVal }
        // console.log(newMessage);
        sendMessage(newMessage)
    }

    return (
        <section className={classes.contact}>
            <h1>How can I help you?</h1>
            <form className={classes.form} onSubmit={submitFormHandler}>

                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label htmlFor="email">Your email</label>
                        <input ref={emailRef} type="email" id='email' required />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="name">Your name</label>
                        <input ref={nameRef} type="text" id='name' required />
                    </div>
                </div>
                <div className={classes.control}>
                    <label htmlFor="message">Your message</label>
                    <textarea ref={messageRef} id="message" rows="10" ></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Submit</button>
                </div>
            </form>

        </section>
    )

}

export default ContactForm