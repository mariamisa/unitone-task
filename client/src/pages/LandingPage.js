import React, { useContext } from 'react';

import { ItemContext } from '../Context/Items';
import Modal from '../Components/modal';

const Dashboard = () => {
  const { items } = useContext(ItemContext);

  return (
    <>
    <Modal/>
      {items?.map(({ name, description }, index) => (
        <div key={index}>
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
      ))}
    </>
  );
};

export default Dashboard;
