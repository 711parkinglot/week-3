import React from 'react';

const ReceiverComponent = (props) => {
  const { groceries } = props;

  return (
    <div>
      <h2>Receiver Component</h2>
      <ul>
        {groceries.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReceiverComponent;