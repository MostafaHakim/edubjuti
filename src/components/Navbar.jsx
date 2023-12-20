import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-green-700 w-full">
            <div className="w-3/4 m-auto flex flex-row justify-between items-center">
                <NavLink className="text-lg text-white py-2" to='/edubjuti'>Home</NavLink>
                <NavLink className="text-lg text-white py-2" to='/courses'>All Courses</NavLink>
                <NavLink className="text-lg text-white py-2" to='/results'>Results</NavLink>
                <NavLink className="text-lg text-white py-2" to='/gallery'>Gallery</NavLink>
                <NavLink className="text-lg text-white py-2" to='/services'>Services</NavLink>
                <NavLink className="text-lg text-white py-2" to='/about'>About</NavLink>
                <NavLink className="text-lg text-white py-2" to='/contact'>Contact</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;