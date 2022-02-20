import React, { useContext, useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Button, Typography, Grid, CircularProgress } from '@mui/material';
import Axios from 'axios';
import { Box } from '@mui/system';
import { ItemContext } from '../../Context/Items';

export default function FolderList() {
  const { items } = useContext(ItemContext);
  const [loading, setLoading] = useState(false);
  const [itemId, setItemId] = useState(1);
  const [item, setItem] = useState();

  useEffect(() => {
    let unmounted = true;
    (async () => {
      try {
        setLoading(true);
        const { data } = await Axios(`/api/v1/items/${itemId}`);
        if (unmounted) {
          setItem(data.data[0]);
          setLoading(false);
        }
      } catch (err) {
        setLoading(false);
      }
    })();
    return () => {
      unmounted = false;
    };
  }, [itemId]);
  return (

<Grid container spacing={2}>

  <Grid item xs={4}>
  <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
        }}
      >
        {items?.map(({ id, name, description }) => (
          <Button
            key={id}
            onClick={() => {
              setItemId(id);
            }}
          >
            <ListItem>
              <ListItemText
                primary={name}
                secondary={`${description.slice(0, 15)}.....`}
              />
            </ListItem>
          </Button>
        ))}
      </List>
  </Grid>
  <Grid item xs={8} style={{
    display: 'flex',
    alignContent: 'center ',
    marginTop: '20',
  }}>
  {item ? (
        <Box>
          <Typography>{`${item.id} ${item.name}`}</Typography>
          <Typography>{item.description}</Typography>
        </Box>
  ) : (
        <CircularProgress/>
  )}
      {loading && <CircularProgress/>}
  </Grid>
</Grid>
  );
}
