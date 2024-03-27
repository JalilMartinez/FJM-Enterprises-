package com.cam.cam;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.IOException;

@SpringBootApplication
public class CamApplication {
	public static boolean isRecording = false;
	public static CamRecorder recorder;

	public static void main(String[] args) throws IOException {

		SpringApplication.run(CamApplication.class, args);
	}

}
