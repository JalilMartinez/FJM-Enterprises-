package com.cam.cam.webCamOpenCV;


import com.cam.cam.CamApplication;
import com.cam.cam.VideoService;
import org.bytedeco.opencv.opencv_core.Mat;
import org.bytedeco.opencv.opencv_videoio.VideoCapture;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import org.bytedeco.opencv.opencv_videoio.VideoCapture;
import org.bytedeco.opencv.opencv_videoio.VideoWriter;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
class WebcamControllerCV {
    @Autowired
    private webCamService webCamService;
    @Autowired
    VideoService videoService;

    private VideoCapture capture;
    private boolean isRecording = false;

    public WebcamControllerCV() {
        capture = new VideoCapture();
        capture.set(3, 1920); // Ancho
        capture.set(4, 1080);  // Alto
        capture.open(0); // Abre la primera cámara disponible
    }

    @GetMapping("/getImage")
    public String getImage() throws IOException {
        Mat mat = new Mat();
        if (capture.read(mat)) {
            BufferedImage image = webCamService.matToBufferedImage(mat);
            return webCamService.BufferedImageToBase64String(image);
        }
        return "";
    }

    @GetMapping("/startRecordingCV")
    public void startRecording() throws Exception {
        if (isRecording) {
            return;
        }
        isRecording = true;
        videoService.startRecording();
        while (isRecording) {
            Mat mat = new Mat();
            if (capture.read(mat)) {
                videoService.addImages(webCamService.matToBufferedImage(mat));
                System.out.println("Escribiendo");
            }
        }
    }

    @GetMapping("/stopRecordingCV")
    public void stopRecording() throws Exception {
        if (!isRecording) {
            return;
        }
        isRecording = false;
        videoService.stopRecording();
    }
}
