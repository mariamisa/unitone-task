import React, { useState } from 'react';
import { Box, Button, Modal } from '@mui/material';

import Form from './form';

const style = {
  position: 'absolute',
  width: '500',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>add New item</Button>
      <Modal
        open={open}
        onClose={handleClose}
        width="100"
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Form />
        </Box>
      </Modal>
    </div>
  );
}
