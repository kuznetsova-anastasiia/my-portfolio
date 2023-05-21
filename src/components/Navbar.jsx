import '../styles/navbar.scss';

export const Navbar = () => {
  return (
    <ul className="navbar">
      <li className="navbar__item">
        <a href='/' className="navbar__link">
          Home
        </a>
      </li>
      <li className="navbar__item">
        <a href='#projects' className="navbar__link">
          Projects
        </a>
      </li>
      <li className="navbar__item">
        <a href='#contacts' className="navbar__link">
          Contacts
        </a>
      </li>
    </ul>
  )
}