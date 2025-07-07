import React from 'react';

const cardStyles = {
  wrapper: {
    border: '1px solid #ddd',
    padding: '16px',
    borderRadius: '8px',
    backgroundColor: '#fafafa',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    margin: '12px 0',
  },
  heading: {
    marginTop: 0,
    color: '#333',
    fontSize: '20px',
  },
};

const Card = ({ name, children }) => {
  return (
    <div style={cardStyles.wrapper}>
      <h3 style={cardStyles.heading}>{name}</h3>
      {children}
    </div>
  );
};

export default Card;
