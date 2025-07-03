import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Carousel, Row, Col, Badge } from 'react-bootstrap';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/getProjects').then(res => setProjects(res.data));
  }, []);

  return (
    <div className="mb-4">
      <h2 style={{ fontSize: '24px' }}>Projects</h2>
      {projects.map((proj, index) => (
        <Card key={index} className="mb-4 p-3 shadow-sm ">
          <Row className="project-row">
            {/* Carousel */}
            <Col md={6} xs={12} className="mb-3 project-feature">
              <Carousel>
                {proj.images.map((img, idx) => (
                  <Carousel.Item key={idx}>
                    <img
                      className="d-block w-100 rounded project-image"
                      src={img}
                      alt={`Slide ${idx + 1}`}
                      style={{ height: '300px', objectFit: 'contain' }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>

            {/* Details */}
            <Col md={6} xs={12} className="d-flex flex-column justify-content-center project-details">
              <h3 style={{ fontSize: '20px', color: "white" }}>{proj.title}</h3>
              <Badge bg="primary" className="mb-2" style={{ fontSize: '14px' }}>
                {proj.highlight}
              </Badge>
              <div className="project-details" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {proj.details.map((detail, dIdx) => (
                  <div
                    key={dIdx}
                    className="p-2 border rounded"
                    style={{ backgroundColor: '#f8f9fa', fontSize: '16px' }}
                  >
                    ✅ {detail}
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Card>
      ))}
    </div>
  );
}
