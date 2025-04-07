import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListComponent from './ListComponent';

interface DataItem {
  id: number;
  title: string;
}

function MainComponent() {
  const [items, setItems] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setItems(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Failed to fetch data');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>List of Items</h1>
      <ListComponent
        items={items}
        renderItem={(item: DataItem) => <div>{item.title}</div>}
      />
    </div>
  );
}

export default MainComponent;