import React from 'react';

const ListComponent = ({ items, renderItem }) => {
  if (!items.length) {
    return <p>No items to display</p>;
  }

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
};

export default ListComponent;