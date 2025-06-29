import { Button, Col, Form, Row } from "react-bootstrap";

const Formulario = () => {
  return (
    <section className="p-3 border rounded-3 bg-white">
      <Form.Group>
        <Form.Label className="fs-4 d-flex justify-content-center">
          Seleccione categoria
        </Form.Label>
        <div className="d-flex align-items-center ">
          <Form.Select required defaultValue="">
            <option value="" disabled hidden>
              Categorias
            </option>
            <option value="business">Negocios</option>
            <option value="entertainment">Entretenimiento</option>
            <option value="health">Salud</option>
            <option value="politics">Política</option>
            <option value="science">Ciencia</option>
            <option value="sports">Deportes</option>
            <option value="technology">Tecnología</option>
          </Form.Select>
        </div>
      </Form.Group>
    </section>
  );
};

export default Formulario;
