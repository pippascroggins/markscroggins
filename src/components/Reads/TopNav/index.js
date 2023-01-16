// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
// import { useRef } from 'react'
import './index.scss'
// import Nav from 'react-bootstrap/Nav'
import { Link, NavLink } from 'react-router-dom'

function TopNav() {
    // const navRef = useRef();

    // const showNavbar = () => {
    //     navRef.current.classList.toggle("reponsive-nav");
    // }

    return (
        <div className='top-nav-bar'>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/reads">Books</NavLink>
            </nav>
            <nav>
                <NavLink exact="true" activeclassname="active" className="articles-link" to="/articles">Articles</NavLink>
            </nav>
            <nav>
                <NavLink exact="true" activeclassname="active" className="reviews-link" to="/reviews">Reviews</NavLink>
            </nav>
        </div>
    )
}

export default TopNav;