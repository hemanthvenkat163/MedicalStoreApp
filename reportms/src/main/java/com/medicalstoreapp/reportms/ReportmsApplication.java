package com.medicalstoreapp.reportms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

//import com.medicalstoreapp.reportms.manualtesting.ReportManualTesting;

@EnableEurekaClient
@SpringBootApplication
public class ReportmsApplication {

	public static void main(String[] args) {
		SpringApplication.run(ReportmsApplication.class, args);
	    /**ConfigurableApplicationContext context = SpringApplication.run(ReportmsApplication.class, args);
		ReportManualTesting test=context.getBean(ReportManualTesting.class);
		test.run();**/
	}

	@LoadBalanced
	@Bean
	public RestTemplate restTemplate() {
		return new RestTemplate();
	}
}
