import { Card, Button } from "react-bootstrap";

const Noticia = ({ noticiaProps }) => {
  return (
    <div className="h-100 my-3">
      <Card className="h-100 d-flex flex-column">
       <div className="contenedorImgNoticia">
        <img
          className="imgNoticia"
          src={noticiaProps.image_url}
          alt={noticiaProps.title}
        />
       </div>
        
        <Card.Body className="flex-grow-1 d-flex flex-column">
          <Card.Title>{noticiaProps.title}</Card.Title>
          <Card.Text>{noticiaProps.description}</Card.Text>
          
          <div className="card-footer p-2 rounded-2">
            <a href={noticiaProps.link} class="btn btn-primary w-100 link-light">
            Saber más
          </a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Noticia;
