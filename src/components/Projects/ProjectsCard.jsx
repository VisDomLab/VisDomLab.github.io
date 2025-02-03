import React from 'react';
import { TableCell,  TableRow } from '@mui/material';
import './ProjectsCard.css';

const ProjectsCard = ({ project }) => {
    return (
        <TableRow align='center' className='Projects_TableRow'>
            <TableCell  align='center'className='ProjectsTableCell' sx={{fontSize:"1.0rem"}}>{project.sno}</TableCell>
            <TableCell align='center'className='ProjectsTableCell' sx={{fontSize:"1.0rem"}}>{project.title}</TableCell>
            <TableCell align='center'className='ProjectsTableCell' sx={{fontSize:"1.0rem"}}>{project.description}</TableCell>
            <TableCell align='center'className='ProjectsTableCell' sx={{fontSize:"1.0rem"}}>{project.pi_copi}</TableCell>
            <TableCell align='center'className='ProjectsTableCell' sx={{fontSize:"1.0rem"}}>{project.year}</TableCell>
            <TableCell align='center'className='ProjectsTableCell' sx={{fontSize:"1.0rem"}}>{project.fund}</TableCell>
        </TableRow>
    );
};


export default ProjectsCard;
