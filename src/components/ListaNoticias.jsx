import Noticia from "./Noticia";

const ListaNoticias = ({ noticiaProps }) => {
  return (
    <div>
      <div className="text-center bg-white rounded-3 py-3">
        <h3>Lista de noticias</h3>
        <div className="row row-cols-1 row-cols-md-3">
          {noticiaProps.map((item, indice) => (
            <Noticia key={indice} noticiaProps={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListaNoticias;
