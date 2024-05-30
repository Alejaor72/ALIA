import logo from '../assets/alia.png';
import world from '../assets/worldIcon.png';
import location from '../assets/locationIcon.png';
import calendar from '../assets/calendarIcon.png';
import books from '../assets/booksIcon.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="footerItems">
                <div className="footerRow">
                    <div className="item">
                        <img src={world} alt="World" />
                        <p>Cali, Colombia</p>
                    </div>
                    <div className="item">
                        <img src={location} alt="Location" />
                        <p>Universidad Icesi</p>
                    </div>
                </div>
                <div className="footerRow">
                    <div className="item">
                        <img src={calendar} alt="Calendar" />
                        <p>Mayo 2024</p>
                    </div>
                    <div className="item">
                        <img src={books} alt="Books" />
                        <p>Diseño de Medios Interactivos</p>
                    </div>
                </div>
            </div>
            <img src={logo} className="logo" alt="ALIA Logo" />
        </footer>
    );
}

export default Footer;
