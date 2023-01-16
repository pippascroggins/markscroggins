import './index.scss'
import LogoS from '../../../assets/images/logo-s.png'
import { useRef } from 'react'

const Logo = () => {

    // const bgRef = useRef();
    // const outlineLogoRef = useRef();
    // const solidLogoRef = useRef();

    return (
        <div className='logo-container'>
            <img className='solid-logo' src={LogoS} alt="MS" />
            <svg
                width="546pt"
                height="304pt"
                version="1.0"
                viewBox="0 0 546 304"
                xmlns="http://www.w3.org/2000/svg"
                >
                    <g></g>
            </svg>
        </div>
    )
}

export default Logo;