import { Link } from "react-router-dom";


const Navbar = () => {


    const navItem = <>

        <li > <Link className="text-black" to='/'> Home </Link> </li>

        <li > <Link className="text-black" to='/dashboard'> Dashboard </Link>  </li>

        <li> <Link className="text-black" to='/contact'> contact us </Link>  </li>
    
    
     </>
    return (
      
<div className="navbar bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-lg">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52 text-gray-800">
        {navItem}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl font-bold">TaskTraverse</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItem}
    </ul>
  </div>

  <div className="navbar-end">
    <a className="btn bg-blue-500 hover:bg-blue-600 text-white">Sign Up</a>
  </div>
</div>

    );
};

export default Navbar;