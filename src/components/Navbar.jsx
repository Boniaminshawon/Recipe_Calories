import profile from '../assets/images/Frame (6).png'
import search from '../assets/images/Frame (7).png'


const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content font-medium text-[#150B2BB2] text-lg mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Home</a></li>
              <li><a>Recipes</a></li>
              <li><a>About</a></li>
              <li><a>Search</a></li>

            </ul>
          </div>
          <a className="text-lg lg:text-[30px] font-semibold lg:font-bold text-[#150B2B]">Recipe Calories</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal font-medium text-lg px-1 text-[#150B2BB2]">
            <li><a>Home</a></li>
            <li><a>Recipes</a></li>
            <li><a>About</a></li>
            <li><a>Search</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className='flex bg-[#150b2b0d] lg:w-auto w-[140px] p-2 rounded-full text-[#150B2BB2]'>
            <a><img  src={search} alt="" /></a><input placeholder='Search' className='rounded-full outline-none px-2 w-[90%] bg-[#150b2b0d] ' type="search" name="" id="" />
          </div>
          <a className=" p-[3px] lg:p-2 bg-[#02B76C] rounded-full"><img src={profile} alt="" /></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;