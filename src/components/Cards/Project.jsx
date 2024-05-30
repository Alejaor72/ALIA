import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function ProyectCard({ id, imgUrl, mainText, integrantes }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/details/${id}`);
    };

    return (
        <div className='proyectCard' onClick={handleClick}>
            <img src={imgUrl} alt="Project" />
            <div className='proyectText'>
                <h2 className='description'>{mainText}</h2>
                <p className='names'>{integrantes}</p>
            </div>
        </div>
    );
}

ProyectCard.propTypes = {
    id: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    mainText: PropTypes.string.isRequired,
    integrantes: PropTypes.string.isRequired
};

export default ProyectCard;
