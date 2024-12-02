import cup from '../../public/more/logo1.png'
import bg from '../../public/more/15.jpg'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
const NavBar = () => {

    const { user, UserSignOut } = useContext(AuthContext)

    return (
        <div className="flex items-center justify-between gap-3 px-10 bg-cover"
            style={{ backgroundImage: `url(${bg})` }}>

            <div className='flex items-center gap-2'>
                <img src={cup} className="w-16 py-2 " />
                <h3 className='text-white text-4xl'>Espresso Emporium</h3>
            </div>


            <div className='flex items-center gap-4'>
                <Link to={"/"}><button className="btn btn-accent btn-sm">Home</button></Link>
                {user && <Link to={"/addCoffee"}><button className="btn btn-secondary btn-sm">Add coffee</button></Link>}
                {user && <Link to={"/users"}><button className="btn btn-error btn-sm">All Users</button></Link>}
            </div>


            <div className='text-white'>
                {user ?
                    <div className="flex items-center gap-3">
                        <div className="md:w-14 w-8 h-8 md:h-14">
                            <img src={user.photoURL} className="w-full h-full object-cover border-2 border-yellow-400 rounded-full" />
                        </div>

                        <div>
                            <p className="hidden md:block text-lg font-semibold">{user && user.displayName}</p>
                            <button className="hidden md:block btn btn-xs text-xs md:text-sm btn-warning" onClick={UserSignOut}>Sign Out </button>
                            <button className="btn btn-ghost btn-circle md:hidden btn-xs" onClick={UserSignOut}>
                                <img src="https://img.icons8.com/nolan/64/exit.png" alt="exit" className="w-7" />
                            </button>
                        </div>

                    </div> :
                    <div className="flex items-center gap-3">
                        <img src="https://cdn-icons-png.flaticon.com/512/8214/8214212.png" className="w-8 mr-2  md:w-10" />
                        <Link to={'/login'} className="btn btn-info btn-xs  md:btn-sm">Log In</Link>
                    </div>}
            </div>

        </div>
    );
};

export default NavBar;