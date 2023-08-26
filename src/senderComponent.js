import React from 'react';
import groceryData from './groceryData';
import ReceiverComponent from './receiverComponent';

const SenderComponent = () => {
  return (
    <div>
      <h1>Sender Component</h1>
      <ReceiverComponent groceries={groceryData} />
    </div>
  );
};

export default SenderComponent;
