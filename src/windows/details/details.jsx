import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProjectById } from '../../services/firebase';
import Header from '../../components/Header';
import FloatingMenu from '../../components/FloatingMenu/FloatingMenu';
import ArrowButton from '../../assets/ArrowButton.png';
import UxTags from '../../assets/uxTag.png';
import UiTags from '../../assets/uiTag.png';
import AnimeTags from '../../assets/AnimeTags.png'
import IlustraTags from '../../assets/IlustraTags.png'
import ProgramTags from '../../assets/prograTag.png';
import BehanceIcon from '../../assets/BehanceIcon.png';
import './details.css';

function Details() {
    const { projectId } = useParams();
    const [project, setProject] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProjectDetails = async () => {
            try {
                const projectData = await getProjectById(projectId);
                setProject(projectData);
            } catch (error) {
                console.error("Error fetching project details:", error);
            }
        };

        fetchProjectDetails();
    }, [projectId]);

    const handleClick = () => {
        navigate('/projects');
    };

    const getTagImage = (specialization) => {
        switch (specialization) {
            case 'UX':
                return UxTags;
            case 'UI':
                return UiTags;
            case 'Programación':
                return ProgramTags;
            case 'Animación':
                return AnimeTags;
            case 'Ilustración':
                return IlustraTags;
            default:
                return null;
        }
    };

    return (
        <div>
            <Header />
            <FloatingMenu />
            <div className="infoarrow">
                <button onClick={handleClick} className="ArrowButton">
                    <img src={ArrowButton} alt="Arrow Button" />
                </button>
            </div>
            <div className="infoContainer">
                {project ? (
                    <>
                        <img src={project.imgUrl} className="subwayProject" alt="Project" />
                        <h2 className="detailsTitle">{project.name}</h2>
                        <div className="namesContainer">
                            <p className="namesDesing">{project.integrantes}</p>
                            <p className="context">{project.descripcion}</p>
                        </div>
                        <div className="Tags">
                            {project.especializacion && (
                                <img src={getTagImage(project.especializacion)} alt={project.especializacion} className='tag' />
                            )}
                        </div>
                        <div className="urlContainer">
                            <img src={BehanceIcon} className="BehanceIcon" alt="BehanceIcon" />
                            <a href={project.behanceLink} target="_blank" rel="noopener noreferrer">Ver proyecto</a>
                        </div>
                    </>
                ) : (
                    <p>Cargando detalles del proyecto...</p>
                )}
            </div>
        </div>
    );
}

export default Details;
