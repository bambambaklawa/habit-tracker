const Navbar = () => {
  return (
    <>
    
    <div className="navbar bg-gradient-to-br from-[#fdfcfb] to-[#e2d1c3]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm bg-warning dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a className="hover:bg-amber-300">progress.</a></li>
        <li>
          <p className="hover:bg-amber-300 cursor-none">choose a habit</p>
          <ul className="p-2">
          <li><a className="p-2 rounded-md hover:bg-amber-300">eat one rabbit a day</a></li>
            <li><a className="p-2 rounded-md hover:bg-amber-300">step on a lego cube every morning</a></li>
            <li><a className="p-2 border-2 border-black rounded-md hover:bg-amber-300">custom yours.</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl hover:bg-green-500">habitTracker.</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a className="hover:bg-amber-300">your progress</a></li>
      <li>
        <details>
          <summary className="hover:bg-amber-300 z-10">choose a habit</summary>
          <ul className="p-2 bg-warning z-10">
            <li><a className="p-2 rounded-md hover:bg-amber-300">eat one rabbit a day</a></li>
            <li><a className="p-2 rounded-md hover:bg-amber-300">step on a lego cube every morning</a></li>
            <li><a className="p-2 border-2 border-black rounded-md hover:bg-amber-300">custom yours.</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-outline text-black hover:bg-green-500 mr-1">sign in</a>
    <a className="btn btn-warning">register</a>

  </div>
</div>
</>
  );
};

export default Navbar;
