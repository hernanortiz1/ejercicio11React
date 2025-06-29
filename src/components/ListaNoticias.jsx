import Noticia from "./Noticia";

const ListaNoticias = ({ datosProps }) => {
  return (
    <div>
      <div className="text-center bg-white rounded-3">
        <h2>Lista de peliculas</h2>
        <div className="row row-cols-1 row-cols-md-3">
          {datosProps.map((item, indice) => (
            <Noticia key={indice} datosProps={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListaNoticias;
