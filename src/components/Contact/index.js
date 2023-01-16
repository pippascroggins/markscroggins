import './index.scss'
import Loader from 'react-loaders'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            //.sendForm('gmail', 'template_YeJhZkgb', form.current, 'your-token')
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <div>
                    <h1>CONTACT</h1>
                    </div>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeholder="Email" required />
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder="Message" name="message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>                            
                        </form>
                    </div>
                </div>
            </div>

            <Loader type="pacman"/>
        </>
    )
}

export default Contact