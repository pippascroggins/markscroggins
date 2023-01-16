import './index.scss'
import Loader from 'react-loaders'

const Contact = () => {

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <div>
                    <h1>CONTACT</h1>
                    <p>
                        I am interested in freelance opportunities - especially ambitious or
                        large projects. However, if you have other requests or questions, 
                        don't hesitate to contact me using this below form. 
                    </p>
                    </div>
                    <div className="contact-form">
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
                        </ul>
                    </div>
                </div>
            </div>

            <Loader type="pacman"/>
        </>
    )
}

export default Contact