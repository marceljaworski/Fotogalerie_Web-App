import { NavLink, Outlet, Link } from "react-router-dom";
import "./Layout.css"

const Layout = () => {
  return (
    <>
      <nav>
        <ul className="menu">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/albums" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Albums</NavLink>
          </li>
          <li>
            <NavLink to="/signup" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Sign Up</NavLink>
          </li>
          <li>
            <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Log In</NavLink>
          </li>
          <li className="grow"></li>
          <li>LikedIn</li>
          <li>GitHub</li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;