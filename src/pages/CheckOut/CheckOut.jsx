import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
  const service = useLoaderData()
  console.log(service)
  const {title} = service
  return (
    <div>
      <h2>Checkout</h2>
      {title}
    </div>
  );
};

export default CheckOut;