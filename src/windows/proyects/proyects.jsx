import { useEffect, useState } from 'react';
import { getProjectsFromFirestore } from '../../services/firebase';
import Filters from '../../components/Filters';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import FloatingMenu from '../../components/FloatingMenu/FloatingMenu';
import Button from '../../components/Button';
import ProyectCard from '../../components/Cards/Project';
import { useNavigate } from 'react-router-dom';
import './proyects.css';

function AllProyects() {
    const [projectsFromFirestore, setProjectsFromFirestore] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProjectsFromFirestore = async () => {
            try {
                const projectsData = await getProjectsFromFirestore();
                setProjectsFromFirestore(projectsData);
                setFilteredProjects(projectsData);
                console.log("Projects from Firestore:", projectsData);
            } catch (error) {
                console.error("Error loading projects from Firestore:", error);
            }
        };

        fetchProjectsFromFirestore();
    }, []);

    const handleSpecializationChange = (selectedSpecialization) => {
        console.log("Selected value:", selectedSpecialization);
        try {
            if (selectedSpecialization === '' || selectedSpecialization === 'Todos') {
                setFilteredProjects(projectsFromFirestore);
            } else {
                const filtered = projectsFromFirestore.filter(project => project.especializacion === selectedSpecialization);
                console.log("Filtered projects:", filtered);
                setFilteredProjects(filtered);
            }
        } catch (error) {
            console.error("Error filtering projects:", error);
        }
    };

    const handleClick = () => {
        navigate('/upload');
    };

    return (
        <div>
            <Header />
            <FloatingMenu />
            <div className='sec1'>
                <h2>Nuestros Proyectos</h2>
                <div className='filters'>
                    <Filters onChange={handleSpecializationChange} />
                    <Button label="+" className="addBtn" onClick={handleClick} />
                </div>
            </div>
            <div className='proyectsSec'>
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project) => (
                        <ProyectCard
                            key={project.id}
                            id={project.id}
                            imgUrl={project.imgUrl}
                            mainText="Designers"
                            integrantes={project.integrantes || "No Integrantes"}
                        />
                    ))
                ) : (
                    <p>No hay proyectos disponibles.</p>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default AllProyects;
