import React, { useState, useEffect, createContext } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';

export const ItemContext = createContext();

const AuthProvider = ({ children }) => {
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState(null);
  const [page, setPage] = React.useState(1);

  useEffect(() => {
    let unmounted = true;
    (async () => {
      try {
        setLoading(true);
        const { data } = await Axios(`/api/v1/items?page=${page}&limit=5`);
        if (unmounted) {
          setItems(data.data);
          setLoading(false);
        }
      } catch ({ response: resError }) {
        setItems(null);
        setLoading(false);
      }
    })();
    return () => {
      unmounted = false;
    };
  }, [refresh, page]);

  return (
    <ItemContext.Provider
      value={{
        loading,
        items,
        refresh,
        setRefresh,
        page,
        setPage
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
