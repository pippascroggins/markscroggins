import './index.scss'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlasses, faLaptop, faMugHot, faNewspaper, faPenFancy, faSpellCheck } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    
    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    ABOUT
                </h1>
            <p>Mark Scroggins is a poet, biographer, and critic.</p>
            <p>He was born in West Germany and grew up in a variety of places,
                including upstate New York, California, Kentucky, and Texas, 
                before settling in Tennessee.
            </p>
            <p>He attended Virginia Tech and Cornell University. He taught for
                many years at Florida Atlantic University, and now lives Montclair
                (New Jersey) and Manhattan. 
            </p>
            </div>

            <div className='stage-cube-cont'>
                <div className="cubespinner">
                    <div className='face1'>
                        <FontAwesomeIcon icon={faPenFancy} color="#DD0031" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faMugHot} color="#F0629" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faNewspaper} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faLaptop} color="#5EDF4" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faGlasses} color="#EFD81D" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faSpellCheck} color="#EC4D28" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About