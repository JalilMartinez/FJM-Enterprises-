package com.cam.cam;
import org.bytedeco.javacv.Frame;
import org.bytedeco.javacv.FrameRecorder;
import org.bytedeco.javacv.Java2DFrameConverter;
import org.bytedeco.javacv.OpenCVFrameConverter;
import org.bytedeco.opencv.global.opencv_imgproc;
import org.bytedeco.opencv.opencv_core.IplImage;
import org.bytedeco.opencv.opencv_core.Mat;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.awt.image.BufferedImage;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Service
public class VideoService {
    private boolean isRecording = false;
    private FrameRecorder recorder;

    private String videoFileName;
    public void startRecording() throws Exception {
        isRecording = true;
        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd_HHmmss");
        videoFileName = "output_" + sdf.format(new Date()) + ".mp4";
        recorder = FrameRecorder.createDefault(videoFileName, 4096 , 2160 );
        recorder.setFrameRate(15);
        recorder.start();
    }

    public void stopRecording() throws Exception {
        isRecording = false;
        if (recorder != null) {
            recorder.stop();
            recorder.release();
        }
    }

    @Async
    public void addImages(BufferedImage bufferedImage) throws IOException {
        if (isRecording) {
            try {
                Java2DFrameConverter converter = new Java2DFrameConverter();
                // Convert BufferedImage to Frame
                Frame frame = converter.convert(bufferedImage);

                // Write Frame to video
                recorder.record(frame);

            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
    private Frame resizeFrame(Frame frame, int width, int height) {
        OpenCVFrameConverter.ToIplImage converter = new OpenCVFrameConverter.ToIplImage();
        IplImage image = converter.convert(frame);
        Mat mat = converter.convertToMat(frame);
        opencv_imgproc.resize(mat, mat, new org.bytedeco.opencv.opencv_core.Size(width, height));
        return converter.convert(mat);
    }
}
