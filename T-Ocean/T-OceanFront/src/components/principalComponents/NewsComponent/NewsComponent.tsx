import BlockNewComponent from "../../general/blockNewComponent/BlockNewComponent"


const NewsComponent = () => {
    return (
        <>

         <head>
            <header>
              
            </header>
          </head>
        
          <h2>Noticias</h2>
          <div className="body_news">
            <div className="newContainer-1">Aqui va ir noticia 1</div>
            <div className="newContainer-2">Aqui va la noticia 2</div>
            <div className="newContainer-3"> Aqui va la noticia 3</div>
            Agregar mas contenedores si se necesitan mas
          </div>

          <BlockNewComponent></BlockNewComponent>


        </>
    )
}

export default NewsComponent