import logo from '../assets/alia.png';
import usericon from '../assets/userIcon.png';
import Button from './Button';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/contact');
    };

    return (
        <header className="header">
            <div className="left">
                <Link to="/">
                    <img src={logo} className="logo" alt="ALIA Logo" />
                </Link>
                <Link to="/" className='headerselect'>Sobre Nosotros</Link>
                <Link to="/projects" className='headerselect'>Proyectos</Link>
            </div>
            <div className="right">
                <Button label="Contáctanos" onClick={handleClick} className='contact' />
                <Link to="/login">
                    <img src={usericon} alt="userIcon" />
                </Link>
            </div>
        </header>
    );
}

export default Header;
