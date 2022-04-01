import React,{useState} from 'react'
import {Button, Grid} from '@mui/material';

import { PHONES } from '../common/constants';
import { Phone } from './Phone';


export const Dashboard = () => {
  const [phones, setPhones] = useState(PHONES);
  const [openModal,setOpenModal] = useState(false);

  const handleNewPhone = () => {
    const phoneCopy = [...phones];
    const objectPhone =   {
      id: -1,
      name: '',
      manufacturer: '',
      description: '',
      color: '',
      price: null,
      imageFileName: '',
      screen: '',
      processor: '',
      ram: null
  };
  setOpenModal(true);
  phoneCopy.push(objectPhone)
  setPhones(phoneCopy);
  }

  return (
    <>
    <Grid container >
      <Grid item xs={12}>
        <h1>Phone Catalog</h1>
      </Grid>
      <Grid item xs={12} >
        <Button variant="contained" onClick={ () => handleNewPhone()}>Add New Phone</Button>
        <Grid container spacing={2}>
          {phones.map((phone,index) => (
           <Grid item xs={2} key={index} >
            <Phone 
              phone={phone}
              phones={phones}
              phoneIndex={index}
              setPhones={setPhones}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
            </Grid>
          ))}
        </Grid>
      </Grid>
      
    </Grid>

    </>
  )
}
