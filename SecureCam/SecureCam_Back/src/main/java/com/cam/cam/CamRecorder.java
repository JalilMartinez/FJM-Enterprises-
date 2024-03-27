package com.cam.cam;


import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;

import javax.imageio.ImageIO;

import com.github.sarxos.webcam.Webcam;


public class CamRecorder {

    public CamRecorder() throws IOException {


    }
    public BufferedImage getImage (boolean isOpened){
        Webcam webcam = Webcam.getDefault();
        if (!isOpened){
            webcam.setCustomViewSizes(new Dimension(1280, 720)); // register custom size
            webcam.setViewSize(new Dimension(1280, 720)); // set size
        }
        webcam.open(); // open camera device
        return webcam.getImage();
    }



}
