import isaHead from '../../assets/isaHead.png';
import alejaHead from '../../assets/alejaHead.png';
import andreHead from '../../assets/andreHead.png';
import lauHead from '../../assets/lauHead.png';

function HeadCard() {
    const images = [isaHead, alejaHead, andreHead, lauHead];

    return (
        <div className="headCards">
            {images.map((image, index) => (
                <img key={index} src={image} className='heads' />
            ))}
        </div>
    );
}

export default HeadCard;
