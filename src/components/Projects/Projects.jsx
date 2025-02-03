import React from 'react';
import './Projects.css';
//import ProjectsCard from './ProjectsCard'; // Assuming ProjectsCard is in the same directory
import ProjectsSection from './ProjectsSection';
import Navbar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const Projects = () => {
    return (
        <>
            <Navbar />
            <div className='projectsWrapper'>
                <ProjectsSection />
            </div>
            
            <Footer />
        </>
    );
}

export default Projects;
