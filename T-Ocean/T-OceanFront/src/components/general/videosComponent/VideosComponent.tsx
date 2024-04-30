
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import './VideosComponent.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { useState } from 'react';

const VideosComponent = () =>{
    const [videoRoute, setVideoRoute] = useState('');
    const videoChange = (video: number) => {
        switch (video) {
            case 1:
                setVideoRoute('U-80MgjHRvI')
                break;
            case 2:
                setVideoRoute('aysJHhLJ38s')
                break;
            case 3:
                setVideoRoute('Twx8ok2uYEo')
                break;
            default:
                break;
        }
    };

    return (
        <>
            <div className="swiper-container">
                <Swiper
                // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={2}
                    navigation
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide><img src={`/images/TurismoMedioAmbiente.jpg`} alt="Imagen video" onClick={()=>videoChange(1)} style={{ cursor: 'pointer' }}/></SwiperSlide>
                    <SwiperSlide><img src={`/images/TailandiaOceano.jpg`} alt="Imagen video" onClick={()=>videoChange(2)} style={{ cursor: 'pointer' }}/></SwiperSlide>
                    <SwiperSlide><img src={`/images/coldplay.jpg`} alt="Imagen video" onClick={()=>videoChange(3)} style={{ cursor: 'pointer' }}/></SwiperSlide>
            
                </Swiper>
            </div>
            <div className='videoContainer'>
                <iframe 
                    width="50%" 
                    height="415" // Altura estándar para videos de YouTube
                    src={`https://www.youtube.com/embed/${videoRoute}`} 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                ></iframe>
            </div>
        </>
    )
    
}

export default VideosComponent;
