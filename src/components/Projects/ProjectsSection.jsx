import React, { useState, useEffect } from 'react';
import './ProjectsSection.css';
import ProjectsCard from './ProjectsCard'; // Assuming ProjectsCard is in the same directory
// import Navbar from '../NavBar/NavBar';
// import Footer from '../Footer/Footer';
import { Box,Card, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';


const ProjectsSection = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/data/projects.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => setProjects(data));
    }, []);

    return (
      
            
            <div className='projectsSectionWrapper'>
                <h1>Projects</h1>
                <div className='projectsContent'>
                    <Card sx={{ display: 'flex' }} variant="h1" className='projectsCard'>
                        <Box sx={{ display: 'flex', flexDirection: 'column', padding: "15px" }} className='projectsBox'>
                            <Table >
                                <TableHead className='TableHeader'>
                                    <TableRow className=''>
                                        <TableCell align='center' className='ProjectsTableHead' sx={{fontWeight:"bold", fontSize:"1.15rem"}}>S No.</TableCell>
                                        <TableCell align='center'  className='ProjectsTableHead' sx={{fontWeight:"bold", fontSize:"1.15rem"}}>Project Title</TableCell>
                                        <TableCell align='center' className='ProjectsTableHead' sx={{fontWeight:"bold", fontSize:"1.15rem"}}>Funding Agency</TableCell>
                                        <TableCell align='center' className='ProjectsTableHead' sx={{fontWeight:"bold", fontSize:"1.15rem"}}>PI/Co-PI</TableCell>
                                        <TableCell align='center' className='ProjectsTableHead' sx={{fontWeight:"bold", fontSize:"1.15rem"}}>Year</TableCell>
                                        <TableCell align='center' className='ProjectsTableHead' sx={{fontWeight:"bold", fontSize:"1.15rem"}}>Fund</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody >
                                    {projects.map((project) => (
                                        <ProjectsCard key={project.id} project={project} />
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Card>
                </div>
            </div>
           
     
    );
};

export default ProjectsSection;
