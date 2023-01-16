
import { Link } from 'react-router-dom';
import { Loader } from 'react-loaders';
import './index.scss';
import Logo from './Logo'

const Home = () => {

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>Mark Scroggins
                    {/* <img src={LogoTitle} alt="author" /> */}
                    </h1>
                    <h2>Poet / Biographer / Literary Critic</h2>
                    <Link to="/contact" className='flat-button'>CONTACT</Link>
                </div>

                {/* <Logo />  */}

            </div>

            <Loader type="pacman"/>
        </>
    )
}

export default Home