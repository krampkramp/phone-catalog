
import React from 'react'
import {Grid, TextField} from '@mui/material';


const fieldStyle = {
  paddingBottom: '10px',
  width: '100%'
}

export const EditPhone = (props) => {
  const {phone,phones,setPhones,phoneIndex,setOpenModal} = props;

  const handleChange = ({target}) => {
    let phonesCopy= [...phones];
    let phoneCopy = {...phone};

    phoneCopy = {...phoneCopy, [target.name]: target.value}
    phonesCopy[phoneIndex] = phoneCopy;

    setPhones(phonesCopy)
  }
 
  return (
    <>
      <Grid container style={{padding: '50px 20px', }}>

        <Grid item xs={6} >
          <TextField id="outlined-basic" name='name' onChange={(e) => handleChange(e)} label="Name"  variant="outlined" defaultValue={phone.name} style={fieldStyle}/>
        </Grid>
        <Grid item xs={6} >
          <TextField id="outlined-basic" name='manufacturer'onChange={(e) => handleChange(e)} label="Manufacturer" variant="outlined" defaultValue={phone.manufacturer}  style={fieldStyle}/>
        </Grid>
        <Grid item xs={6} >
          <TextField id="outlined-basic"  name='description'onChange={(e) => handleChange(e)}  label="Description" variant="outlined" defaultValue={phone.description}  style={fieldStyle}/>
        </Grid>
        <Grid item xs={6} >
          <TextField id="outlined-basic"  name='color'onChange={(e) => handleChange(e)}  label="Color"  variant="outlined" defaultValue={phone.color} style={fieldStyle}/>
        </Grid>
        <Grid item xs={6} >
          <TextField id="outlined-basic" type="number"  name='price' onChange={(e) => handleChange(e)} label="Price" variant="outlined" defaultValue={phone.price}  style={fieldStyle}/>
        </Grid>
        <Grid item xs={6} >
          <TextField id="outlined-basic"  name='screen' onChange={(e) => handleChange(e)} label="Screen" variant="outlined" defaultValue={phone.screen}  style={fieldStyle}/>
        </Grid>
        <Grid item xs={6} >
          <TextField id="outlined-basic"  name='processor' onChange={(e) => handleChange(e)} label="Processor" variant="outlined" defaultValue={phone.processor}  style={fieldStyle}/>
        </Grid>
        <Grid item xs={6} >
          <TextField id="outlined-basic" type="number" name='ram' onChange={(e) => handleChange(e)} label="RAM" variant="outlined" defaultValue={phone.ram}  style={fieldStyle}/>
        </Grid>

      </Grid>
    </>
  )
}
