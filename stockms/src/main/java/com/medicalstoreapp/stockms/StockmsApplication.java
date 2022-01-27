package com.medicalstoreapp.stockms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
@SpringBootApplication
public class StockmsApplication {

	public static void main(String[] args) {
		// final Logger log = LoggerFactory.getLogger(StockmsApplication.class);
		SpringApplication.run(StockmsApplication.class, args);
		// log.info("Application Started");

	}

}
