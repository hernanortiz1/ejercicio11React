import { Card, Button } from "react-bootstrap";

const Noticia = ({ noticiaProps }) => {
  return (
    <div className="h-100 my-3 p-md-2">
      <Card className="h-100 d-flex flex-column rounded-3 shadow">
       <div className="contenedorImgNoticia">
        <img
          className="imgNoticia rounded-3"
          src={noticiaProps.image_url}
          alt={noticiaProps.title}
        />
       </div>
        
        <Card.Body className="flex-grow-1 d-flex flex-column">
          <Card.Title className="fs-3 pb-3">{noticiaProps.title}</Card.Title>
          <Card.Text className="text-start fs-5">{noticiaProps.description}</Card.Text>
        </Card.Body>
         <div className="card-footer p-2 rounded-2">
            <a href={noticiaProps.link} class="btn btn-primary w-100 link-light">
            Saber más
          </a>
          </div>
      </Card>
    </div>
  );
};

export default Noticia;
