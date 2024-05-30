import { useState } from 'react';
import { Link } from 'react-router-dom';
import projectsIcon from '../../assets/projectsIcon.png';
import usIcon from '../../assets/usIcon.png';
import userIcon from '../../assets/darkuserIcon.png';
import burgerIcon from '../../assets/burger.png';
import closeIcon from '../../assets/closeIcon.png';
import './FloatingMenu.css';

const FloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`menuContainer ${isOpen ? 'open' : ''}`}>
      <nav className="floatingMenu">
        <ul>
          <li>
            <Link to="/projects" onClick={toggleMenu}>
              <img src={projectsIcon} />
              <span>Proyectos</span>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={toggleMenu}>
              <img src={usIcon}/>
              <span>Nosotros</span>
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={toggleMenu}>
              <img src={userIcon} />
              <span>Perfil</span>
            </Link>
          </li>
          {isOpen && (
            <li className="closeButton">
              <img src={closeIcon} onClick={toggleMenu} />
            </li>
          )}
        </ul>
      </nav>
      {!isOpen && (
        <button className="menuButton" onClick={toggleMenu}>
          <img src={burgerIcon} />
        </button>
      )}
    </div>
  );
};

export default FloatingMenu;
