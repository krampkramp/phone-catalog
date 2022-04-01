import React,{useState} from 'react'
import {Button, Card,CardActions,
  CardContent,
  CardMedia,
  Typography, Modal, Box} from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { EditPhone } from './EditPhone';

const boxStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  minWidth: 0,
  width: '1300px',
  height: '35%'
};

export const Phone = (props) => {
  const {phone,phones,setPhones, phoneIndex,openModal,
    setOpenModal} = props;

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const myCard = {
    padding: '10px',
  }

  const handleDeletePhone = (index) => {
    const phoneCopy = [...phones];
    phoneCopy.splice(index,1);
    setPhones(phoneCopy);
  }
  return (
      <>
        <Card sx={{ maxWidth: 345 }} style={myCard}>
          <CardMedia
            component="img"
            height="300"
            image={phone.id !== -1 ? require(`../assets/images/iphone_${phone.id+6}.png`) : null}
            alt={phone.name ? phone.name : '-'}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {phone.name ? phone.name : '-'} <Typography variant="body2" color="text.secondary"> Price: {phone.price}€</Typography>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Description: {phone.description ? phone.description : '-'}
             
            </Typography>
            <Typography variant="body2" color="text.secondary">
                RAM: {phone.ram ? phone.ram : '-' }
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Button size="medium" onClick={() => handleOpen()}>
              <ModeEditIcon />
            </Button>
            <Button size="medium" onClick={() => handleDeletePhone(phoneIndex)}>
              <DeleteIcon/>
            </Button>
          </CardActions>
        </Card>
        <Modal   
          open={openModal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          style={{width: '200px', marginLeft: '40%', backgroundColor: 'transparent'}}>
            <Box style={boxStyle}>
              <EditPhone 
                phone={phone}
                phones={phones}
                setPhones={setPhones}
                phoneIndex={phoneIndex}
                setOpenModal={setOpenModal}
              ></EditPhone>
            </Box>
        </Modal>
      </>
  )
}
