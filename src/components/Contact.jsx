import React from "react";
import { Container, Form, Button, Card, InputGroup } from "react-bootstrap";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Message sent successfully!");
  };

  return (
    <section id="contact" className="py-5" 
    style={{
    background: "linear-gradient(135deg, #ffdedeff, #b5d6ffff, #96ff99ff, #ffc1fcff)",
    minHeight: "100vh",
    padding: "50px 0"
  }}>
      {/* Inline styles */}
      <style>{`
        .contact-card {
          background: #fff;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          transition: transform 0.3s, box-shadow 0.3s;
          border-radius: 15px;
        }
        .contact-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 20px rgba(0,0,0,0.2);
        }
        .form-control:focus {
          border-color: #28a745;
          box-shadow: 0 0 5px rgba(211, 20, 106, 0.5);
        }
      `}</style>

      <Container>
        <h2 className="text-center mb-4">📩 Contact Me</h2>

        <Card className="contact-card mx-auto p-4" style={{ maxWidth: "500px" }}>
          <Form onSubmit={handleSubmit}>
            {/* Name */}
            <Form.Group className="mb-3">
              <InputGroup>
                <InputGroup.Text>✏️</InputGroup.Text>
                <Form.Control type="text" placeholder="Name" required />
              </InputGroup>
            </Form.Group>

            {/* Email */}
            <Form.Group className="mb-3">
              <InputGroup>
                <InputGroup.Text>📧</InputGroup.Text>
                <Form.Control type="email" placeholder="Email" required />
              </InputGroup>
            </Form.Group>

            {/* Phone */}
            <Form.Group className="mb-3">
              <InputGroup>
                <InputGroup.Text>📞</InputGroup.Text>
                <Form.Control type="tel" placeholder="Phone Number" required />
              </InputGroup>
            </Form.Group>

            {/* Message */}
            <Form.Group className="mb-3">
              <InputGroup>
                <InputGroup.Text>📝</InputGroup.Text>
                <Form.Control as="textarea" rows={4} placeholder="Message" required />
              </InputGroup>
            </Form.Group>

            <Button variant="success" type="submit" className="w-100">
              Send
            </Button>
          </Form>
        </Card>
      </Container>
    </section>
  );
}

export default Contact;
