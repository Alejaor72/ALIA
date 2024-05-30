import ProfileCard from './Cards/Profile';

import isa1 from '../assets/20.png';
import isa2 from '../assets/isaAvatar.png';
import isa3 from '../assets/bigCard.png';

import aleja1 from '../assets/20.png';
import aleja2 from '../assets/alejaAvatar.png';
import aleja3 from '../assets/bigCard.png';

import andre1 from '../assets/20.png';
import andre2 from '../assets/andreAvatar.png';
import andre3 from '../assets/bigCard.png';

import lau1 from '../assets/20.png';
import lau2 from '../assets/lauAvatar.png';
import lau3 from '../assets/bigCard.png';

import ui from '../assets/ui.png';
import ux from '../assets/ux.png';
import illustration from '../assets/illustrations.png';
import video from '../assets/video.png';
import tape from '../assets/tape.png';


const membersData = [
    {
        images: [isa1, isa2, isa3],
        mainText: "Isabella Palma",
        secondaryText1: "isabellapalma99@gmail.com",
        secondaryText2: "@ispg103",
        extraText1: "Diseñador UX / UI",
        extraText2: "Isabella es una persona versátil, curiosa, perseverante y perfeccionista que siempre busca la excelencia en su trabajo. Destaca en el diseño de interfaces de usuario y la experiencia de usuario. Constantemente busca mantenerse actualizada en las tendencias del diseño para mejorar sus habilidades y conocimientos en este campo. Su objetivo es crear experiencias únicas que faciliten la vida de sus usuarios.",
        extraImages: [ui, ux]
    },
    {
        images: [aleja1, aleja2, aleja3],
        mainText: "Alejandra Ordoñez",
        secondaryText1: "alejandraord2872@hotmail.com",
        secondaryText2: "@aostyle72",
        extraText1: "Ilustrador digital / Diseñador UI",
        extraText2: "Alejandra es apasionada por la ilustración digital, diseño de marca, creación de pósters y diseño de interfaces de usuario. Su enfoque creativo y compromiso con la innovación la destacan, mientras que su ética de trabajo ejemplar garantiza resultados de alta calidad. Es una profesional comprometida, curiosa y adaptable, siempre buscando crecimiento y excelencia en el diseño.",
        extraImages: [ui, illustration]
    },
    {
        images: [andre1, andre2, andre3],
        mainText: "Andrea Oviedo",
        secondaryText1: "andreaoviedor@gmail.com",
        secondaryText2: "@ovii_1006",
        extraText1: "Diseñador UX / UI",
        extraText2: "Andrea es apasionada por la animación y la creación de interfaces de usuario. Su pasión por el diseño va más allá de lo visual, se enfoca en comprender cómo las personas interactúan con la tecnología. Se destaca por su dedicación e investigación constante para mejorar la usabilidad y accesibilidad en sus proyectos. Su enfoque meticuloso y capacidad para pensar críticamente la distinguen como una profesional excepcional en su campo.",
        extraImages: [ui, ux]
    },
    {
        images: [lau1, lau2, lau3],
        mainText: "Laura Mendieta",
        secondaryText1: "LauraMarcelaM.mp26@gmail.com",
        secondaryText2: "@_72797",
        extraText1: "Diseñador UX / Editor de video",
        extraText2: "Laura destaca por su pasión por la edición de video y animación, así como por su interés en el diseño, la tecnología y las tendencias creativas. Se enfoca en mejorar la usabilidad de dispositivos a través del diseño de interfaz de usuario (UI) y experiencia de usuario (UX), siempre buscando crear nuevas experiencias impactantes. Constantemente busca aprender y dominar diversas aplicaciones y dispositivos nuevos.",
        extraImages: [video, ux]
    },
    
];

function Members() {
    return (
        <div className="memberSection">
            {membersData.map((members, index) => (
                <div key={index} className="mem">
                    <ProfileCard
                        images={members.images}
                        mainText={members.mainText}
                        secondaryText1={members.secondaryText1}
                        secondaryText2={members.secondaryText2}
                    />
                    <h3 className='work'>{members.extraText1}</h3>
                    <p className='descrip'>{members.extraText2}</p>
                    {members.extraImages.map((imgSrc, imgIndex) => (
                        <img key={imgIndex} src={imgSrc} />
                    ))}
                    <img className='tape' src={tape}></img>
                </div>
            ))}
        </div>
    );
}

export default Members;
