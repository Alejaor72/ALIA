import './landing.css'
import Button from '../../components/Button';
import Header from '../../components/Header';
import FloatingMenu from '../../components/FloatingMenu/FloatingMenu';
import HeadCard from '../../components/Cards/Heads';
import ServicesCard from '../../components/Cards/Services';
import Members from '../../components/Members';
import Footer from '../../components/Footer';
import towerImage from '../../assets/tower.png';
import { useNavigate } from 'react-router-dom';

function Landing() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/contact');
    };
    return (
        <div>
            <Header />
            <FloatingMenu />
            <div className='start'>
                <h1 className='aliaTitle'>ALIA</h1>
                <p className='slogan'>Diseñando experiencias que transforman el mundo</p>
                <Button label="Contáctanos" onClick={handleClick} />
            </div>
            <div>
                <h2 className='whoAreWe'>¿Quiénes somos?</h2>
                <p className='description'>Somos un colectivo de mujeres estudiantes apasionadas por el diseño y la tecnología.
                Nos dedicamos a crear experiencias innovadoras que enriquecen la vida de nuestros usuarios. Impulsadas por la creatividad
                y la colaboración, buscamos superar los límites y dejar una huella positiva en el mundo.</p>
                <HeadCard />
            </div>
            <div>
                <h2 className='servicesTitle'>Servicios</h2>
                <p className='servicesText'>Nuestro enfoque principal es diseñar experiencias que enriquezcan y
                faciliten la vida de nuestros usuarios.</p>
                <ServicesCard />
            </div>
            <div>
                <img src={towerImage} className='tower'></img>
                <h2 className='valuesTitle'>Valores</h2>
                <p className='valuesText1'>Fomentamos un ambiente inclusivo y de apoyo mutuo, donde cada voz es escuchada
                y cada contribución es valorada. Nos esforzamos por superar los límites, desafiando lo convencional y abrazando
                la diversidad de perspectivas. </p>
                <p className='valuesText2'>Nos guiamos por valores fundamentales que reflejan nuestra dedicación y compromiso
                con la excelencia, la colaboración y la innovación. </p>
                <p className='valuesText3'>Nos comprometemos a crear un impacto positivo en el mundo a través de nuestro trabajo,
                manteniendo siempre nuestros valores como guía en cada paso que damos.</p>
            </div>

            <div>
            <h2 className='members'>Miembros</h2>
            <Members />
            </div>

            <Footer />
        </div>
    );
}

export default Landing;
