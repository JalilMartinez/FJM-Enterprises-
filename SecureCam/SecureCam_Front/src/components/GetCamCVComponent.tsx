import  { useEffect, useState } from 'react';
import axios from 'axios';

const GetCamCVComponent = () => {
    const [imageData, setImageData] = useState('');
    const [images, setImages] = useState([]);
    const [recording, setRecording] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [timer, setTimer] = useState({ hours: 0, minutes: 0, seconds: 0 });
    const [timerIntervalId, setTimerIntervalId] = useState(null); // Nuevo estado para almacenar el ID del intervalo del temporizador

    useEffect(() => {
        const intervalId = setInterval(async () => {
            try {
                const response = await axios.get('http://localhost:8080/getImage'); // Ajusta la URL según la configuración de tu servidor
                setImageData(response.data);
                if (recording) {
                    setImages(prevImages => [...prevImages, response.data]);
                    
                }
            } catch (error) {
                console.error('Error fetching image:', error);
            }
        }, 65); // Intervalo de 1000 milisegundos (1 segundo)

        // Limpia el intervalo cuando el componente se desmonta o actualiza
        return () => clearInterval(intervalId);
    }, []);
    const startRecording = () => {
      setRecording(true);
      const intervalId = setInterval(() => {
        setTimer(prevTimer => {
          let { hours, minutes, seconds } = prevTimer;
          seconds++;
          if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
              minutes = 0;
              hours++;
            }
          }
          return { hours, minutes, seconds };
        });
      }, 1000); // Intervalo de 1000 milisegundos (1 segundo)

      const fetchVideoRecord = async () => {
          try {
              await axios.get('http://localhost:8080/startRecordingCV');
              
          } catch (error) {
              console.error('Error fetching images:', error);
          }
      };
      setTimerIntervalId(intervalId);
      fetchVideoRecord();
    };
  
    const stopRecording = async () => {
      setRecording(false);
        setIsProcessing(true);

        // Detener el temporizador
        clearInterval(timerIntervalId);

        // Reiniciar el temporizador a cero
        setTimer({ hours: 0, minutes: 0, seconds: 0 });

        setIsProcessing(false);
        // Aquí puedes continuar con la lógica para codificar y empaquetar las imágenes en un archivo MP4
        const fetchVideoRecordStop = async () => {
            try {
                await axios.get('http://localhost:8080/stopRecordingCV');
                
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };
        fetchVideoRecordStop();
    };

    return (
      <>
        <div>
            {imageData && <img src={`data:image/jpeg;base64,${imageData}`} alt="Captured Image" />}
        </div>
        <div>
          <div>
            Tiempo transcurrido: {timer.hours.toString().padStart(2, '0')}:
            {timer.minutes.toString().padStart(2, '0')}:
            {timer.seconds.toString().padStart(2, '0')}
          </div>
          <button onClick={startRecording} disabled={recording || isProcessing}>
            Iniciar grabación
          </button>
          <button onClick={stopRecording} disabled={!recording || isProcessing}>
            Detener grabación
          </button>
        </div>
      </>
        
    );
};

export default GetCamCVComponent;
