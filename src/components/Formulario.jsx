import { Button, Col, Form, Row } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";
import { useEffect, useState } from "react";

const Formulario = () => {
  const [noticia, setNoticia] = useState({});

  useEffect(() => {
   obtenerNoticia();
  }, []); 
  
    constobtenerNoticia = async () => {
    try {
    //   setMostrarSpinner(true); 
      const respuesta = await fetch(
        "https://thesimpsonsquoteapi.glitch.me/quotes"
      );

      console.log(respuesta);

      if (respuesta.status === 200) {
        const datos = await respuesta.json(); 
        console.log(datos[0]);
        // guardar dentro del state
        setFrase(datos[0]);
        //actualizar spinner
        // setMostrarSpinner(false);
      }
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <div>
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
      <section className="mt-4">
        <ListaNoticias noticiaProps={noticia}/>
      </section>
    </div>
  );
};

export default Formulario;
