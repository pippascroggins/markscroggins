import { Outlet } from 'react-router-dom'
import './index.scss';
import Sidebar from '../Sidebar/';

const Layout = () => {
    return (
    <div className="App">
        <Sidebar />
        <div className='page'>
            {/* <span className='tags top-tags'>Enlightenment</span> */}

            <Outlet/>

            {/* <span className='tags bottom-tags'>
                No time at all. Pen pushing against
                <br />
                <span className='bottom-tag-html'>time, against cancer, against love.</span>
            </span> */}
        </div>
    </div>
    )
}

export default Layout;