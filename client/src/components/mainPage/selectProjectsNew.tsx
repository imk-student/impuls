import React from 'react';
import Box from '@mui/material/Box';
import { Button, Container, Stack, IconButton} from '@mui/material';
import ProjectDialog from './muiDialog';
import data from '../editPopup/data';

export default function SelectProjects({changeState} : any) {

    const [formOpen, setFormOpen] = React.useState(false);    
    const [projectData, setProjectData] = React.useState(data.tree[0]);
    const handleCloseForm = () => {
          setFormOpen(false);
      }
      const handleOpenForm = () => {
          setFormOpen(true);
      }
      const changeProps = (value : any) => {
        setProjectData(value)
        changeState(value)
        handleCloseForm()
      }
  return (

    <Box sx={{ flexGrow: 0}}>             
        <Button variant="text" onClick={handleOpenForm} sx={{maxHeight: 30,color: 'white'}} > {projectData.name} </Button>
        <ProjectDialog formOpen={formOpen} handleCloseForm={handleCloseForm} changeProps={changeProps}/>
    </Box>
  );
}
