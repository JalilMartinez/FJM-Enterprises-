package com.cam.cam.webCamOpenCV;

import org.bytedeco.javacv.Frame;
import org.bytedeco.javacv.FrameRecorder;
import org.bytedeco.javacv.Java2DFrameConverter;
import org.bytedeco.javacv.OpenCVFrameConverter;
import org.bytedeco.opencv.global.opencv_imgproc;
import org.bytedeco.opencv.opencv_core.IplImage;
import org.bytedeco.opencv.opencv_core.Mat;
import org.bytedeco.opencv.opencv_videoio.VideoWriter;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Service
public class webCamService {
    private String outputFileName;
    public BufferedImage matToBufferedImage(Mat mat) {
        int type = BufferedImage.TYPE_BYTE_GRAY;
        if (mat.channels() > 1) {
            type = BufferedImage.TYPE_3BYTE_BGR;
        }
        int bufferSize = mat.channels() * mat.cols() * mat.rows();
        byte[] b = new byte[bufferSize];
        mat.data().get(b);
        BufferedImage image = new BufferedImage(mat.cols(), mat.rows(), type);
        final byte[] targetPixels = ((java.awt.image.DataBufferByte) image.getRaster().getDataBuffer()).getData();
        System.arraycopy(b, 0, targetPixels, 0, b.length);
        return image;
    }
    public String BufferedImageToBase64String(BufferedImage image) throws IOException {
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        ImageIO.write(image, "jpg", baos);
        byte[] imageBytes = baos.toByteArray();
        return java.util.Base64.getEncoder().encodeToString(imageBytes);

    }

    public VideoWriter startRecording() throws Exception {

        int fourcc = VideoWriter.fourcc((byte)'X', (byte)'2', (byte)'6', (byte)'4');
        int fps = 50; // Aumentar a 50 FPS
        int width = (int)1920 ;
        int height = (int) 1080;
        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd_HHmmss");
        outputFileName = "output_" + sdf.format(new Date()) + ".mp4";
        return new VideoWriter(outputFileName, fourcc, fps, new org.bytedeco.opencv.opencv_core.Size(width, height), true);

    }

}
