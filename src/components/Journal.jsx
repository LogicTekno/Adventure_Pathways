import React, { useState, useRef } from "react";
import { Container, Form, Button, Card, Row, Col } from "react-bootstrap";

function Journal() {
  const [location, setLocation] = useState("");
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [entries, setEntries] = useState([]);
  const lastEntryRef = useRef(null); // reference to last card

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!location || !title) {
      alert("⚠️ Please fill Location and Title!");
      return;
    }

    const newEntry = { location, title, notes };
    setEntries([...entries, newEntry]);

    // Clear form
    setLocation("");
    setTitle("");
    setNotes("");

    // Scroll to last card
    setTimeout(() => {
      lastEntryRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <Container style={{ padding: "40px 0" }}>
      <h2 className="text-center mb-4">✈️ Travel Memories</h2>

      {/* Styled Add Entry Form */}
      <Form onSubmit={handleSubmit} style={{ maxWidth: "600px", margin: "0 auto" }}>
        {/* Location */}
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="📍 Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            style={{
              borderRadius: "12px",
              padding: "12px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
            }}
          />
        </Form.Group>

        {/* Title */}
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="📝 Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              borderRadius: "12px",
              padding: "12px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
            }}
          />
        </Form.Group>

        {/* Notes */}
        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="✏️ Notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            style={{
              borderRadius: "12px",
              padding: "12px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
            }}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          ➕ Add Entry
        </Button>
      </Form>

      {/* Memory Cards */}
      <Row className="mt-5">
        {entries.length === 0 && <p className="text-center text-muted">No memories yet! 🌏</p>}

        {entries.map((entry, index) => (
          <Col
            md={4}
            key={index}
            className="mb-3"
            ref={index === entries.length - 1 ? lastEntryRef : null} // scroll to last
          >
            <Card className="shadow-lg" style={{ borderRadius: "12px" }}>
              <Card.Header>📍 {entry.location}</Card.Header>
              <Card.Body>
                <Card.Title>📝 {entry.title}</Card.Title>
                <Card.Text>✏️ {entry.notes}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Journal;
