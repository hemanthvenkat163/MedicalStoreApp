package com.medicalstoreapp.reportms.dto;

import java.time.LocalDate;

import javax.validation.constraints.NotNull;

import org.springframework.validation.annotation.Validated;

@Validated
public class CreateReportRequest {

	@NotNull(message="please provide some valid date, dont provide null values")
	private LocalDate startPeriod;
	
	@NotNull(message="please provide some valid date, dont provide null values")
	private LocalDate endPeriod;

	public LocalDate getStartPeriod() {
		return startPeriod;
	}

	public void setStartPeriod(LocalDate startPeriod) {
		this.startPeriod = startPeriod;
	}

	public LocalDate getEndPeriod() {
		return endPeriod;
	}

	public void setEndPeriod(LocalDate endPeriod) {
		this.endPeriod = endPeriod;
	}

	
	
}
