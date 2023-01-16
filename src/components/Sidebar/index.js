
import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEnvelope, faUser, faBook, faBell } from '@fortawesome/free-solid-svg-icons'
import {
    faTwitter,
    faFacebook,
    faInstagram
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img className="logo" src={LogoS} alt="logo" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="publications-link" to="/publications">
                <FontAwesomeIcon icon={faBook} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="news-link" to="/news">
                <FontAwesomeIcon icon={faBell} color="#4d4d4e"/>
            </NavLink>       
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>           
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.facebook.com/mark.scroggins'>
                    <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://twitter.com/markscroggins'>
                    <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.instagram.com/m_scroggins/?hl=en'>
                    <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
                </a>
            </li>
        </ul>

    </div>
)

export default Sidebar