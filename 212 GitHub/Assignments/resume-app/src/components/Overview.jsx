import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';

export default function Overview() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('http://localhost:8000/getOverview').then(res => setData(res.data));
  }, []);

  return (
    <Card className="mb-3 p-3 custom-card">
      <Card.Body>
        <Card.Title style={{ fontSize: '24px' }}>{data.name}</Card.Title>
        <Card.Subtitle style={{ fontSize: '18px' }} className="mb-2 text-muted">{data.title}</Card.Subtitle>
        <Card.Text style={{ fontSize: '16px' }}>{data.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
