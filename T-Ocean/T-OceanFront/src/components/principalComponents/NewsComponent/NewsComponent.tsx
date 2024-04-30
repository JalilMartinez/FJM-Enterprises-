import BlockNewComponent from "../../general/blockNewComponent/blockNewComponent"
import "./NewsComponent.css"

const NewsComponent = () => {
    return (
        <>

         
            <header className="headerNewsContainer">
              <div className="video-Newscontainer">
                  <video autoPlay muted loop id="video-Newsbackground" className="video-background">
                  <source src="videos/ocean.mp4" type="video/mp4" />
                  </video>
              </div>
              <div className="titlesNews">
                  <h1 className="News-title">Noticias</h1>
                  <h2 className="News-subtitle">T-Ocean</h2>
              </div>
            </header>
          
        
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