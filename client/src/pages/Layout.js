import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { ItemContext } from '../Context/Items';

const LayoutPage = ({ children }) => {
  const { loading } = useContext(ItemContext);
  return (
    <>
      {loading ? (
      <CircularProgress />
      ) : (
        <Box>
        {children}
        </Box>
      )}
    </>
  );
};

LayoutPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutPage;
