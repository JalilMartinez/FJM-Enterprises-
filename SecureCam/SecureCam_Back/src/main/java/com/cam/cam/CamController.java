package com.cam.cam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;

import javax.imageio.ImageIO;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class CamController {
    @Autowired
    VideoService videoService;
    Boolean camOpened=false;
    @GetMapping("/capture")
    public String captureImages() throws IOException {
        CamApplication.recorder = new CamRecorder();
        BufferedImage image = CamApplication.recorder.getImage(camOpened);
        camOpened = true;
        // Convertir la imagen a base64
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        ImageIO.write(image, "jpg", baos);
        byte[] imageBytes = baos.toByteArray();
        String base64Image = java.util.Base64.getEncoder().encodeToString(imageBytes);

        return base64Image;
    }
    @GetMapping("/startRecording")
    public void startRecording() throws Exception {
        if(CamApplication.isRecording){
            return;
        }
        CamApplication.isRecording = true;
        videoService.startRecording();
        while (CamApplication.isRecording){
            BufferedImage image = CamApplication.recorder.getImage(camOpened);
            videoService.addImages(image);
        }
    }

    @GetMapping("/stopRecording")
    public void stopRecording() throws Exception {
        if(!CamApplication.isRecording){
            return;
        }
        CamApplication.isRecording = false;
        videoService.stopRecording();
    }

}


