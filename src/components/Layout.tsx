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
            <NavLink to="/register" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Register</NavLink>
          </li>
          <li>
            <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Login</NavLink>
          </li>
        </ul>
        <ul className="icon-menu">
        
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;