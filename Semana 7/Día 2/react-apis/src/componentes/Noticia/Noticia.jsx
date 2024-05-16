
const Noticia = ({noticia}) => {
    return(
        <>
            <h2> {noticia.title} </h2>
            <div>
                <img src={noticia.urlToImage} alt="Noticia" />
            </div>
            <p> {noticia.author} </p>
            <p> {noticia.description} </p>
            <a href={noticia.url}> Ir al articulo original </a>
        </>
    );
}

export default Noticia;