import interfaces from '../../assets/servInterfaces.png';
import animation from '../../assets/servAnimations.png';
import brand from '../../assets/servBrand.png';
import illustration from '../../assets/servIllustrations.png';
import posters from '../../assets/servPosters.png';

function ServicesCard() {
    const services = [interfaces, animation, brand, illustration, posters];

    return (
        <div className="servicesCards">
            {services.map((services, index) => (
                <img key={index} src={services} className='service' />
            ))}
        </div>
    );
}

export default ServicesCard;
