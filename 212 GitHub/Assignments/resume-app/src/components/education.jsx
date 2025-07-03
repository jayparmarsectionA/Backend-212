import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';

export default function Education() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/getEdu').then(res => setData(res.data));
  }, []);

  return (
    <div className="mb-3">
      <h2 style={{ fontSize: '24px' }}>Education</h2>
      {data.map((edu, index) => (
        <Card key={index} className="mb-2 p-3">
          <Card.Body>
            <Card.Title style={{ fontSize: '18px' }}>{edu.institution}</Card.Title>
            <Card.Subtitle style={{ fontSize: '16px' }} className="mb-2 text-muted">{edu.degree}</Card.Subtitle>
            <Card.Text style={{ fontSize: '16px' }}>{edu.year}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
