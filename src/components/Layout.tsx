import { NavLink, Outlet} from "react-router-dom";
import "./Layout.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import LoginIcon from '@mui/icons-material/Login';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

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
            <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><LoginIcon></LoginIcon></NavLink>
          </li>
          <li className="grow"></li>
          <li>
          <NavLink to="/upload" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><AddAPhotoIcon></AddAPhotoIcon></NavLink>
          </li>
          <li>
            <NavLink to="https://github.com/marceljaworski" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><GitHubIcon></GitHubIcon></NavLink>
            </li>
          <li>
          <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><AlternateEmailIcon></AlternateEmailIcon></NavLink>
            </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;