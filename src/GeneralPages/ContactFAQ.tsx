import { Accordion, Card, Button, Container } from "react-bootstrap";

function ContactFAQ() {
  return (
    <Container className="my-5 py-5">
      <h2 className="text-center my-5 ">Frequently Asked Questions</h2>
      <Accordion className="mb-5 pb-5" defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            How do I get in touch with Chukay?
          </Accordion.Header>
          <Accordion.Body className="bg-dark text-white">
            You can fill out the contact form on this page or send an email to
            our support team at support@chukay.com.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            What is the expected response time for a contact form submission?
          </Accordion.Header>
          <Accordion.Body className="bg-dark text-white">
            We try to respond to all messages within 24 hours, but please allow
            up to 48 hours for a response during busy periods.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            How can I report a technical issue on the website?
          </Accordion.Header>
          <Accordion.Body className="bg-dark text-white">
            Please send an email to our support team at support@chukay.com with
            a description of the issue and any relevant screenshots or error
            messages.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            What should I do if I have a question about an order I placed on
            Chukay?
          </Accordion.Header>
          <Accordion.Body className="bg-dark text-white">
            Please contact our customer service team at
            customerservice@chukay.com with your order number and any relevant
            details about the issue.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            Can I change my contact information or unsubscribe from Chukay's
            email list?
          </Accordion.Header>
          <Accordion.Body className="bg-dark text-white">
            Yes, you can manage your contact information and email preferences
            by logging into your Chukay account and updating your profile
            settings.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

export default ContactFAQ;
