import React, { useState } from 'react';
import Axios from 'axios';

import { Button, Alert, Typography, Snackbar, Input, CircularProgress } from '@mui/material';

import validationSchema from '../../utils/addItemValidation';

import useStyles from './style';

function AddHouse() {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);

  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const clear = () => {
    setLoading(false);
    setName('');
    setDescription('');
  };

  const handleChange = ({ target: { value, name: inputName } }) => {
    switch (inputName) {
      case 'name':
        setName(value);
        break;
      case 'description':
        setDescription(value);
        break;
      default:
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      setError('');
      const itemData = {
        name, description
      };

      setLoading(true);

      await validationSchema.validate(itemData, {
        abortEarly: false
      });

      await Axios.post('/api/v1/items', itemData);
      setLoading(false);
      clear();
      setOpen(true);
    } catch (err) {
      let errorMsg;
      if (err.errors) {
        const [firstError] = err.errors;
        errorMsg = firstError;
      } else if (err.response) {
        errorMsg = err.response.data.message;
      } else {
        errorMsg = 'some error happened please try again later';
      }
      setLoading(false);
      setError(errorMsg);
    }
  };

  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          The item added Successfully
        </Alert>
      </Snackbar>
      <Typography
        variant="h4"
        component="h4"
        color="primary"
        className={classes.header}
      >
        Add New item
      </Typography>
      <form className={classes.form}>
        <Input
          value={name}
          className={classes.input}
          placeholder='enter item name'
          variant="outlined"
          type="text"
          onChange={handleChange}
          label="name"
          name="name"
          required
        />
        <Input
          className={classes.input}
          variant="outlined"
          type="text"
          onChange={handleChange}
          placeholder='enter item description'
          value={description}
          label="Description"
          name="description"
          required
        />

        {error && (
          <Alert className={classes.alert} severity="error">
            {error}
          </Alert>
        )}
        <Button
          className={classes.button}
          variant="outlined"
          color="primary"
          onClick={handleSubmit}
        >
          {loading ? <CircularProgress color='secondary' /> : 'Add'}
        </Button>
      </form>
    </div>
  );
}

export default AddHouse;
