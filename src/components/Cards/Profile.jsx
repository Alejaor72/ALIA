import profileIcon from '../../assets/profileIcon.png';
import instagramIcon from '../../assets/instagramIcon.png';
import PropTypes from 'prop-types';

function ProfileCard({ images, mainText, secondaryText1, secondaryText2 }) {
    return (
        <div className='profileCard'>
            {images.map((imageSrc, index) => (
                    <img key={index} src={imageSrc} />
                ))}
            <div>
                <h2 className='names'>{mainText}</h2>
                <p className='profile'><img src={profileIcon} /> {secondaryText1}</p>
                <p className='insta'><img src={instagramIcon} /> {secondaryText2}</p>
            </div>
        </div>
    );
}

ProfileCard.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    mainText: PropTypes.string.isRequired,
    secondaryText1: PropTypes.string.isRequired,
    secondaryText2: PropTypes.string.isRequired
};

export default ProfileCard;