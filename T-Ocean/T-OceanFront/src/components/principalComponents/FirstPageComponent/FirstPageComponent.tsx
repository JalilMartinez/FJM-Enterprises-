import VideosComponent from "../../general/videosComponent/VideosComponent"

const FirstPageComponent = ()=>{
    return(
        <>

            <header className="titlesContainer" >
                <h1>El Impacto Humano Sobre los Oceanos</h1>
                <h2> T-Ocean</h2>
                <img src="https://s1.1zoom.me/b5250/864/Sea_Beach_Sand_579492_2560x1440.jpg"></img>
            </header>

            <div className="informacionContainer">
                <h2>¿Que podemos hacer para protegerlo?</h2>
                <div>
                    <p>
                    ¿Qué significa el gran azul para usted? ¿Es un destino de vacaciones, una fuente de ingresos, una fuente vital 
                    de proteínas de 151 millones de toneladas para el consumo humano como para los 60 millones de personas que trabajan 
                    en la industria de la pesca marítima o un hogar para millones de especies? El océano tiene distintos significados 
                    para cada uno de nosotros, pero para todos nosotros, es una fuente de vida.
                    </p>
                </div>

                <div>
                    <h2>El costo del Turismoo</h2>
                    <p>
                    Algunos de los principales centros turísticos luchan por gestionar la afluencia cada vez mayor de viajeros.
                    En ciudades como Ámsterdam, Venecia y Barcelona, los residentes urbanos están expresando su preocupación y 
                    el sentimiento antiturístico está creciendo. El aburguesamiento impulsado por el turismo puede ejercer 
                    presión sobre el bienestar y la subsistencia de la comunidad local, al provocar un alza de los precios 
                    inmobiliarios, hacer que el destino esté saturado e intensificar la erosión de la costa por las actividades 
                    turísticas en las zonas costeras.
                    Hoy es más importante que nunca concientizar en temas de sostenibilidad, ya que el contenido generado por el
                    usuario y las plataformas digitales de pares como Instagram, Facebook, Airbnb y TripAdvisor se están convirtiendo
                    en factores influyentes para la economía de la experiencia, las tendencias del turismo y las actitudes de los
                    trotamundos.

                    </p>
                </div>
                <div>
                    <h2>Protector solar tóxico en nuestros mares</h2>
                    <p>
                    A medida que la cantidad de amantes de las playas aumenta, también lo hace el uso de protectores solares. 
                    Muchas personas no lo saben, pero cada año llegan al mundo submarino 14 000 toneladas de protector solar tóxico.
                    En 2018, Hawái, México y Aruba anunciaron una prohibición de las lociones de protección solar no biodegradables.
                    Seychelles dio un paso más y emitió un bono azul para respaldar la financiación de proyectos basados en el océano
                    y en el mar con beneficios económicos, medioambientales y climáticos positivos. Es fundamental tener un enfoque
                    holístico e innovador de la economía azul, ya que se espera que para el año 2030 la industria crezca al doble
                    de la economía convencional.
                    </p>
                </div>
                
                <h2>Mareas circulares</h2>
                <p>
                La conciencia mundial sobre la huella del (micro)plástico procedente del turismo cobró impulso en 2018. Los investigadores 
                calculan que ocho millones de toneladas métricas adicionales de plástico terminan en el océano cada año. Aproximadamente
                el 40 % del plástico se encuentra en envases de un solo uso, ya que los turistas llenan las playas con sorbetes, 
                tazas de café, botellas de agua y colillas de cigarrillos.
                Existen tanto aspectos positivos como negativos provenientes del aumento de la movilidad humana y el turismo; por lo 
                tanto, es esencial encontrar un equilibrio para fomentar el turismo para el crecimiento económico y estimular los
                incentivos sostenibles para la conservación de los océanos.
                El océano puede parecer infinito, pero todos estamos en el mismo barco y es necesario que encontremos soluciones comunes
                para sobrellevar la situación juntos. Esto es esencial no solo para nuestros océanos y la vida marina, sino también 
                para la supervivencia humana.
                </p>
            </div>
            
            

            
            <div className="newsContainer">
                Aqui va ir la seccion de noticias
            </div>

            <div className="videosContainer">
                <VideosComponent />
               
            </div>

            <div className="eventContainer">    
                Aqui va el contenedor de los eventos
            </div>
        </>
    )
}
export default FirstPageComponent