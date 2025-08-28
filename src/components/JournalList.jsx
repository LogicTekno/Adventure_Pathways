import React from "react";
import { Card, Row, Col } from "react-bootstrap";

function JournalList({ journals }) {
  if (!journals || journals.length === 0) {
    return <p className="text-center text-muted">No travel entries yet! 🌏</p>;
  }

  return (
    <Row className="g-4">
      {journals.map((entry, i) => (
        <Col md={4} key={i}>
          <Card className="shadow-lg journal-card p-2" style={{ borderRadius: "15px", transition: "transform 0.3s" }}>
            <Card.Body>
              <Card.Title>📍 {entry.location}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">📝 {entry.title}</Card.Subtitle>
              <Card.Text>✏️ {entry.notes}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default JournalList;
