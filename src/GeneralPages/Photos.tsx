import { Container, Row, Col, Image } from "react-bootstrap";

const Photos = () => {
  const images = [
    {
      id: 1,
      src: "https://via.placeholder.com/300",
      alt: "Image 1",
    },
    {
      id: 2,
      src: "https://via.placeholder.com/300",
      alt: "Image 2",
    },
    {
      id: 3,
      src: "https://via.placeholder.com/300",
      alt: "Image 3",
    },
    {
      id: 4,
      src: "https://via.placeholder.com/300",
      alt: "Image 4",
    },
    {
      id: 5,
      src: "https://via.placeholder.com/300",
      alt: "Image 5",
    },
    {
      id: 6,
      src: "https://via.placeholder.com/300",
      alt: "Image 6",
    },
    {
      id: 7,
      src: "https://via.placeholder.com/300",
      alt: "Image 5",
    },
    {
      id: 8,
      src: "https://via.placeholder.com/300",
      alt: "Image 6",
    },
  ];

  return (
    <Container className="my-5 py-5">
      <h2 className="text-center my-5">Photos</h2>
      <Row className="mb-5">
        {images.map((image) => (
          <Col md={4} lg={3} className="mb-4" key={image.id}>
            <Image src={image.src} alt={image.alt} fluid />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Photos;
